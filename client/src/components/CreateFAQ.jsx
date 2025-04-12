import React, { useState } from "react";
import axios from "axios";
import Linkk from "../utils/Linkk"
 import { Link } from "react-router-dom";

const CreateFAQ = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    const pass = window.prompt("Please enter a secret key");
    if(pass === "NishantPP1194"){

    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);
    try {
      const response = await axios.post(Linkk + "/chat-bot/faq", {
        question,
        answer,
      });
      setMessage("FAQ added successfully!");
      setQuestion("");
      setAnswer("");
    } catch (err) {
      setError("Failed to add FAQ. Try again.");
    } finally {
      setLoading(false);
    }}else{
        alert("Secret does not matched");
    }
  };

  return (
    <div className="w-full md:w-1/2 mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Create New FAQ</h2>
       
      {message && (
        <p className="text-green-600 text-base mb-3">{message}</p>
      )}
      {error && (
        <p className="text-red-600 text-base mb-3">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="text-left">
          <label className="block font-semibold text-gray-600 mb-1">
            Question:
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            placeholder="Enter question..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-left">
          <label className="block font-semibold text-gray-600 mb-1">
            Answer:
          </label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            placeholder="Enter answer..."
            rows={4}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 rounded-md transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add FAQ"}
        </button>
      </form>
      <Link to='/'>
      <button className=" text-base text-white font-semibold my-3 w-full py-2 bg-green-500 rounded-md">Home</button>
      </Link>
    </div>
  );
};

export default CreateFAQ;
