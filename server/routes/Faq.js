import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { pipeline } from "@xenova/transformers";
import FAQ from "../model/Faq.js";

const router = express.Router();

// Load NLP Model
let model;
const modelReady = (async () => {
  try {
    model = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
    console.log("NLP model loaded");
  } catch (err) {
    console.error("Failed to load model:", err);
  }
})();

// Middleware to ensure model is ready
router.use(async (req, res, next) => {
  await modelReady;
  if (!model) {
    return res.status(503).json({ error: "NLP model not loaded yet." });
  }
  next();
});

const genAI = new GoogleGenerativeAI("AIzaSyDeGzP4YMJ-NjTcoxglTx4Ynv7Y5M_808E");
const genmodel = genAI.getGenerativeModel({ model: "gemini-pro" });

const getNeutralResponseFromAi = async (answer) => {
  try {
    const result = await genmodel.generateContent(
      `
      I am providing you with my resume. Based on it, please answer frequently asked questions about me in a concise, professional, and confident tone. These may include questions about my education, technical skills, notable projects, leadership roles, achievements, relevant coursework, and overall experience. Your responses should be suitable for use in interviews, networking conversations, or professional summaries like LinkedIn or GitHub bios. Here is my resume: My name is Nishant, currently pursuing a B.Tech at IIT Ropar (2022–2026). I have strong technical proficiency in JavaScript, Java, Python, and TypeScript, and I’m experienced in full-stack development using the MERN stack, Redux Toolkit, Next.js, and Tailwind CSS. I also work with React Native, Zustand, and Expo for mobile app development. My key projects include an AI-integrated real-time chat app, a full-stack LeetCode clone with chatbot, a cross-platform URL shortener with QR tools, and a society website built for RSF-EE at IIT Ropar. I serve as the Web Development Head for Advitiya’25, our institute’s technical fest, and have held various positions like event coordinator and welfare committee member. I’ve completed coursework in data structures, control systems, linear algebra, and digital circuits. I was recognized as Volunteer of the Month at IIT Ropar’s Animal Welfare Committee and ranked in the top 1% in JEE Advanced. My GitHub is github.com/nishant1194, LinkedIn is linkedin.com/in/nishant-428476256, and my portfolio is portfolio. Use this information to help me answer FAQs or generate professional summaries. Now answer this faq about me
      ` + answer
    );
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);
  }
};

// Helper function to calculate cosine similarity
function cosineSimilarity(vec1, vec2) {
  const dotProduct = vec1.reduce((sum, v, i) => sum + v * vec2[i], 0);
  const norm1 = Math.sqrt(vec1.reduce((sum, v) => sum + v * v, 0));
  const norm2 = Math.sqrt(vec2.reduce((sum, v) => sum + v * v, 0));
  return dotProduct / (norm1 * norm2);
}

// Add FAQ
router.post("/faq", async (req, res) => {
  try {
    const { question, answer, id } = req.body;
    const embedding = await model(question, {
      pooling: "mean",
      normalize: true,
    });

    const newFAQ = new FAQ({
      id,
      question,
      answer,
      embedding: embedding.tolist()[0],
    });

    await newFAQ.save();
    res.json({ message: "FAQ added successfully!" });
  } catch (error) {
    console.error("Error adding FAQ:", error);
    res.status(500).json({ message: "Failed to add FAQ" });
  }
});

// Update FAQ
router.put("/faq/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;

    const embedding = await model(question, {
      pooling: "mean",
      normalize: true,
    });

    const updatedFAQ = await FAQ.findByIdAndUpdate(
      id,
      {
        question,
        answer,
        embedding: embedding.tolist()[0],
      },
      { new: true }
    );

    if (!updatedFAQ) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    res.json({ message: "FAQ updated successfully!", updatedFAQ });
  } catch (error) {
    console.error("Error updating FAQ:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete FAQ
router.delete("/faq/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFAQ = await FAQ.findByIdAndDelete(id);

    if (!deleteFAQ) {
      return res.status(404).json({ message: "FAQ not found" });
    }

    res.json({ message: "FAQ deleted successfully!", deleteFAQ });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Add FAQs in bulk
router.post("/faq-more", async (req, res) => {
  try {
    const { faqs } = req.body;

    if (!faqs || !Array.isArray(faqs)) {
      return res
        .status(400)
        .json({ error: "Invalid input data. Expected an array of FAQs." });
    }

    for (let faq of faqs) {
      if (!faq.question || !faq.answer) {
        console.warn("Skipping invalid FAQ:", faq);
        continue;
      }

      const embedding = await model(faq.question, {
        pooling: "mean",
        normalize: true,
      });

      const newFAQ = new FAQ({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
        embedding: embedding.tolist()[0],
      });

      await newFAQ.save();
    }

    res.json({ message: "FAQs added successfully!" });
  } catch (error) {
    console.error("Error adding FAQs:", error);
    res.status(500).json({ error: "Failed to add FAQs." });
  }
});

// Get All FAQs
router.get("/faq", async (req, res) => {
  try {
    const faqs = await FAQ.find({});
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve FAQs." });
  }
});

// Chatbot Query
router.post("/chat", async (req, res) => {
  try {
    const { query } = req.body;
    const userEmbedding = await model(query, {
      pooling: "mean",
      normalize: true,
    });

    const faqs = await FAQ.find({});
    let bestMatch = null;
    let bestScore = -1;

    faqs.forEach((faq) => {
      const score = cosineSimilarity(userEmbedding.tolist()[0], faq.embedding);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
    });

    if (bestMatch && bestScore > 0.5) {
      res.json({ answer: bestMatch.answer, confidence: bestScore.toFixed(2) });
    } else {
      res.json({
        answer: "I'm not sure about this. Can you provide more details?",
        confidence: bestScore.toFixed(2),
      });
    }
  } catch (error) {
    console.error("Error during chatbot query:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
