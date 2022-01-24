import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const PlaceORder = () => {
  const history = useHistory();
  var today = new Date();

  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date;
  const { id } = useParams();
  const { allFirebase } = useAuth();
  const { user, setUser } = allFirebase;
  const { register, handleSubmit, reset } = useForm();
  const [product, setSetvice] = useState({});

  useEffect(() => {
    fetch(`https://rocky-dawn-28247.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSetvice(data);
        console.log(data);
      });
  }, []);

  const onSubmit = (data) => {
    const newClientData = {
      clientName: user.displayName,
      email: user.email,
      date: dateTime,
      place: product.productName,
      cost: product.price,
      adress: data.adress,
      approved: false,
    };

    fetch(`https://rocky-dawn-28247.herokuapp.com/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClientData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Thank You!", "You Booking  a Beautyfull Place!", "success");
          history.push("/");

          reset();
        }
      });
  };
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 order-box">
      <div className="col">
        <dib className="row  row-cols-sm-1 row-cols-md-2 justify-content-center align-items-center ">
          <div className="col mt-5">
            <Card>
              <Card.Img variant="top" src={product.img} alt="..." />
              <Card.Body>
                <Card.Text>
                  <h5 className="card-title text-primary">
                    {product.productName}
                  </h5>

                  <h6>Total Cost : {product.price}</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </dib>
      </div>
      <div className="col ">
        <div className="Order-container">
          <h3 className="pt-5 fw-bold  ">Filup This Form</h3>
          <div className="Event-container">
            <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
              <input
                className="p-2 m-2"
                required
                {...register("clientName")}
                value={product.productName}
                disabled
                placeholder=" Service Name"
              />
              <br />
              <input
                className="p-2 m-2"
                required
                {...register("email")}
                disabled
                value={product.date}
                placeholder="sort title"
              />
              <br />
              <input
                className="p-2 m-2"
                {...register("date")}
                disabled
                value={dateTime}
              />
              <br />
              <textarea
                className="text-dark p-2 m-2"
                required
                {...register("adress")}
                placeholder="Adress"
              />
              <br />
              <input
                className="p-2 m-2"
                value={product.price}
                disabled
                {...register("cost")}
                placeholder="  cost "
              />
              <br />
              <input
                type="submit"
                className="text-dark p-2 m-2 btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceORder;
