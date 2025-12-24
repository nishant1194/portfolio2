import React, { useState, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP); 
import Typewriter from "typewriter-effect";
import NishantImg from "../assets/images/imgs/Nishant.jpg";

function Home() {
useGSAP(() => {
  gsap.from('.paragraph', { 
    y: -60,
    duration: 1,
    delay: 1,
    stagger: 0.5,
    opacity: 0
  });  

 gsap.from('.buttonss a', {
   opacity: 0,       
  duration: 1,
  delay: 1,
  stagger: 0.5,    // one by one, every 0.5s
  ease: "power2.out"
});

}, []);



  return (
    <>
      {/* Font Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');`}
      </style>

      <div
        className="bg-[#0b1338] text-white min-h-screen flex flex-col items-center justify-center px-6"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between ">
          {/* Left Section */}
          <div className=" md:pl-16 lg:30 w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-[#02c3fc]">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Nishant")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                  options={{ loop: true }}
                />
              </span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed paragraph">
              I am a full-stack web developer.
              <br />
              I develop web apps using the MERN stack.
              <br />
              I build mobile apps with React Native.
            </p>

            <div className="buttonss flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center md:justify-start mt-6">
              <a
                href="#contact"
                className="active:scale-95 bg-gradient-to-r from-[#576cbc] to-[#357fee] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1uUMiKnB3QqR0WzzfKNokpOkwaDMteSaY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="active:scale-95 bg-gradient-to-r from-[#576cbc] to-[#357fee] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
            <img
              src={NishantImg}
              alt="Nishant"
              className="rounded-full w-3/4 sm:w-2/3 md:w-3/5 animate-float hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Keyframe animation */}
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
    </>
  );
}

export default Home;
