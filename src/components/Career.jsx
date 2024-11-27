import Typografi, {typografiData} from "./Typografi";
import LogoPojoksatu from "../assets/Logo Pojoksatu.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, {useEffect} from "react";

function Career (){
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
            id="career" 
            className="
                        w-[100%] flex flex-col gap-10 h-[130vh] justify-center
                        lg:w-[50%]
                        "
        >
            <div className="div">
                <Typografi items={[typografiData[3]]}/>
            </div>
            <div className="
                        flex flex-col gap-1
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
                    current career :
                </motion.p>
                <motion.div
                ref={ref}
                className="
                           bg-box py-3 px-5 shadow-md rounded-[8px]
                           md:w-[400px]
                           lg:w-[300px]
                            "
                initial={{opacity: 0, y: 50}}
                animate={animation}
                transition={{delay: 1.5, duration: 0.8}}
                >
                    <div className="
                                 title flex items-center gap-3
                                 "
                    >
                        <img src={LogoPojoksatu} alt="Logo Pojoksatu" 
                             className="
                                    w-[40px] h-[100%]
                                    md:w-[60px]
                                    " 
                        />
                        <div className="
                                    text
                                    "
                        >
                            <h3 className="
                                        font-montserrat  font-bold text-heading text-[4.1vw]
                                        md:text-[3.1vw]
                                        lg:text-[1vw]
                                        "
                            >
                                Pojoksatu.id
                            </h3>
                            <p className="
                                        font-poppins text-paragraph text-[4vw] mt-[-6px]
                                        md:text-[3vw]
                                        lg:text-[1vw]
                                        "
                            >
                                Freelance
                            </p>
                        </div>
                    </div>
                    <p className="
                                text-paragraph font-poppins text-[3.6vw]
                                md:text-[2.7vw]
                                lg:text-[0.8vw]
                                "
                    >
                    As a video editor whose job is to create the latest and viral news videos.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Career