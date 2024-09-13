import Typografi, { typografiData } from "./Typografi";
import CalcuProj from "../assets/project1.jpg";

const dataProject = [
  {
    name: "Calculator System",
    img: CalcuProj,
    desc: "1wiiiwuucscsuicha",
  },
  {
    name: "Calculator System",
    img: CalcuProj,
    desc: "2wiiiwuucscsuicha",
  },
  {
    name: "Calculator System",
    img: CalcuProj,
    desc: "3wiiiwuucscsuicha",
  },
];

function Project() {
  return (
    <div
      id="project"
      className="
                    h-[100vh] w-[90%] flex flex-col gap-20
                    lg:w-[100%]
                    "
    >
      <div
        className="
                        lg:w-[48%] mx-auto
                        "
      >
        <Typografi items={[typografiData[4]]} />
      </div>
      <div
        className="
            flex flex-col gap-10
            lg:flex-row
            "
      >
        {dataProject.map((item, index) => (
          <div
            key={index}
            className="
                                bg-heading relative w-[100%] rounded-[20px] z-[-3]
                                "
          >
            <img
              src={item.img}
              className="
                              w-[100%] rounded-[20px] m-auto
                              "
            />
            {/* <div className="
                                    absolute w-[100%] h-[100%] top-50 duration-[100ms] bg-bg text-heading
                                    group-hover:top-0
                                    "
                        >
                            <h3 >
                                Name Project : {item.name}
                            </h3>
                            <p>
                                Desc Projet: <br />
                                {item.desc}
                            </p>
                        </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
