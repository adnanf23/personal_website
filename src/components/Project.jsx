import Typografi, { typografiData } from "./Typografi";
import CalcuProj from "../assets/project1.jpg";
import github from "../assets/github (1).svg"
import { useState } from "react";
import Button from "./Button";
import { motion, useAnimation } from "framer-motion";
import React, {useEffect} from "react";
import { useInView } from "react-intersection-observer";

const dataProject = [
  {
    title: "implement a calculator system on the website",
    img: CalcuProj,
    date: '20 September 2024',
    githubLink: 'https://github.com/adnanf23/Calculator-Project',
    detaiLink: '',
  },
  
];

function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
      id="project"
      className="
        h-auto w-[90%] flex flex-col gap-20 items-center
        lg:w-[100%] lg:h-[100vh] m-auto
      "
    >
      <div className="lg:w-[48%] mx-auto">
        <Typografi items={[typografiData[4]]} />
      </div>
      <div className="flex flex-col gap-10 lg:flex-row justify-center items-center">
        {dataProject.map((item, index) => (
          <motion.div
            ref={ref}
            key={index}
            className="
              bg-heading overflow-hidden relative w-[100%] rounded-[10px] z-[0]
              md:w-[67%]
              lg:w-[70%]
            "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{opacity: 0, y: 50}}
            animate={animation}
            transition={{delay:0.5, duration: 0.8}}
          >
            <img
              src={item.img}
              className="
                w-[100%] m-auto h-[100%]
              "
              alt={item.name}
            />
            <div
              className={`
                absolute inset-0 bg-gradient-to-t from-overFrom to-overTo text-heading transition-transform duration-300 ease-in-out z-[1] flex flex-col gap-4 justify-end p-5
                md:gap-10 md:p-10
              `}
            >
              <h3 className="
                          leading-5 text-[5vw] font-montserrat font-semibold
                          md:leading-[5vw] md:text-[4vw]
                          lg:text-[2vw] lg:leading-10  
                          text-heading
                          "

              >
                {item.title}
              </h3>
             <a href={item.githubLink}>
              <button className="bg-blue flex rounded-[20px] text-bg font-montserrat text-[12px] font-semibold items-center gap-1 w-[60%]
              md:text-[19px] md:w-[50%]">
              <img src={github} alt="Project Thumbnail" 
              className="w-[25px]  px-[6px] py-[5px]
              md:w-[40px]"/>
              Source Code
              </button></a>
              <p className="date absolute right-3 bottom-1 text-[8px]
              md:text-[13px]">
                {item.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
