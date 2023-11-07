import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SkillsSection from "./components/SkillsSection";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import { BrowserRouter as Router } from "react-router-dom";
// import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Home />
        <SkillsSection />
        <AboutMe />
        <MyProjects />
        {/* <Contact /> */}
      </Layout>
    </Router>
  );
}

export default App;
