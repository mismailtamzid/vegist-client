import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://rocky-dawn-28247.herokuapp.com/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("success");
          reset();
        }
      });
    // console.log(data);
  };
  return (
    <div>
      <h3>add a new Product</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("productName")}
          className="p-2 m-2"
          placeholder="Product Name"
        />{" "}
        <br />
        <input
          {...register("img")}
          className="p-2 m-2"
          placeholder="Image Url"
        />
        <br />
        <input
          {...register("description")}
          className="p-2 m-2"
          placeholder="Description"
        />
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="number"
          {...register("price", { required: true })}
          className="p-2 m-2"
          placeholder=" Delivery Charge"
        />
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
