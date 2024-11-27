import Typografi, { typografiData } from "./Typografi.jsx";
import Button from "./Button.jsx";
import { motion, useAnimation } from "framer-motion";
import React, {useEffect} from "react";
import { useInView } from "react-intersection-observer";

import vscode from "../assets/skils/vscode.png";
import html from "../assets/skils/html.png";
import css from "../assets/skils/css.png";
import js from "../assets/skils/js.png";
import boostrap from "../assets/skils/boostrap.png";
import tailwind from "../assets/skils/tailwind.png";
import git from "../assets/skils/git.png";
import pr from "../assets/skils/pr.png";
import ae from "../assets/skils/ae.png";
import capcut from "../assets/skils/capcut.png";
import ai from "../assets/skils/ai.png";
import figma from "../assets/skils/figma.png";

const skils = [
  { img: vscode },
  { img: html },
  { img: css },
  { img: js },
  { img: boostrap },
  { img: tailwind },
  { img: git },
  { img: pr },
  { img: ae },
  { img: capcut },
  { img: ai },
  { img: figma },
];

function Skils() {
  const {ref, inView} = useInView({threshold:1, triggerOnce:false})
  const animation = useAnimation()

  useEffect(() => {
    if(inView){
      animation.start({opacity:1, y:0})
    } else {
      animation.start({opacity:0, y:50})
    }
  },[animation, inView])

  return (
    <div
      id="skils"
      className="
                w-[100%] h-[130vh] m-auto
                flex flex-col gap-14 justify-center items-center
                lg:flex-row lg:gap-60 lg:w-[100%]
                "
    >
      <div
        className="
                row flex flex-col gap-5 w-[100%]
                lg:w-[100%]
                "
      >
        <Typografi items={[typografiData[2]]} />
        <motion.div
          ref={ref}
          className="w-full md:w-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={animation}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button value={"Certificate"} bg="#339DFE"/>
        </motion.div>
      </div>
      <div
        className="
                    px-0 flex flex-col gap-4
                    "
      >
        <motion.p
          className="
                font-poppins text-paragraph mb-[-7px]
                "
          initial={{ opacity: 0, y: 50 }}
          animate={animation}
          transition={{delay:1, duration:0.8 }}
        >
          Skills or tools that I have mastered :
        </motion.p>
        <div
          className="
                    flex flex-wrap gap-2
                    md:w-[86%]
                    lg:w-[100%]
                    "
        >
          {skils.map((item, index) => {

            return (
              <motion.img
                key={index}
                src={item.img}
                ref={ref}
                className="
                  w-[55px]
                  md:w-[70px]
                  lg:w-[50px]
                "
                initial={{ opacity: 0, y: 50 }}
                animate={animation}
                transition={{delay:1.2, duration: 0.8 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skils;
