import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gmailIcon from "../assets/images/icons/emailIcon.png";
import linkedInIcon from "../assets/images/icons/linkedinIcon.png";
import githubIcon from "../assets/images/icons/githubIcon.png";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const contactRef = useRef(null);

  useEffect(() => {
    const contacts =
      contactRef.current.querySelectorAll(".contact-item");

    gsap.set(contacts, {
      x: 100,
      opacity: 0,
    });

    gsap.to(contacts, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",

      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 90%",
        toggleActions: "play none play reset",
      },
    });
  }, []);

  return (
    <footer
      id="contact"
      className="bg-slate-800 text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Contact Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-3">
            Let's Connect
          </h2>

          <p className="text-xl text-gray-300 max-w-md">
            Feel free to reach out for opportunities, collaborations,
            or just to have a conversation.
          </p>
        </div>

        {/* Contact Links */}
        <div>
          <ul
            ref={contactRef}
            className="flex flex-col gap-5"
          >
            
            {/* Email */}
            <li className="contact-item">
              <a
                href="mailto:nishant.work.1194@gmail.com"
                className="flex items-center text-lg sm:text-xl hover:translate-x-1 transition duration-300"
              >
                <img
                  src={gmailIcon}
                  alt="Email"
                  className="w-6 h-6 mr-4"
                />

                <span>
                  nishant.work.1194@gmail.com
                </span>
              </a>
            </li>

            {/* LinkedIn */}
            <li className="contact-item">
              <a
                href="https://www.linkedin.com/in/nishant-428476256/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg sm:text-xl hover:translate-x-1 transition duration-300"
              >
                <img
                  src={linkedInIcon}
                  alt="LinkedIn"
                  className="w-6 h-6 mr-4"
                />

                <span>
                  LinkedIn
                </span>
              </a>
            </li>

            {/* GitHub */}
            <li className="contact-item">
              <a
                href="https://github.com/nishant1194"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg sm:text-xl hover:translate-x-1 transition duration-300"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-6 h-6 mr-4"
                />

                <span>
                  GitHub
                </span>
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto border-t border-gray-600 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Nishant. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;