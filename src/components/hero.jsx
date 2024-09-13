import Typografi, { typografiData } from "./Typografi.jsx";
import Button from "./Button.jsx";

import githubIcon from "../assets/github.svg";
import instaramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import tiktokIcon from "../assets/titok.svg";

const dataMedsos = [
  {
    name: "github",
    img: githubIcon,
    src: "",
  },
  {
    name: "instagram",
    img: instaramIcon,
    src: "",
  },
  {
    name: "linkedin",
    img: linkedinIcon,
    src: "",
  },
  {
    name: "tiktok",
    img: tiktokIcon,
    src: "",
  },
];

function Hero() {
  return (
    <div
      className="
                pt-0 flex flex-col gap-[20px] h-[70vh]
                lg:pt-0 items-center justify-center
                "
    >
      <div
        className="
                      w-[100%] lg:w-[40%] mx-auto
                      "
      >
        <Typografi items={[typografiData[0]]}/>
      </div>
      <div
        className="
                    flex justify-center gap-2
                    md:gap-4
        "
      >
        {dataMedsos.map((item, index) => (
          <a key={index} href={item.src}>
            <img
              src={item.img}
              alt={item.name}
              className="
                        w-9
                        md:w -14
                        lg:w-9  
            "
            />
          </a>
        ))}
      </div>
      <Button value={"Get My Cv"} />
    </div>
  );
}

export default Hero;
