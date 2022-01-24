import React from 'react';
import img1 from "../images/logo1.png";
import './Footer.css'

const Footer = () => {
  
    return (
      <div className="  bg-dark">
        <div className="mt-4 container">
          <div className="row d-flex align-items-center ">
            <div className="col p-5">
              <img src={img1} alt="" />
            </div>
            <div className="col text-light">
              <h3>Our Company</h3>
              <a href="/home">About</a>
              <br />
              <a href="/home">News</a>
              <br />
              <a href="/home">Services</a>
              <br />
              <a href="/home">Our Team</a>
              <br />
              <a href="/home">Careers</a>
              <br />
              <a href="/home">Projects</a>
            </div>
            <div className="col text-light">
              <h3>Contact</h3>
              <a href="/home">Help Center</a>
              <br />
              <a href="/home">Support Community</a>
              <br />
              <a href="/home">address</a>
              <br />
              <a href="/home">FAQ</a>
              <br />
              <a href="/home">Our partners</a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;
