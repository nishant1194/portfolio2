import React, { useState, useRef, useLayoutEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import menuIcon from "../assets/images/icons/menuIcon.svg";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const menuRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".nav-links ul li", {
      y: -60,
      stagger: 0.15,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useLayoutEffect(() => {
    if (isMenuOpen && menuRef.current) {
      gsap.from(menuRef.current.children, {
        y: -20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <div className="bg-[#0b1338] py-6 px-3 relative z-20 font-[Rubik]">
        <nav className="flex items-center justify-between mx-[10%] text-white">
          
          {/* Portfolio Logo */}
          <a
            href="/"
            className="text-3xl font-semibold cursor-pointer active:scale-95 transition-transform duration-150"
          >
            Portfolio
          </a>

          <div className="flex items-center nav-links">
            
            {/* Mobile Menu Icon */}
            <img
              src={menuIcon}
              alt="Menu"
              className="block sm:hidden cursor-pointer w-8 h-8"
              onClick={toggleMenu}
            />

            {/* Desktop Navigation */}
            <ul className="hidden sm:flex gap-8 lg:gap-10 text-lg font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="hover:-translate-y-[3px] hover:text-[#02c3fc] transition duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-[#0b1338] flex justify-end pt-2 pr-[7%] sm:hidden relative z-30">
          <ul
            ref={menuRef}
            className="menulinks flex flex-col items-center bg-[#142a53] rounded-2xl p-4 text-white w-52 shadow-lg"
          >
            {navItems.map((item) => (
              <li key={item.name} className="py-2 w-full text-center">
                <a
                  href={item.link}
                  className="block text-lg hover:text-[#02c3fc] transition"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;