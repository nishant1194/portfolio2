import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    const cards =
      experienceRef.current.querySelectorAll(".experience-card");

    gsap.set(cards, {
      y: 80,
      opacity: 0,
    });

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.25,
      ease: "power3.out",

      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 85%",
        toggleActions: "play none play reset",
      },
    });
  }, []);

  const experiences = [
    {
      role: "Full Stack AI Engineer",
      company: "KAS Global Commerce Inc. (MySellerCentral)",
      duration: "June 2026 - Present",

      points: [
        "Developed AI-powered features for MSC IQ, including OCR-based image text extraction, image paste functionality, and AI banner-generation workflows.",
        "Integrated AI workflows with backend systems, feedback systems, and wallet functionality.",
        "Developed and enhanced the ShopClues NLP Agent with marketplace-specific schemas, SQL templates, template matching, and natural-language query processing.",
        "Implemented user-based currency conversion using default currency settings.",
        "Worked on festival and event alert workflows and marketplace-specific data processing.",
      ],

      skills: [
        "Python",
        "AI",
        "NLP",
        "SQL",
        "Backend",
      ],
    },

    {
      role: "SDE Intern",
      company: "Nanokriti Private Limited",
      duration: "October 2025 - December 2025",

      points: [
        "Developed a React web dashboard and React Native mobile application to visualize machine and sensor telemetry.",
        "Developed backend services to fetch and serve AWS-hosted sensor data.",
        "Implemented machine-specific data access to ensure users receive information only from associated machines.",
        "Developed master-account functionality for centralized monitoring of multiple machines.",
        "Implemented pump-priming safety logic with web and mobile alerts for insufficient water flow.",
      ],

      skills: [
        "React",
        "React Native",
        "Backend",
        "AWS",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#0b1338] py-16 px-6 md:px-20"
    >
      <h2 className="text-4xl md:text-5xl text-white font-semibold text-center mb-12">
        EXPERIENCE
      </h2>

      <div
        ref={experienceRef}
        className="max-w-6xl mx-auto space-y-8"
      >
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="experience-card bg-[#0c0d22] rounded-3xl p-6 md:p-8 hover:scale-[1.02] transition duration-300"
          >
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              
              <div>
                <h3 className="text-[#02c3fc] text-2xl md:text-3xl font-semibold">
                  {experience.role}
                </h3>

                <p className="text-white text-lg mt-2">
                  {experience.company}
                </p>
              </div>

              <p className="text-gray-300 text-lg">
                {experience.duration}
              </p>

            </div>

            <ul className="space-y-3 mb-6">
              {experience.points.map((point, pointIndex) => (
                <li
                  key={pointIndex}
                  className="text-gray-200 text-base md:text-lg leading-relaxed"
                >
                  • {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {experience.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-[#243461] text-white px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;