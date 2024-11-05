import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import focusIc from "../assets/focus.png";
import socialitIc from "../assets/socialty.png";
import enthusiastic from "../assets/enthusiast.png";
import solvingic from "../assets/solving.png";

export const dataCard = [
  {
    title: "Focus",
    colorTitle: "#8155FF",
    desc: "Focus increases abilities",
    src: focusIc,
  },
  {
    title: "Sociality",
    colorTitle: "#FF9255",
    desc: "Friendly in relationships",
    src: socialitIc,
  },
  {
    title: "Enthusiast",
    colorTitle: "#5AB9FD",
    desc: "Enthusiasm for achievement",
    src: enthusiastic,
  },
  {
    title: "Problem Solving",
    colorTitle: "#DDFF55",
    desc: "Analyzing problem solving",
    src: solvingic,
  },
];

function Card({ items }) {
  return (
    <div className="card-container flex flex-wrap gap-4 justify-center">
      <AnimatePresence>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
}

function ItemCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false});

  return (
    <motion.div
      ref={ref}
      className="bg-box flex gap-3 w-[270px] px-10 py-5 rounded-[8px] shadow-md justify-center items-center md:w-[400px] md:gap-5 lg:w-[350px] lg:h-[100px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-10 h-[auto] md:w-20 md:h-auto lg:w-10"
      />
      <div className="card-text flex flex-col gap-[-4px]">
        <h3
          className="font-madimi text-heading text-[4vw] lg:text-[1.3vw]"
          style={{ color: item.colorTitle }}
        >
          {item.title}
        </h3>
        <p className="text-paragraph font-poppins text-[3vw] lg:text-[1vw]">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default Card;
