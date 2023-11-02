import Corousel from "../component/Corousel";
import Toolbar from "../component/Toolbar";
import About from "../component/About";
import Skills from "../component/Skills";
import WorkExperience from "../component/WorkExperience";
import Contact from "../component/Contact";

const Home = () => {
  return (
    <div>
      <Toolbar />
      <Corousel />
      <About />
      <Skills />
      <WorkExperience />
      <Contact />
    </div>
  );
};

export default Home;
