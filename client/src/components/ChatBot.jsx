import React, { useState } from "react";
import axios from "axios";
import Linkk from "../utils/Linkk";
import img from "../assets/imgChatbot2.png";
import crossImg from "../assets/crossImg.png";
import sendIcon from "../assets/sendIcon.png";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [chats, setChats] = useState([]);
  const [chatbotOpened, setChabotOpened] = useState(false);

  const send = async () => {
    setChats((prevChats) => [
      ...prevChats,
      { by: "me", message: query, confidence: "-1" },
    ]);
    setQuery("");
    try {
      const resp = await axios.post(Linkk + "/chat-bot/chat", { query });
      setChats((prevChats) => [
        ...prevChats,
        {
          by: "bot",
          message: resp.data.answer,
          confidence: resp.data.confidence,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <div className="flex flex-col items-end">
    <AnimatePresence>
  {chatbotOpened && (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white w-[300px] h-[500px] sm:w-[400px] sm:h-[500px] rounded-2xl mb-5 shadow-lg"
    >

            <div className="flex bg-[#624fb2] text-white text-xl p-3 rounded-tl-2xl rounded-tr-2xl justify-between items-center">
              <div className="">
                ChatBot
              </div>
              <Link to='/faqs'>
              <button className="py-1 px-2 bg-blue-800 rounded-2xl text-base">All faqs</button>
              </Link>
              
            </div>
            <div className="h-[70%] flex flex-col overflow-y-auto scroll-smooth p-3">
              {!chats || chats.length === 0 ? (
                <div className="flex justify-center items-center text-3xl font-sans">
                  Start Chatting...
                </div>
              ) : (
                chats.map((chat, index) =>
                  chat?.by === "me" ? (
                    <div
                      key={index}
                      className="self-end bg-[#624fb2] text-white text-sm p-2 rounded-xl mb-3 shadow-md max-w-[200px] break-words"
                    >
                      {chat?.message}
                    </div>
                  ) : chat?.by === "bot" ? (
                    <div
                      key={index}
                      className="self-start bg-[#f6f3ff] text-black text-sm p-2 rounded-xl mb-3 shadow-md max-w-[300px] break-words"
                    >
                      {chat?.message} <br />
                      <div className="mt-1 text-xs italic">
                        Confidence score for this response is: {chat?.confidence}
                      </div>
                    </div>
                  ) : null
                )
              )}
            </div>
            <div className="flex justify-between items-center p-3">
              <input
                className="outline-none border border-black text-lg px-3 py-2 rounded-3xl w-[86%]"
                type="text"
                placeholder="Ask me your Query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === "Enter" && query.trim() !== "") {
                  send();
                }
                }}

              />
              <button
                className={`bg-[#624fb2] text-white rounded-full w-10 h-10 p-1 flex justify-center items-center cursor-pointer`}
                onClick={send}
                disabled={query === ""}
              >
                <img src={sendIcon} alt="..."/> 
              </button>
            </div>
              </motion.div>
  )}
</AnimatePresence>


        <div
          className="animate-float bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => setChabotOpened(!chatbotOpened)}
        >
          {!chatbotOpened&&
          <img src={img} alt="Chatbot" className=" w-16 h-16 rounded-full" />
           }
           {chatbotOpened&&
          <img src={crossImg} alt="Chatbot" className=" p-4 w-16 h-16 rounded-full" />
           }
        </div>
      </div>
       <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
