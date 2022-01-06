import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import HabilitiesSection from "./components/HabilitiesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Navbar />
      <Header />
      <AboutSection/>
      <HabilitiesSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
