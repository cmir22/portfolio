import "./App.css";
import PageContainer from "./components/PageContainer/PageContainer";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <PageContainer children={<Home />} />
    </>
  );
};

export default App;
