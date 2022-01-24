import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { allFirebase } = useAuth();
  const { user, isLoading } = allFirebase;

  useEffect(() => {
    fetch("https://rocky-dawn-28247.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  const handleDelete = (id) => {
    const willDelete = window.confirm("Are you want to delete?");

    if (willDelete) {
      fetch(`https://rocky-dawn-28247.herokuapp.com/products/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete successfully!");

            const remaingServices = products.filter(
              (service) => service._id !== id
            );
            setProducts(remaingServices);
          }
        });
    } else {
      alert("Not Deleteded!");
    }
  };

  return (
    <div className="table-responsive-sm  manageService">
      <table className="table table-sm table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">SN</th>
            <th scope="col">Service Name</th>
            <th scope="col">title</th>
            <th scope="col">image</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((service, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{service.productName}</td>
              <td>{service.shoreTitle}</td>
              <td>
                <img src={service.img} width="100px" alt="" />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="btn btn-danger mt-2"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
