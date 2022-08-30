import "./App.css";
import heroImg from "./images/heroImg.png";

function HeroSection() {
  return (
    <div className="HeroSection">
      <img src={heroImg} alt="swimming" className="HeroSection-image" />

      <div className="Hero-description">
        <h1>Online Experiences</h1>
        <p>
          Join Unique interactive activities led by one-of-a-kind-all without
          leaving home.       
        </p>
      </div>
    </div>
  );
}

export default HeroSection;


