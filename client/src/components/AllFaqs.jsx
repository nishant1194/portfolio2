

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Linkk from "../utils/Linkk";
 


function AllFaqs() {
  const [faqs, setFaqs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");

  const getFaqs = async () => {
    const resp = await axios.get(Linkk+"/chat-bot/faq");
    setFaqs(resp.data);
  };

  useEffect(() => {
    getFaqs();
  }, []);

  const handleEdit = (faq) => {
    setEditingId(faq._id);
    setEditQuestion(faq.question);
    setEditAnswer(faq.answer);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditQuestion("");
    setEditAnswer("");
  };

  const handleSave = async (id) => {
    const pass = window.prompt("Please enter a secret key");
    if(pass === "NishantPP1194"){
        const updatedFaq = { question: editQuestion, answer: editAnswer };
        try {
          const resp = await axios.put(Linkk+`/chat-bot/faq/${id}`, updatedFaq);
          console.log(resp);
          await getFaqs();
          setEditingId(null);
        } catch (error) {
          console.error("Error updating FAQ:", error);
        }
    }else{
        alert("Secret does not matched");
    }

  };

  const handleDelete = async (id) => {
    const pass = window.prompt("Please enter a secret key");
    if(pass === "NishantPP1194"){
        if (!window.confirm("Are you sure you want to delete this FAQ?")) return;
        try {
          const resp = await axios.delete(Linkk+`/chat-bot/faq/${id}`);
          console.log(resp);
          await getFaqs();
        } catch (error) {
          console.error("Error deleting FAQ:", error);
        }
    }
    else{
        alert("Secret does not matched");
    }
  };

  return (<>
      <h2 className="text-xl font-semibold text-center mt-3">All FAQs</h2>
    <div className="w-3/4 h-[85vh] mx-auto my-5 bg-white p-6 rounded-lg shadow-lg flex flex-col overflow-y-auto">

      {[...faqs].reverse().map((faq) => (
        <div key={faq._id} className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
          {editingId === faq._id ? (
            <>
              <input
                type="text"
                value={editQuestion}
                onChange={(e) => setEditQuestion(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
              <textarea
                value={editAnswer}
                onChange={(e) => setEditAnswer(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleSave(faq._id)}
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-400 text-white p-2 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="font-semibold text-gray-800">Question: {faq.question}</div>
              <div className="text-gray-700 mt-2">Answer: {faq.answer}</div>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleEdit(faq)}
                  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(faq._id)}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}


    </div>
    <div className="flex justify-center mb-10">
      <Link to='/' className="mx-2">
      <button className=" text-base text-white font-semibold w-[150px] py-2 px-3 bg-green-500 rounded-2xl">Home</button>
      </Link>
      <Link to='/create-faqs' className="mx-2">
      <button className=" text-base text-white font-semibold w-[150px] py-2 px-3 bg-blue-500 rounded-2xl">Create FAQS</button>
      </Link>
    </div>
     </>
  );
}

export default AllFaqs;
