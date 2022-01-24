import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { RatingView } from "react-simple-star-rating";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://rocky-dawn-28247.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1>Customer Reviews</h1>
      <Row xs={1} md={3} lg={3} className=" d-flex align-items-center justify-content-center">
        {reviews.map((review) => (
          <div class="card" style={{ width: "18rem", margin: "25px" }}>
            <div class="card-body">
              <h5 class="card-title">Comment</h5>
              <div>
                <Col>
                  <h1>{review.review}</h1>
                  <RatingView
                    ratingValue={review.rating} /* RatingView Props */
                  />
                </Col>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default CustomerReview;
