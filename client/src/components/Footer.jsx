import React from 'react'
import gmailIcon from '../assets/images/icons/emailIcon.png'
import linkedInIcon from '../assets/images/icons/linkedinIcon.png'
import githubIcon from '../assets/images/icons/githubIcon.png'

function Footer() {
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
        className="bg-slate-800 text-white py-15 px-6 flex flex-col sm:flex-row justify-around items-center"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        <div className="flex flex-col text-center sm:text-left mb-8 sm:mb-0">
          <div className="text-4xl sm:text-6xl font-semibold mb-2">Contact</div>
          <div className="text-xl sm:text-2xl">Feel free to reach out</div>
        </div>

        <div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center text-lg sm:text-xl">
              <img src={gmailIcon} alt="Gmail" className="w-6 h-6 mr-4" />
              <a href="mailto:nishantrpr1194@gmail.com" className="hover:underline">
                Gmail
              </a>
            </li>
            <li className="flex items-center text-lg sm:text-xl">
              <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6 mr-4" />
              <a href="https://www.linkedin.com/in/nishant-428476256/" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center text-lg sm:text-xl">
              <img src={githubIcon} alt="GitHub" className="w-6 h-6 mr-4" />
              <a href="https://github.com/nishant1194" className="hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
