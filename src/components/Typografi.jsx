import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const typografiData = [
  {
    heading: "Learn, Career And Achievement",
    span: "",
    spanColor: "transparent",
    align: "center",
    paragraph: "A developer, designer, and editor.",
  },
  {
    heading: "Get to",
    span: " know me briefly",
    spanColor: "#DDFF55",
    align: "left",
    paragraph:
      "My name is M Adnan Fauzan Maulana, nicknamed Adnan. I am 18 years old, graduated from Vocational School majoring in Visual Communication Design. My hobby is studying technology.",
  },
  {
    heading: "Ability exists \n",
    span: "because of will",
    spanColor: "#5AB9FD",
    align: "left",
    paragraph:
      "Abilities that I will continue to improve because of my will and hobbies. Development, design, and editing are the fields that I studied.",
  },
  {
    heading: "Career is a way of life to",
    span: " continue to grow and develop",
    spanColor: "#FF9255",
    align: "left",
    paragraph:
      "I have had a career as a Video Editor, I always make sure my career will continue to improve.",
  },
  {
    heading: "Practice skills with",
    span: " practice and work projects",
    spanColor: "#8155FF",
    align: "center",
    paragraph: "Practice skills with practice and work projects",
  },
  {
    heading: "To join the community and collaborate",
    span: "",
    spanColor: "",
    align: "left",
    paragraph: "Be part of the growing movement of technology enthusiasts, please contact me."
  }
];

function Typografi({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <ItemTypografi key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function ItemTypografi({ item, index }) {
  const controlHeadings = useAnimation();
  const controlParagraphs = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (index === 5) return; // Tidak jalankan animasi untuk index 5

    if (inView) {
      controlHeadings.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      });
      controlParagraphs.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.8 }
      });
    } else {
      controlHeadings.start({ opacity: 0, y: 50 });
      controlParagraphs.start({ opacity: 0, y: 50 });
    }
  }, [inView, controlHeadings, controlParagraphs, index]);

  return (
    <div>
      <div
        ref={ref}
        key={index}
        className="
          w-[100%] flex flex-col gap-3 m-auto
        "
        style={{
          textAlign: item.align,
        }}
      >
        <motion.h1
          className={`
            text-[9.3vw] leading-[11vw] text-heading font-poppins m-auto
            lg:text-[3vw] lg:leading-[3vw]
          `}
          style={{
            textAlign: item.align,
            margin: item.align === "center" ? "auto" : "initial",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={controlHeadings} // Jika index ke 5, tidak ada animasi
        >
          {item.heading}
          <span
            style={{
              color: item.spanColor,
            }}
          >
            {item.span}
          </span>
        </motion.h1>
        <motion.p
          className="
            text-[3.9vw] text-paragraph w-[100%]
            lg:text-[1.3vw] text-justify
          "
          style={{
            textAlign: item.align === "center" ? "center" : "justify",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={controlParagraphs} // Jika index ke 5, tidak ada animasi
        >
          {item.paragraph}
        </motion.p>
      </div>
    </div>
  );
}

export default Typografi;
