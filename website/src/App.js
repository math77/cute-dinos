import "./App.css";

import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/js/all.js';


import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

import im1 from "./assets/images/dino.png";
import im2 from "./assets/images/dinoo.png";
import im3 from "./assets/images/dinooo.png";
import im4 from "./assets/images/dinoooo.png";

import im5 from "./assets/images/dinooooo.png";
import im6 from "./assets/images/dinoooooo.png";

import roadmap from "./assets/images/roadmap.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="section is-medium" id="banner-welcome">
        <div className="container has-text-centered" id="banner-welcome22">
          <h1 className="page-title">Modern Dinos</h1>
          <p className="infos">
            A tribe of 946 lab-grown Dinos. They want to have fun, meet new people, buy ETH, 
            and eat those who prefer Web2.
            <br/> <br/>
            Public domain, open-source and community owned.
          </p>
          {/*
          <p className="infos-2 mt-4">
            Hey hey hey
          </p>
          */}
          <p className="infos-2 mt-6">
            Mint and have fun by: 0.02 ETH
          </p>
        </div>
      </section>
      <section className="section is-small">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-1 session-title">
                The Modern Dinos Tribe
              </h2>
              <p className="is-size-5 has-text-justified" style={{ marginTop: '10px' }}>
                In the near future, thanks to advances in biotechnology, and decentralized project financing, 
                a brilliant, innovative, and anonymous scientist known only as Dr. Kilativ Niretub has succeeded 
                in bringing Dinosaurs back to life. The world is now experiencing the construction of a utopia. 

                Peace, technological advances, decentralized power, and a culture of fine arts and community 
                are the basis of the society that the Modern Dinos tribe lives in.

                The Dinos want to explore, have fun, and help continue to build this beautiful society, 
                but the evil, anti-community, anti-decentralization Dr. Evil Power Anihc, wants to put an end to all 
                the fun, take overpower, and rule the entire society by himself. Now the Dinos are counting 
                on you to help them defeat Dr. Evil Power Anihc and continue building an equal and fun world for all.
              </p>
            </div>
            <div className="column">
              <div className="columns is-centered">
        				<div className="column is-two-fifths">
        					<figure className="image is-1by1">
        						<img src={im6} alt="Dino" />				
        					</figure>
        				</div>
        				<div className="column is-two-fifths">
        					<figure className="image is-1by1">
        						<img src={im4} alt="Dino" />				
        					</figure>
        				</div>
				      </div>
				      <div className="columns is-centered"> 
        				<div className="column is-two-fifths">
        					<figure className="image is-1by1">
        						<img src={im3} alt="Dino" />				
        					</figure>
        				</div>
        				<div className="column is-two-fifths">
        					<figure className="image is-1by1">
        						<img src={im2} alt="Dino" />				
        					</figure>
        				</div>
				      </div>
              <div className="columns is-centered"> 
                <div className="column is-two-fifths">
                  <figure className="image is-1by1">
                    <img src={im1} alt="Dino" />       
                  </figure>
                </div>
                <div className="column is-two-fifths">
                  <figure className="image is-1by1">
                    <img src={im5} alt="Dino" />        
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*
      <section className="section is-medium">
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image image is-4by5">
                <img src={roadmap} alt="Roadmap" />  
              </figure>
            </div>     
            <div className="column">
              <h2 className="is-size-1 session-title">
                Roadmap?
              </h2>
              <p className="is-size-5 has-text-justified" style={{ marginTop: '10px' }}>
                Since the project was founded by a single person, the founder @algo wants to avoid making promises 
                that may not be able to be kept. For this reason the roadmap consists of two parts:
                <br/> <br/>
                1 - The project is public domain, open-source and decentralized. That way any interested party can 
                build derivatives of the project and grow the community.
                <br/> <br/>
                2 - 50% of the ETH raised during the minting will be donated to the non-profit climate 
                change organization Open Earth Foundation.
                <br/> <br/>
              </p>
              <p className="is-size-6 has-text-justified mt-5" style={{ color: '#ee4b74' }}>
                "I believe this is as fair and ethical as I can be with the community. So if you like 
                the project mint it with the above information in mind."
              </p>
            </div>
          </div>          
        </div>
      </section>
    */}
      <section className="section is-medium">
        <div className="container">
          <h1 className="is-size-1">About the project</h1>
          <p className="is-size-5 mt-2" style={{ color: '#87E749' }}>
            1 - The project is public domain, open-source and decentralized. That way any interested party can 
            build derivatives of the project and grow the community.
          </p>
          <br/>
          <p className="is-size-5 mt-2" style={{ color: '#EE4B74' }}>
            2 - 50% of the ETH raised during the minting will be donated to the non-profit climate 
            organization <span> <a href="https://openearth.org/" target="_blank" rel="noopener noreferrer"> Open Earth Foundation </a></span>
          </p>
        </div>
      </section>
      <section className="section is-small mb-4" id="get-dino-banner">
        <div className="container">
          <h1 className="is-size-1 has-text-centered mb-6">
            Get a Dino and join the tribe.
          </h1>
          <button className="button is-large is-rounded mb-5" id="btn-mint-dino">Get a Dino</button>      
        </div>
      </section>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
