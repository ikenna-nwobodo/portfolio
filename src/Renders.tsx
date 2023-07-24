import "./Renders.css";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

function Renders() {
  return (
    <div className="renders">
      <Intro />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Renders;
