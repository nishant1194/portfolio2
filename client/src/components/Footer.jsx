import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);import gmailIcon from '../assets/images/icons/emailIcon.png'
import linkedInIcon from '../assets/images/icons/linkedinIcon.png'
import githubIcon from '../assets/images/icons/githubIcon.png'

function Footer() {
  const contactRef = useRef(null);

  useEffect(()=>{
       const contactss = contactRef.current.querySelectorAll("li");
       gsap.set(contactss, { x: 150, opacity: 0 }); // Initial state
       gsap.to(contactss, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      delay:0.2,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 90%",
       toggleActions: "play none play reset",
      },
    });
  },[])
  
  return (
    <>
      {/* Font import in the component */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        `}
      </style>

      <div
        id="contact"
        className="bg-slate-800 text-white py-16 px-6 flex flex-col sm:flex-row justify-around items-center"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="flex flex-col text-center sm:text-left mb-8 sm:mb-0">
          <div className="text-4xl sm:text-6xl font-semibold mb-2">Contact</div>
          <div className="text-xl sm:text-2xl">Feel free to reach out</div>
        </div>

        <div>
          <ul ref={contactRef} className="flex flex-col gap-4">
            <li>

            <div className="flex items-center text-lg sm:text-xl hover:translate-x-1 transition duration-500 active:scale-95">
              <img src={gmailIcon} alt="Gmail" className="w-6 h-6 mr-4" />
              <a href="mailto:nishantrpr1194@gmail.com" className="hover:underline">
                Gmail
              </a>
            </div>
            </li>
            <li>

            <div className="flex items-center text-lg sm:text-xl hover:translate-x-1 transition duration-500 active:scale-95">
              <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6 mr-4" />
              <a href="https://www.linkedin.com/in/nishant-428476256/" className="hover:underline">
                LinkedIn
              </a>
            </div>
            </li>
            <li>

            <div className="flex items-center text-lg sm:text-xl hover:translate-x-1 transition duration-500 active:scale-95">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6 mr-4" />
              <a href="https://github.com/nishant1194" className="hover:underline">
                GitHub
              </a>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
