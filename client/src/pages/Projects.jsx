import React, { useEffect,useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; import weatherWaveImg from "../assets/images/imgs/weatherWavve.png";
import rsfImg from "../assets/images/imgs/rsfWeb.png";
import blogImg from "../assets/images/imgs/blogImg.png";
import urlImg from "../assets/images/imgs/urlImg.png";
import chatappImg from "../assets/images/imgs/chatappImg.png";
import neetcodeImg from "../assets/images/imgs/neetcodeImg.png";
gsap.registerPlugin(ScrollTrigger);


function Projects() {

  const projectRef = useRef(null);
   useEffect(() => {
    const elements = projectRef.current.querySelectorAll("li");

gsap.set(elements, { x: -window.innerWidth, opacity: 0 });

    gsap.to(elements, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 95%",
       toggleActions: "play none play reset",
        // markers: true,
      },
    });
  }, []);

  const [projects, setProjects] = useState([
    {
      tittle: "Short.ly (Url utility)",
      description:
        "Engineered a cross-platform URL shortener with QR generator/scanner (web, mobile app, Chrome extension) using MERN stack, React-Native and Manifest V3",
      skills: ["MERN", "ReactNative", "Manifest"],
      github: "https://github.com/nishant1194/urlNqr",
      liveLink: "https://url-nqr.vercel.app/",
      image: urlImg,
    },
    {
      tittle: "Chat App (Web+Mobile)",
      description:
        "Developed a full-stack real-time chat application using MERN stack and React Native for cross-platform mobile support, with SocketIO.",
      skills: ["MERN", "ReactNative", "Socket.IO"],
      github: "https://github.com/nishant1194/chat-app",
      liveLink: "https://github.com/nishant1194/chat-app",
      image: chatappImg,
    },
    {
      tittle: "RSF-EE WEBSITE",
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
  ]);

  return (
    <div>
      <section id="projects" className="px-12 py-4 bg-[#0b1338]">
      <h2 className="text-4xl md:text-5xl  font-semibold text-white text-center mb-8 cursor-pointer hover:-translate-y-1 transition duration-500">
          PROJECTS
        </h2>
        <ul ref={projectRef} className=" py-8 flex flex-wrap justify-center gap-8">
          {projects &&
            projects.map((project, key) => {
              return (
                <li>
                <div
                  key={key}
                  className="bg-[#142a53] p-6 rounded-lg w-[280px] hover:bg-gradient-to-r hover:from-[#142a53] hover:to-[#0b1338] hover:scale-105 transition-transform duration-300"
                  >
                  <img
                    src={project.image}
                    alt={project.tittle}
                    className="w-full rounded-lg mb-4"
                    />
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {project.tittle}
                  </h2>
                  <p className="text-white mb-4">{project.description}</p>
                  <ul className="flex flex-wrap justify-between gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <li
                      key={index}
                      className="bg-[#243461] text-white text-sm py-1 px-4 rounded-full"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#576dbd] text-white py-2 px-4 rounded-full text-lg hover:scale-105 transition-transform"
                      >
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#576dbd] text-white py-2 px-4 rounded-full text-lg hover:scale-105 transition-transform"
                      >
                      Source
                    </a>
                  </div>
                </div>
            </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
}

export default Projects;
