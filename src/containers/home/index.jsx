import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

// Import your image
import a2jpg from "../../images/a2jpg.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Aryan 
          <br />
          Full Stack Developer
        </h1>
        <div className="home__image-wrapper">
          <img src={a2jpg} alt="Aryan Tomar" />
        </div>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
