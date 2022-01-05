import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SectionAbout from "./components/SectionAbout";
import HabilitiesSection from "./components/HabilitiesSection";
import "./App.css";


function App() {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Navbar />
      <Header />
      <SectionAbout/>
      <HabilitiesSection/>
    </div>
  );
}

export default App;
