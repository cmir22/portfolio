import "./App.scss";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Experience from "./pages/Experience/Experience";
import InformationCard from "./pages/Home/InformationCard/InformationCard";
import Skills from "./pages/Skills/Skills";

const App = () => {
  return (
    <>
      <div className="sections">
        <div className="sections__left">
          <InformationCard />
        </div>
        <div className="sections__right">
          <Home />
          <Skills />
          <AboutMe />
          <Experience />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
