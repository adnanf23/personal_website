import Typografi, { typografiData } from "./Typografi.jsx";
import Button from "./Button.jsx";

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
  return (
    <div
      id="skils"
      className="
                w-[90%] h-[95vh]
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
        <Button value={"Certificate"} />
      </div>
      <div
        className="
                    px-0 flex flex-col gap-4
                    "
      >
        <p
          className="
                font-poppins text-paragraph mb-[-7px]
                "
        >
          soft skills that I improved :
        </p>
        <div
          className="
                    flex flex-wrap gap-2
                    "
        >
          {skils.map((item, index) => (
            <img
              key={index}
              src={item.img}
              className="
                    w-[55px]
                    md:w-[70px]
                    lg:w-[70px]
                    "
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skils;
