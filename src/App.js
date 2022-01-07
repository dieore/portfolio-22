import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Habilities from "./components/Habilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<div className="bg"></div>
			<div className="bg bg2"></div>
			<div className="bg bg3"></div>
			<Navbar />
			<Header />
			<About />
			<Habilities />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
