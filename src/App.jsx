import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./home-component/Hero";
import SSection from "./home-component/SSection";
import THSection from "./home-component/THSection";
import TSection from "./home-component/TSection";

function App() {
	return (
		<div className="">
			<Navbar />
			<Hero />
			<div className="mt-32">
				<SSection />
			</div>
			<div className="mt-32">
				<TSection />
			</div>
			<div className="my-32">
				<THSection />
			</div>
			<Footer />
		</div>
	);
}

export default App;
