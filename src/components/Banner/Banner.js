import React from 'react';
import "./Banner.css"
import  img  from "../images/banner1.jpg";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
      <div className="banner row d-flex align-items-center justify-content-center">
        <div className="col">
          <img height="780px" className="img-fluid" src={img} alt="" />
        </div>
        <div className="col">
          <div>
            <h4> Top Selling! </h4>
            <h2> Fresh for your health</h2>
            <Link to="/services">
              <Button className="btn btn-success">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;