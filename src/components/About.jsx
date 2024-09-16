import Typografi, { typografiData } from "./Typografi.jsx";
import Card, { dataCard } from "./Card.jsx";
import { motion, useAnimation } from "framer-motion";
import React, {useEffect} from "react";
import { useInView } from "react-intersection-observer";

function About() {
  const {ref, inView} = useInView({threshold: 1, triggerOnce: false})
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({opacity:1, y:0})
    } else {
      animation.start({opacity:0, y:50})
    }
  },[animation, inView])


  return (
    <div
      id="about"
      className="
                w-[100%] flex flex-col gap-[20px] justify-center h-[110vh]  m-auto
                md:mt-[470px]
                lg:mt-[500px] lg:gap-[100px]
                "
    >
      <div
        className="
                  text w-[100%] md:w-[80%] lg:w-[40%]
                  "
      >
        <Typografi items={[typografiData[1]]} />
      </div>
      <div
        className="
                  w-[100%] flex flex-col gap-[15px]
                  md:gap-[20px]
                  lg:gap-[10px]
                  "
      >
        <motion.p
        ref={ref}
          className="
                    font-poppins text-paragraph mb-[-7px]
                    "
                    initial={{opacity: 0, y: 50}}
                    animate={animation}
                    transition={{delay: 1, duration: 0.8}}
        >
          soft skills that I improved :
        </motion.p>
        <div
          className="
                    flex flex-col gap-[15px]
                    md:gap-[20px]
                    lg:flex-row lg:gap-[10px]
                    "
        >
          <Card items={[dataCard[0]]} />
          <Card items={[dataCard[1]]} />
        </div>
        <div
          className="
                    flex flex-col gap-[15px]
                    md:gap-[20px]
                    lg:flex-row lg:gap-[10px]
                    "
        >
          <Card items={[dataCard[2]]} />
          <Card items={[dataCard[3]]} />
        </div>
      </div>
    </div>
  );
}

export default About;
