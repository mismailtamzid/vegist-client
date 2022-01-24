import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import useAuth from "../hooks/useAuth";

const Review = () => {
  const { allFirebase } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { user } = allFirebase;
  const [rating, setRating] = useState(0); // initial rating valu
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };

  const onSubmit = (data) => {
    const name = user.displayName;
    const email = user.email;
    const img = user.photoURL;
    const review = data.review;
    const clientReview = { review, rating, name, email, img };
    console.log(clientReview);
    fetch(`https://rocky-dawn-28247.herokuapp.com/review`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(clientReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setRating(0);
          reset();
          alert("review add successfully");
        }
      });
  };

  return (
    <div className="pt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("review")} />
        <Rating onClick={handleRating} ratingValue={rating} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Review;
