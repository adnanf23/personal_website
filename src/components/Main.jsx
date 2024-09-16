import Hero from "./hero.jsx";
import Profil from "../assets/profil.png";
import About from "./About.jsx";
import Skils from "./Skils.jsx";
import Career from "./Career.jsx";
import Project from "./Project.jsx";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, {useEffect} from "react";

function Main() {
  const {ref, inView} = useInView({threshold: 0.1, triggerOnce: false})
  const animation = useAnimation()

  useEffect(() =>{
    if(inView){
      animation.start({opacity:1, y:0})
    } else {
      animation.start({opacity:0, y:50})
    }
  },[inView, animation])


  return (
    <main
      className="px-14
                md:px-14 z-[-1]
                lg:px-60"
    >
      <Hero />
      <motion.img
        ref={ref}
        src={Profil}
        alt=""
        className=" 
                w-[100%] absolute z-[-3] top-100 left-0 mx-auto  mt-[-200px]
                lg:w-[100%]
            "
        initial={{opacity: 0, y: 50}}
        animate={animation}
        transition={{delay: 1, duration: 0.8}}
      />
      <About />
      <Skils />
      <Career />
      <Project />
    </main>
  );
}

export default Main;
