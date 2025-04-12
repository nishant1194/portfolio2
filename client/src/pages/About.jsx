import React from 'react'
import abc from '../assets/images/imgs/img.png'

function About() {
  return (
    <section id="about" className="bg-[#0b1338] py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl text-white font-semibold mb-12 hover:-translate-y-1 transition duration-500 text-left md:text-left">
        ABOUT ME
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src={abc}
          alt="Profile"
          className="rounded-full w-3/5 md:w-2/5 lg:w-1/3 hidden sm:block"
        />
        <ul className="w-full space-y-6">
          <li className="bg-[#0c0d22] rounded-3xl p-6 hover:scale-105 hover:bg-gradient-to-r from-[#2c2c2cb0] to-[#0c0d22] transition duration-700">
            <h3 className="text-white text-center text-2xl font-medium mb-2">Web Developer</h3>
            <p className="text-white text-lg text-center md:text-left leading-7">
              As a MERN developer, I build modern and responsive web applications using MongoDB, Express.js, React, and Node.js.
            </p>
          </li>
          <li className="bg-[#0c0d22] rounded-3xl p-6 hover:scale-105 hover:bg-gradient-to-r from-[#2c2c2cb0] to-[#0c0d22] transition duration-700">
            <h3 className="text-white text-center text-2xl font-medium mb-2">Mobile Developer</h3>
            <p className="text-white text-lg text-center md:text-left leading-7">
              I'm a React Native developer who loves crafting mobile apps with React and JavaScript. I focus on making user-friendly designs.
            </p>
          </li>
          <li className="bg-[#0c0d22] rounded-3xl p-6 hover:scale-105 hover:bg-gradient-to-r from-[#2c2c2cb0] to-[#0c0d22] transition duration-700">
            <h3 className="text-white text-center text-2xl font-medium mb-2">Academics</h3>
            <p className="text-white text-lg text-center md:text-left leading-7">
              Currently pursuing my B.Tech in one of the prestigious colleges of India, Indian Institute of Technology, Ropar.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
