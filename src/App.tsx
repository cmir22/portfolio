// import "./App.scss";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Experience from "./pages/Experience/Experience";
import InformationCard from "./pages/Home/InformationCard/InformationCard";
import Skills from "./pages/Skills/Skills";

const App = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col lg:flex-row lg:overflow-auto">
        <div className="lg:1/2 w-full h-screen flex flex-col justify-center items-center">
          <InformationCard />
        </div>
        <div className="lg:1/2 w-full overflow-auto">
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
