import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import heroImage from "../public/heroImage.jpg";
import smarthome from "../public/smarthome.jpg";
import onboard from "../public/onboard.png";
import booking from "../public/booking.png";
import juiceproduct from "../public/juice-product.png";
import person1 from "../public/person1.png";
import person2 from "../public/person2.png";
import person3 from "../public/person3.png";
import person4 from "../public/person4.png";
import instagram from "../public/instagram.svg"
import linkedin from "../public/linkedin.svg"
import twitter from "../public/twitter.svg"

import "./App.css";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <header>
        <div className="ediee">Edie</div>
        {isMobile && (
          <span onClick={toggleMenu} className="menuIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </span>
        )}
        <div id="mainnavContainer" className="active">
          {isMenuVisible ? "" : <Navigation />}
        </div>
      </header>

      <div>
        <small>Unhappy with your website?</small>
        <h1>We Create beatiful and fast web services</h1>
        <a>
          <img src={heroImage} alt="heroImagen"></img>
        </a>
        <div>
          <h1>Story, emotion and purpose</h1>
          <p>
            {" "}
            We help transform your ideas into reat world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time
          </p>
          <input type="text" />
          <button>Join</button>
        </div>
        <h2>We offer high demand services</h2>
        <div>
          <div>
            <h4>UI/UX Desing</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus rem a accusantium fugiat excepturi similique sequi,
              mollitia dolorem? Optio beatae blanditiis eum nesciunt quisquam,
              delectus ullam commodi et neque voluptas.
            </p>
            <br />
            <button>Get started</button>
          </div>
          <div>
            <h4>Front End</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus rem a accusantium fugiat excepturi similique sequi,
              mollitia dolorem? Optio beatae blanditiis eum nesciunt quisquam,
              delectus ullam commodi et neque voluptas.
            </p>
            <br />
            <button>Get started</button>
          </div>
          <div>
            <h4>Back End</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus rem a accusantium fugiat excepturi similique sequi,
              mollitia dolorem? Optio beatae blanditiis eum nesciunt quisquam,
              delectus ullam commodi et neque voluptas.
            </p>
            <br />
            <button>Get started</button>
          </div>
        </div>
        <h2>Good design means good business</h2>
        <div>
          <div>
            <img src={smarthome} alt="smarthome" />
            <small>Full Stack Application</small>
          </div>
          <div>
            <img src={onboard} alt="onboard" />
            <small>UX/UI desing</small>
          </div>
          <div>
            <img src={booking} alt="booking" />
            <small>mobile application</small>
          </div>
          <div>
            <img src={juiceproduct} alt="juiceproduct" />
            <small>Front End application on</small>
          </div>
          <div>
            <button>see more</button>
          </div>
          <div>
            <div>
              <small>Meet the team</small>
              <h2>We are chilled and a laidbacj team</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                rem minima? Iure velit aspernatur esse architecto, quod mollitia
                non praesentium nisi iusto beatae qui accusamus ducimus ea sunt
                fugiat numquam!
              </p>
            </div>
            <div>
              <div>
                <img src={person1} alt="person1" />
              </div>
              <div>
                <img src={person2} alt="person2" />
                <small>Full Stack Application</small>
              </div>
              <div>
                <img src={person3} alt="person3" />
                <small>Full Stack Application</small>
              </div>
            </div>
          </div>
          <div>
            <h2>
            "Fast and outstanding resutls. Edie understands their customer's needs. They have a young and talented team."
            </h2>
            <div>
              <a href="">
                <img 
                src={person4} 
                alt="person4" />
                <small>Carlos Tran</small>
                <p>The Decorate Gatsby</p>
              </a>
            </div>
          </div>
        </div>
        <footer>
          <div>
            <li>Home</li>
            <li>Service</li>
            <li>Our Works</li>
            <li>Clients</li>
            <li>Contact</li>
          </div>
        <div>
          <a href="">
            <img src={instagram} alt="sgv-insta" />
            </a>
            <a href="">
            <img src={linkedin} alt="sgv-linked" />
            </a>
            <a href="">
            <img src={twitter} alt="sgv-twitter" />
            </a>
        </div>
        <div>
          <a href="">Want us to contact you?</a>
          <input type="text" />
          <button>Join</button>
        </div>
        <h5>created by Brandon - devChallenger.io</h5>
        </footer>
      </div>
    </>
  );
}

export default App;
