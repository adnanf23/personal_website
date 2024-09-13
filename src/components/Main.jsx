import Hero from "./hero.jsx";
import Profil from "../assets/profil.png";
import About from "./About.jsx";
import Skils from "./Skils.jsx";
import Career from "./Career.jsx";
import Project from "./Project.jsx";

function Main() {
  return (
    <main
      className="px-14
                md:px-14 z-[-1]
                lg:px-60"
    >
      <Hero />
      <img
        src={Profil}
        alt=""
        className=" 
                w-[100%] absolute z-[-3] top-100 left-0 mx-auto  mt-[-200px]
                lg:w-[100%]
            "
      />
      <About />
      <Skils />
      <Career />
      <Project />
    </main>
  );
}

export default Main;
