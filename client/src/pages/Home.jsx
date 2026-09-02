import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Typewriter from "typewriter-effect";

import NishantImg from "../assets/images/imgs/Nishant.jpg";

gsap.registerPlugin(useGSAP);

function Home() {
  useGSAP(() => {
    gsap.from(".paragraph", {
      y: -60,
      duration: 1,
      delay: 1,
      stagger: 0.5,
      opacity: 0,
    });

    gsap.from(".buttonss a", {
      opacity: 0,
      duration: 1,
      delay: 1,
      stagger: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <div
        className="bg-[#0b1338] text-white min-h-screen flex flex-col items-center justify-center px-6"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between">
          
          {/* Left Section */}
          <div className="md:pl-16 lg:pl-30 w-full md:w-1/2 space-y-6 text-center md:text-left">
            
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

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#02c3fc] paragraph">
              Full Stack AI Engineer
            </h2>

            <p className="text-lg sm:text-xl leading-relaxed paragraph">
              I build AI-powered applications, intelligent backend systems,
              and scalable web experiences.
              <br />
              <br />
              Currently working with Python, TypeScript, React, Next.js,
              Node.js, NLP, and AI-driven workflows.
            </p>

            <div className="buttonss flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center md:justify-start mt-6">
              
              <a
                href="#experience"
                className="active:scale-95 bg-gradient-to-r from-[#576cbc] to-[#357fee] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform"
              >
                View Experience
              </a>

              <a
                href="#projects"
                className="active:scale-95 bg-gradient-to-r from-[#576cbc] to-[#357fee] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform"
              >
                View Projects
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