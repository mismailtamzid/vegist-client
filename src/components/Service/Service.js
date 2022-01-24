import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { img, productName, price, _id } = props.service;
    return (
      <div>
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>
                <h2>{productName}</h2>
                <div className="row d-flex justify-content-around text-primary">
                  <div className="col"> {price}</div>
                </div>
              </Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                lead-in to additional content. This content is a little.
              </Card.Text>
              <Link to={`/placeOrder/${_id}`}>
                <Button className="btn btn-info">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Service;