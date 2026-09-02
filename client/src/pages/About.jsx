import abc from "../assets/images/imgs/img.png";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const listRef = useRef(null);

  useEffect(() => {
    const elements =
      listRef.current.querySelectorAll(".about-card");

    gsap.set(elements, {
      x: -150,
      opacity: 0,
    });

    gsap.to(elements, {
      x: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.25,
      ease: "power2.out",

      scrollTrigger: {
        trigger: listRef.current,
        start: "top 85%",
        toggleActions: "play none play reset",
      },
    });
  }, []);

  const aboutItems = [
    {
      title: "IIT Ropar",
      icon: "🏛️",

      description:
        "I graduated with a B.Tech in Electrical Engineering from IIT Ropar. My journey in technology has taken me beyond my core discipline into software engineering, artificial intelligence, and building real-world products.",
    },

    {
      title: "AI & Intelligent Systems",
      icon: "🤖",

      description:
        "I work on building AI-powered applications and intelligent systems, with experience in AI agents, LangGraph, LLM-based workflows, machine learning, and data-driven applications.",
    },

    {
      title: "Full-Stack Development",
      icon: "💻",

      description:
        "I'm a full-stack developer with experience building scalable web applications and cross-platform products. I work across modern frontend and backend technologies, databases, APIs, and mobile development.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#0b1338] py-16 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-4xl md:text-5xl text-white font-semibold mb-12 text-center md:text-left">
          ABOUT ME
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Profile Image */}

          <div className="w-full md:w-2/5 flex justify-center">
            <img
              src={abc}
              alt="Nishant"
              className="rounded-full w-3/5 md:w-4/5 max-w-sm hover:scale-105 transition duration-300"
            />
          </div>

          {/* About Cards */}

          <div
            ref={listRef}
            className="w-full md:w-3/5 space-y-6"
          >
            {aboutItems.map((item, index) => (
              <div
                key={index}
                className="about-card bg-[#0c0d22] rounded-3xl p-6 hover:scale-[1.03] hover:bg-gradient-to-r hover:from-[#2c2c2cb0] hover:to-[#0c0d22] transition duration-300"
              >
                <div className="flex items-center gap-4 mb-3">

                  <span className="text-3xl">
                    {item.icon}
                  </span>

                  <h3 className="text-white text-2xl font-semibold">
                    {item.title}
                  </h3>

                </div>

                <p className="text-gray-200 text-base md:text-lg leading-7">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;