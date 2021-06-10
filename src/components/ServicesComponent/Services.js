import "./Services.css";
import image from "./console.jpg";

const Services = () => {
  return (
    <div className="about-wrapper">
      <div classname="about-img-box">
        <img src={image} alt="john" className="services-img"></img>
      </div>
      {/* <img src={image2} alt="john" className="about-pic2"></img> */}

      <div className="services-container">
        <h2> SERVICES </h2>

        <div class="sevices-content">
          <p>
            John McEntire is pleased to offer the following services: <br />
            <br />
            Production and Engineering - (daily rates) <br />
            Mixing and Remixing - (daily rates) <br />
            Mastering - (per song) <br />
            Session Drumming - (per song) <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

<div className="services-container"></div>;
