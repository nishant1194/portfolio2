import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skill() {
  const skillRef = useRef(null);
  const porRef = useRef(null);

  useEffect(() => {
    const skillElements = skillRef.current.querySelectorAll(".skill-card");
    const porElements = porRef.current.querySelectorAll(".por-card");

    // Skills animation
    gsap.set(skillElements, {
      x: -100,
      opacity: 0,
    });

    gsap.to(skillElements, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",

      scrollTrigger: {
        trigger: skillRef.current,
        start: "top 85%",
        toggleActions: "play none play reset",
      },
    });

    // Leadership animation
    gsap.set(porElements, {
      x: 100,
      opacity: 0,
    });

    gsap.to(porElements, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",

      scrollTrigger: {
        trigger: porRef.current,
        start: "top 85%",
        toggleActions: "play none play reset",
      },
    });
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      items: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
      ],
    },

    {
      category: "Web Development",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
    },

    {
      category: "Mobile Development",
      items: [
        "React Native",
        "Expo",
      ],
    },

    {
      category: "AI / Machine Learning",
      items: [
        "LangGraph",
        "Pandas",
        "NumPy",
        "Scikit-learn",
      ],
    },

    {
      category: "Core Computer Science",
      items: [
        "DBMS",
        "OOP",
        "Operating Systems",
        "Computer Networks",
      ],
    },

    {
      category: "Developer Tools",
      items: [
        "Git",
        "GitHub",
      ],
    },
  ];

  const responsibilities = [
    {
      title: "Web Development Head | Advitiya'25",
      description:
        "Worked as the Web Development Head for Advitiya'25, the technical fest of IIT Ropar.",
    },

    {
      title: "AWC Member | IIT Ropar",
      description:
        "Member of the Animal Welfare Committee and recognized as Volunteer of the Month.",
    },

    {
      title: "Event Coordinator | Aeromodelling Club",
      description:
        "Led the team for a drone racing event and managed more than 10 team members.",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0b1338] py-16 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-white mb-12">
          SKILLS & LEADERSHIP
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Skills Section */}
          <div className="w-full lg:w-3/5">

            <h2 className="text-center lg:text-left text-3xl font-semibold text-[#02c3fc] mb-8">
              Technical Skills
            </h2>

            <div
              ref={skillRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {skills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="skill-card bg-[#0c0d22] rounded-2xl p-6 hover:scale-[1.03] hover:bg-gradient-to-r hover:from-[#2c2c2cb0] hover:to-[#0c0d22] transition duration-300"
                >

                  <h3 className="text-[#02c3fc] text-xl font-semibold mb-4">
                    {skillCategory.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-[#243461] text-white text-sm px-3 py-2 rounded-full hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>


          {/* Leadership Section */}
          <div className="w-full lg:w-2/5">

            <h2 className="text-center lg:text-left text-3xl font-semibold text-[#02c3fc] mb-8">
              Leadership & Activities
            </h2>

            <div
              ref={porRef}
              className="space-y-6"
            >
              {responsibilities.map((role, index) => (
                <div
                  key={index}
                  className="por-card bg-[#0c0d22] rounded-3xl p-6 hover:scale-[1.03] hover:bg-gradient-to-r hover:from-[#2c2c2cb0] hover:to-[#0c0d22] transition duration-300"
                >

                  <h3 className="text-[#02c3fc] text-xl font-semibold mb-3">
                    {role.title}
                  </h3>

                  <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                    {role.description}
                  </p>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Skill;