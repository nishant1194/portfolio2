import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import urlImg from "../assets/images/imgs/urlImg.png";
import neetcodeImg from "../assets/images/imgs/neetcodeImg.png";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectRef = useRef(null);

  useEffect(() => {
    const elements =
      projectRef.current.querySelectorAll(".project-card");

    gsap.set(elements, {
      y: 80,
      opacity: 0,
    });

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 85%",
        toggleActions: "play none play reset",
      },
    });
  }, []);

  const [projects, setProjects] = useState([
    {
      tittle: "Short.ly (Url utility)",
      description:
        "Developed a full-stack coding platform inspired by LeetCode with secure authentication, problem management, advanced search and filtering, multi-language code execution, and an AI-powered problem assistant.",

      skills: [
        "Next.js",
        "Gemini API",
        "JDoodle API",
      ],

      github: "https://github.com/nishant1194/CodePrep",

      liveLink: "https://code-prep-nine.vercel.app/",

      image: neetcodeImg,
    },

    {
      title: "URL Shortener & QR Generator",

      subtitle: "Cross-Platform Web + Mobile Application",

      description:
        "Developed a cross-platform URL shortener across web, mobile, and Chrome extension platforms with QR code generation and scanning, custom URLs, expiry dates, click limits, analytics tracking, and instant redirection.",

      skills: [
        "MERN",
        "React Native",
        "Manifest V3",
        "QR Code",
      ],

      github:
        "https://github.com/nishant1194/urlNqr",

      liveLink:
        "https://url-nqr.vercel.app/",

      image: urlImg,
    },

    {
      title: "Crime Prediction & Police Deployment",

      subtitle: "Machine Learning Project",

      description:
        "Engineered a comprehensive website for the EE-RSF Society at our college. I have implemented dynamic features, organized content on websites.",
      skills: ["React", "Bootstrap", "JS"],
      github: "https://github.com/nishant1194/IIT_",
      liveLink: "https://iit-rsf.vercel.app",
      image: rsfImg,
    },
    {
      tittle: "BlogApp",
      description:
        "Created a full-stack blog application using the MERN stack with JWT-based authentication enables admins to manage blogs, comments, and engagement.",
      skills: ["MERN", "Material UI", "JS"],
      github: "https://github.com/nishant1194/blogApp",
      liveLink: "https://blog-app-neew.vercel.app/",
      image: blogImg,
    },
    {
      tittle: "LeetCode Clone with AI",
      description:
        "Developed a full-stack coding platform with user authentication, problem-solving interface, and real-time code execution using MERN stack with integrated chatbot.",
      skills: ["MERN", "GeminiAPI", "TailwindCSS"],
      github: "https://github.com/nishant1194/sihs",
      liveLink: "https://neetcode-teal.vercel.app/",
      image: neetcodeImg,
    },
    {
      tittle: "WeatherWave",
      description:
        "Designed and developed a cutting-edge weather tracking app, delivering real-time forecasts and intuitive user interfaces for enhanced weather awareness.",
      skills: ["React", "Tailwind", "JavaScript"],
      github: "https://github.com/nishant1194/weather-wave",
      liveLink: "https://weather-wave-project.vercel.app",
      image: weatherWaveImg,
    },
  ] );

  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-16 bg-[#0b1338]"
    >
      {/* Heading */}

      <h2 className="text-4xl md:text-5xl font-semibold text-white text-center mb-4">
        PROJECTS
      </h2>

      <p className="text-center text-gray-300 text-lg mb-12">
        A selection of projects showcasing my work in full-stack
        development, AI, and machine learning.
      </p>

      <ul
        ref={projectRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <li key={index}>
            <div
              className="project-card h-full bg-[#142a53] p-6 rounded-2xl flex flex-col hover:bg-gradient-to-br hover:from-[#142a53] hover:to-[#0b1338] hover:scale-[1.03] transition duration-300"
            >
              {/* Project Image */}

              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-5"
                />
              ) : (
                <div className="w-full h-48 rounded-xl mb-5 bg-[#243461] flex flex-col items-center justify-center text-center px-4">
                  
                  <div className="text-5xl mb-3">
                    🤖
                  </div>

                  <p className="text-white text-lg font-semibold">
                    Machine Learning Project
                  </p>

                </div>
              )}

              {/* Project Title */}

              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {project.title}
              </h2>

              {/* Subtitle */}

              <p className="text-[#02c3fc] text-sm md:text-base mb-4">
                {project.subtitle}
              </p>

              {/* Description */}

              <p className="text-gray-200 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Skills */}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-[#243461] text-white text-sm py-1 px-3 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="flex justify-between gap-3 mt-auto">

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#576dbd] text-white py-2 px-4 rounded-full text-base hover:scale-105 transition-transform"
                  >
                    Live Demo
                  </a>
                )}

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#576dbd] text-white py-2 px-4 rounded-full text-base hover:scale-105 transition-transform"
                  >
                    Source Code
                  </a>
                )}

              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;