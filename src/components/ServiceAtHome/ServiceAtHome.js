import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import Service from "../Service/Service";

const ServiceAtHome = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://rocky-dawn-28247.herokuapp.com/products/home")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="mt-5 text-primary">Our All Products </h2>
      <Row xs={1} md={3} className="g-4 d-flex">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default ServiceAtHome;
