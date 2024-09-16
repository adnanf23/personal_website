import Typografi, { typografiData } from "./Typografi.jsx";
import Button from "./Button.jsx";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, {useEffect} from "react";

import githubIcon from "../assets/github.svg";
import instaramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import tiktokIcon from "../assets/titok.svg";

const dataMedsos = [
  {
    name: "github",
    img: githubIcon,
    src: "https://github.com/adnanf23/",
  },
  {
    name: "instagram",
    img: instaramIcon,
    src: "https://www.instagram.com/_adnanf23/",
  },
  {
    name: "linkedin",
    img: linkedinIcon,
    src: "https://www.linkedin.com/in/adnanf23/",
  },
  {
    name: "tiktok",
    img: tiktokIcon,
    src: "https://www.tiktok.com/@_adnanf23",
  },
];

function Hero() {
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
    <div
      className="
                pt-0 flex flex-col gap-[20px] h-[100vh]
                lg:pt-0 items-center justify-center
                "
    >
      <div
        className="
                      w-[100%] lg:w-[40%] mx-auto
                      "
      >
        <Typografi items={[typografiData[0]]}/>
      </div>
      <motion.div
      ref={ref}
        className="
                    flex justify-center gap-2
                    md:gap-4
        "
        initial={{opacity: 0, y: 50}}
        animate={animation}
        transition={{delay: 1, duration: 0.8}}
      >
        {dataMedsos.map((item, index) => (
          <a key={index} href={item.src} target="_blank">
            <motion.img
              src={item.img}
              alt={item.name}
              className="
                        w-9
                        md:w -14
                        lg:w-9  
            "
            whileHover={{scale: 1.1}}
            />
          </a>
        ))}
      </motion.div>
      <motion.div
        ref={ref}
        className="w-full md:w-auto"
        initial={{opacity: 0, y: 50}}
        animate={animation}
        transition={{delay: 1.5, duration: 0.8}}>

          <Button value={"Get My Cv"} bg="#5AB9FD"/>
      </motion.div>
    </div>
  );
}

export default Hero;
