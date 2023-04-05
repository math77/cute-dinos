import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";


function SomeIdeas() {
	return (
		<div style={{ backgroundColor: '#000000' }}>
			<Navbar />
			<section className="section is-medium">
				<h1 className="is-size-3">Some ideas.</h1>
				<h2 className="is-size-5 mb-6">Use them for inspiration, build some, do whatever you wish.</h2>
				<div className="mb-6">
					<ul>
						<li className="idea mb-6">
							A 8-bit puzzle- and map-based game that lets the Dinos solve problems, 
							puzzles, and challenges to ultimately defeat Dr. Evil Power Anihc.
						</li>
						<li className="idea mb-6">
							Animated series about the Dinos for streaming services. Showing the daily life of the Dinos, 
							their adventures and challenges. Maybe the Dinos exploring space or colonizing another planet?
						</li>
						<li className="idea mb-6">
							An NFT collection of battle items for the Dinos to use. Complements the Dinos and makes them NFT composable.
						</li>
						<li className="idea mb-6">
							NFT collection of the Dinos and their complements in Voxel 3D format to be used in the metaverse.
						</li>
						<li className="idea mb-6">
							A children's book where the Dinos teach the basic principles of drawing and the arts. 
						</li>
						<li className="idea">
							Dino-inspired online gift store. T-shirts, hats, mugs, stickers, jackets, bags and among other amazing products.
						</li>
					</ul>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default SomeIdeas;