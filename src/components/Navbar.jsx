import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import iconMenu from "../assets/Menu.png";
import iconClose from "../assets/close.png";
import Button from "./Button";

const listBars = [
  { name: "About", navId: "#about" },
  { name: "Skils", navId: "#skils" },
  { name: "Career", navId: "#career" },
  { name: "Project", navId: "#project" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };


  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <header className={`
                      transition-all duration-[500ms] z-[1]
                      ${isScrolled ? "bg-bg fixed shadow-2xl" : "bg-transparent static"}
                      `}
    >
      <div className="
                    icon lg:hidden
                    " 
           onClick={toggleMenu}>
        <img
          src={iconMenu}
          alt="Menu icon"
          className={`w-[8vw] z-10
                      ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
                      ${isScrolled ? "shadow-box shadow-md" : ""}
                      fixed top-5 right-5 duration-700 md:w-[7vw]`}
        />
        <img
          src={iconClose}
          alt="Menu icon"
          className={`w-[8vw] 
                      ${
                        isOpen
                          ? "rotate-[0deg] opacity-100"
                          : "rotate-[-20deg] opacity-0"
                      } 
                      fixed  top-5 right-5 duration-700 md:w-[7vw]`}
        />
      </div>

      <nav
        className={`
                  shadow-lg
                  fixed ${isOpen ? "left-0" : "left-[-76%]"} 
                  flex flex-col gap-[40px] bg-box w-[60%] h-[100vh] px-6 py-10
                  md:w-[40%] md:text-[3.4vw] md:px-14 md:py-14 md:gap-16
                  lg:static lg:flex-row lg:w-[100vw] lg:h-auto lg:justify-between lg:items-center lg:animate-none lg:px-52 lg:py-5 lg:bg-transparent
                  duration-[900ms] lg:shadow-none
        `}
      >
        <img
          src={logo}
          alt="logo"
          className="
                                            w-28 md:w-40 lg:h-[100%] lg:w-[7vw]"
        />
        <ul
          className="
                    listbar flex flex-col gap-[20px]
                    lg:flex-row lg:gap-[50px]
        "
        >
          {listBars.map((item, index) => (
            <li
              key={index}
              className="
                      text-paragraph hover:text-blue duration-100 
                        lg:text-[0.9vw]
              "
            >
              <a href={item.navId}>{item.name}</a>
            </li>
          ))}
        </ul>
        <Button value={"Contact"} href='#footer' bg='#5AB9FD' />
      </nav>
    </header>
  );
}

export default NavBar;
