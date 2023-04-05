import { Link } from 'react-router-dom';


import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";


function Faq() {
	return (
		<div style={{ backgroundColor: '#000000' }}>
			<Navbar />
			<section className="section is-medium">
				<div className="mb-6">
					<h1 className="question">What is Modern Dinos?</h1>
					<p className="answer">
						Modern Dinos is a collection of 946 unique pixelated dinosaurs. Originally released by 21 year old computer 
						science student and environmental volunteer <span><a href="https://twitter.com/treematheus" target="_blank" rel="noreferrer">@treematheus</a></span>.
						<br /> <br />
						The project is open-source, public domain, decentralized and community owned.
					</p>
				</div>
				<div className="mb-6">
					<h1 className="question">Why public domain?</h1>
					<p className="answer">
						Decentralization, community work, and collaboration will always create better ideas, initiatives, and products.
						<br /> <br />
						The creator of Modern Dinos believes that because he created the project by himself, he cannot define his roadmap 
						as this would lead to a major centralization of decisions about the future of the project.
						<br /> <br />
						For these reasons, the roadmap will be entirely thought, discussed, and decided by the Modern Dinos community.
					</p>
				</div>
				<div className="mb-6">
					<h1 className="question">Can I build on Modern Dinos?</h1>
					<p className="answer">
						Yes, you can. The more projects derived, the better for everyone. DERIVATIVES TO THE MOON &#128640; &#128640; &#128640;
						<br/>
						Check out the <span> <Link to="/someideas">ideas</Link> </span>section for some inspiration if you need it.
					</p>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default Faq;
