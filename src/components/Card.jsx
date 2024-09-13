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
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="
                bg-box flex gap-3 w-[200px] px-10 py-5 rounded-[8px]  shadow-md justify-center items-center
                md:w-[400px] md:gap-5
                lg:w-[350px] lg:h-[100px]
                "
        >
          <img
            src={item.src}
            alt={item.title}
            className="
                    w-10 h-[100%]
                    md:w-20 md:h-auto
                    lg:w-10
                    "
          />
          <div
            className="
                    card-text flex flex-col gap-[-4px]  
                    "
          >
            <h3
              className="
                        font-madimi text-heading text-[4vw]
                        lg:text-[1.3vw]
                        "
              style={{
                    color: item.colorTitle
              }}  
            >
              {item.title}
            </h3>
            <p
              className="
                        text-paragraph font-poppins text-[3vw]
                        lg:text-[1vw]
                        "
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
