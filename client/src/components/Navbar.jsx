import React, { useState } from "react";
import menuIcon from "../assets/images/icons/menuIcon.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#0b1338] py-6 px-3 relative z-20 font-[Rubik]">
        <nav className="flex items-center justify-between mx-[10%] text-white">
          <div className="text-3xl font-semibold">Portfolio</div>
          <div className="flex items-center">
            <img
              src={menuIcon}
              alt="Menu"
              className="block sm:hidden cursor-pointer w-8 h-8"
              onClick={toggleMenu}
            />
            <ul className="hidden sm:flex gap-10 text-lg font-medium">
              <li><a href="#about" className="hover:translate-y-[-3px] transition">About</a></li>
              <li><a href="#skills" className="hover:translate-y-[-3px] transition">Skills</a></li>
              <li><a href="#projects" className="hover:translate-y-[-3px] transition">Projects</a></li>
              <li><a href="#contact" className="hover:translate-y-[-3px] transition">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className=" bg-[#0b1338] flex justify-end pt-2 pr-[7%] sm:hidden z-30">
          <ul className="flex flex-col items-center bg-blue-800 rounded-2xl p-4 text-white w-48">
            <li className="py-2"><a href="#about" className="text-lg">About</a></li>
            <li className="py-2"><a href="#projects" className="text-lg">Projects</a></li>
            <li className="py-2"><a href="#skills" className="text-lg">Skills</a></li>
            <li className="py-2"><a href="#contact" className="text-lg">Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
