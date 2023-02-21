import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Clients from "./components/clients";
import Footer from "./components/footer";

import { Helmet } from "react-helmet"

function App() {
	return (
		<main>
			<Helmet>
				{/*HTML Meta Tags */}
				<meta name="theme-color" content="#E5383B"/>
				<meta
					name="description"
					content="Hey, I'm Andrew! I'm a developer, content creator and full-time computer science student
					from the UK"
				/>

				{/* Google / Search Engine Tags */}
				<meta itemProp="name" content="Andeh"/>
				<meta
					itemProp="description"
					content="Hey, I'm Andrew! I'm a developer, content creator and full-time computer science student
					from the UK"
				/>
				<meta itemProp="image" content="/logo512.png"/>

				{/* Facebook Meta Tags */}
				<meta property="og:url" content="https://andeh.uk"/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Andeh" />
				<meta
					property="og:description"
					content="Hey, I'm Andrew! I'm a developer, content creator and full-time computer science
					student from the UK"
				/>
				<meta property="og:image" content="/logo512.png" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Andeh" />
				<meta
					name="twitter:description"
					content="Hey, I'm Andrew! I'm a developer, content creator and full-time computer science student
					from the UK"
				/>
			</Helmet>
			<meta name="twitter:image" content="/logo512.png"/>
			<div id="home">
				<Navbar/>
				<Hero/>
				<About/>
				<Projects/>
				<Testimonials/>
				<Clients/>
				<Footer/>
			</div>
		</main>
);
}

export default App;
