import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import InformationCard from "./pages/Home/InformationCard/InformationCard";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="sections">
        <div className="sections__left">
          <InformationCard />
        </div>
        <div className="sections__right"></div>
      </div>
    </>
  );
};

export default App;
