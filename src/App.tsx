import "./App.scss";
import InformationCard from "./pages/Home/InformationCard/InformationCard";

const App = () => {
  return (
    <>
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
