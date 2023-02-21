import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Clients from "./components/clients";
import Footer from "./components/footer";

function App() {
	return (
		<div id="home">
			<Navbar/>
			<Hero/>
			<About/>
			<Projects/>
			<Testimonials/>
			<Clients/>
			<Footer/>
		</div>
	);
}

export default App;
