
import Nodejs from "../assets/images/logos/nodeJs.png";
import JavaScript from "../assets/images/logos/javascript.png";
import HtmlCssJs from "../assets/images/logos/htmlCssJs.png";
import MongoDB from "../assets/images/logos/mongodb.png";
import ExpreesJs from "../assets/images/logos/ExpressJS.webp";
import Cpp from "../assets/images/logos/C++.svg";
import ReactLogo from "../assets/images/logos/reacttt.png";
import ReactNative from "../assets/images/logos/reactNative.png";
import AndroidStudio from "../assets/images/logos/AndroidStudio.png";
import java from "../assets/images/logos/java.svg";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function Skill() {
    const skillRef = useRef(null);
    const porRef = useRef(null);

    useEffect(()=>{
      const elements = skillRef.current.querySelectorAll("li");
      const por = porRef.current.querySelectorAll("li");
       gsap.set(por, { x: 150, opacity: 0 }); // Initial state
       gsap.to(por, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      delay:0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: porRef.current,
        start: "top 90%",
       toggleActions: "play none play reset",
      },
    });
      gsap.set(elements, { x: -150, opacity: 0 }); // Initial state
      gsap.to(elements, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: skillRef.current,
        start: "top 95%",
       toggleActions: "play none play reset",

      },
    });

    },[])
  
  return (
    <section id="skills" className="bg-[#0b1338] py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Skills Section */}
        <div className="w-full">
          <h1 className="text-center text-4xl md:text-5xl font-semibold text-white mb-8 hover:translate-y-1 transition duration-500 cursor-pointer">
            Skills
          </h1>
          <ul ref={skillRef} className="flex flex-wrap justify-center gap-12">
            {[
              { img: java, text: "Java" },
              { img: Cpp, text: "C/C++" },
              { img: JavaScript, text: "JavaScript" },
              { img: HtmlCssJs, text: "HTML CSS JS" },
              { img: AndroidStudio, text: "AndroidStudio" },
              { img: ReactNative, text: "React-Native" },
              { img: MongoDB, text: "MongoDB" },
              { img: ExpreesJs, text: "ExpressJS" },
              { img: ReactLogo, text: "React" },
              { img: Nodejs, text: "Node.js" },
            ].map((skill, index) => (
              <li key={index} className="skillItem flex flex-col items-center">
                <img
                  src={skill.img}
                  alt={skill.text}
                  className="w-24 h-24 rounded-full mb-4 transition-transform transform hover:translate-y-1"
                />
                <p className="text-white">{skill.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Position of Responsibilities Section */}
        <div className="w-full">
          <h1 className="cursor-pointer text-center text-3xl md:text-4xl font-semibold text-white mb-8 hover:translate-y-1 transition duration-500">
            Position of Responsibilities
          </h1>
          <ul ref={porRef}>
            {[
              {
                title: "Web Development Head | Advitiya'25",
                description:
                  "Lead the web development team for Advitiya'25, IIT Ropar's technical fest, managing a team of 6 to design, develop, and maintain the fest's official website.",
              },
              {
                title: "UFMC Member",
                description:
                  "Student representative in the Utility Feedback Management Committee, presenting feedback to the college administration and working to improve student experience.",
              },
              {
                title: "Co-head in Skymaster",
                description:
                  "Successfully conducted Skymaster, a drone racing event, as part of Advitiya'24, the technical fest of IIT Ropar.",
              },
            ].map((role, index) => (
              <li>
              <div key={index} className=" bg-[#0c0d22] rounded-3xl p-6 mb-6 hover:scale-105 hover:bg-gradient-to-r from-[#2c2c2cb0] to-[#0c0d22] transition duration-300">
                <h3 className="text-center text-xl text-white mb-2">{role.title}</h3>
                <p className="text-white text-lg text-center md:text-left">{role.description}</p>
              </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skill;
