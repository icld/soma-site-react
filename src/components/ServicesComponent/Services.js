import "./Services.css";
import image from "./console.jpg";

const services = [
  {
    service: "Production and Engineering",
    rate: "per day",
  },
  {
    service: "Mixing and Remixing",
    rate: "per day",
  },
  {
    service: "Mastering",
    rate: "per song",
  },
  {
    service: "Session Drumming",
    rate: "per song",
  },
];

const Services = () => {
  return (
    <div className="services-wrapper">
      <div classname="services-img-box">
        <img src={image} alt="john" className="services-img"></img>
      </div>
      {/* <img src={image2} alt="john" className="about-pic2"></img> */}

      <div className="services-container">
        <h2> SERVICES </h2>

        <div class="services-content">
          <h3>Please contact John about rates for the following services:</h3>
          {services.map((service) => (
            <div>
              <div className="service-service">{service.service}</div>
              <div className="service-price">{service.rate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

<div className="services-container"></div>;
