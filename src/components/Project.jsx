import Typografi, { typografiData } from "./Typografi";
import CalcuProj from "../assets/project1.jpg";
import { useState } from "react";
import Button from "./Button";

const dataProject = [
  {
    name: "Calculator System",
    img: CalcuProj,
    desc: "1wiiiwuucscsuicha",
  },
  {
    name: "Calculator System",
    img: CalcuProj,
    desc: "eakkkkkkk",
  },
];

function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      <div className="flex flex-col gap-10 lg:flex-row">
        {dataProject.map((item, index) => (
          <div
            key={index}
            className="
              bg-heading overflow-hidden relative w-[100%] rounded-[20px] z-[0]
              lg:w-[70%]
            "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={item.img}
              className="
                w-[100%] rounded-[20px] m-auto h-[100%]
              "
              alt={item.name}
            />
            <div
              className={`
                absolute inset-0 bg-gradient-to-b from-overFrom to-overTo text-heading transition-transform duration-300 ease-in-out z-[1] flex flex-col gap-4 justify-end p-5
                md:gap-10 md:p-14
                ${hoveredIndex === index ? 'translate-y-0' : 'translate-y-full'}
              `}
            >
              <h3 className="
                          leading-5 text-[4vw] font-poppins
                          md:leading-9
                          lg:text-[1.6vw] lg:leading-9
                          "
              >
                <b className="
                          text-purple
                          "
                >
                  Name Project :</b> <br />
                  {item.name}
              </h3>
              <p className="
                          leading-5 text-[4vw] font-poppins
                          md:leading-9
                          lg:text-[1.6vw] lg:leading-9
                          "
              >
                <b className="
                text-purple
                "
                >
                  Desc Project:</b> <br />
                  {item.desc}
              </p>
              <Button value={"View Result"} href='' bg='#8155FF' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
