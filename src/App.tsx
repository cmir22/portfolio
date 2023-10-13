import "./App.scss";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";
import InformationCard from "./pages/Home/InformationCard/InformationCard";
import Skills from "./pages/Skills/Skills";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="sections">
        <div className="sections__left">
          <InformationCard />
        </div>
        <div className="sections__right">
          <Home />
          <Skills />
          <AboutMe />
        </div>
      </div>
    </>
  );
};

export default App;
