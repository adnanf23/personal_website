import Typografi, { typografiData } from "./Typografi.jsx";
import Card, { dataCard } from "./Card.jsx";

function About() {
  return (
    <div
      id="about"
      className="
                w-[100%] flex flex-col gap-[20px] justify-center h-[100vh]  mt-[170px]
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
        <p
          className="
                    font-poppins text-paragraph mb-[-7px]
                    "
        >
          soft skills that I improved :
        </p>
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
