import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import FAQRoute from "./routes/Faq.js";
const app = express();

app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  
  // Handle OPTIONS preflight requests
  app.options('*', cors());
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(bodyParser.json());
const connectDB = async() =>{
    try {
     await mongoose.connect("mongodb+srv://nishantkumar32435:porfoliochatbot@cluster0.ds41xqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      console.log("connected")
        
    } catch (error) {
        console.log(error)
    }
} 
connectDB();
app.use('/chat-bot' ,FAQRoute )
app.use('*' , (req,res)=>{
    res.json({status:"ok"});
})

export default app;



