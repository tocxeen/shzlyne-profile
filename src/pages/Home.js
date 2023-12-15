import Corousel from "../component/Corousel";
import Toolbar from "../component/Toolbar";
import About from "../component/About";
import Skills from "../component/Skills";
import WorkExperience from "../component/WorkExperience";
import Contact from "../component/Contact";
import Motivation from "../component/Motivation";
import { useRef } from "react";

const Home = () => {
  const toolbarRef = useRef();
  const carouselRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const experienceRef = useRef();
  const motivationRef = useRef();
  const contactRef = useRef();

  const handleNavigation = (id) => {
    switch (id) {
      case "carousel":
        contactRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        carouselRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "skills":
        skillsRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        experienceRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "motivation":
        motivationRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;

      case "contact":
        contactRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        toolbarRef?.current?.scrollIntoView({ behavior: "smooth" });
        break;
     
    }
   
  };

  return (
    <div>
      <div ref={toolbarRef}>
        <Toolbar handleNavigation={handleNavigation} />
      </div>
      <div ref={carouselRef}>
        <Corousel />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={experienceRef}>
        <WorkExperience />
      </div>

      <div ref={motivationRef}>
        <Motivation />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
