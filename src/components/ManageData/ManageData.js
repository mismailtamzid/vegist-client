import React, { useEffect, useState } from "react";

const ManageData = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://rocky-dawn-28247.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  console.log(orders);

  const handleDelete = (id) => {
    const permit = window.confirm("Are you want to delete?");
    if (permit) {
      fetch(`https://rocky-dawn-28247.herokuapp.com/orders/${id}`, {
        method: "delete",
      });
    }
  };
  const handleApprove = (id) => {
    fetch(`https://rocky-dawn-28247.herokuapp.com/orders/${id}`, {
      method: "put",
    });
  };

  return (
    <div className="container">
      <h1>{orders.length}</h1>

      <table class="table caption-top">
        <thead>
          <tr>
            <th scope="col">SN</th>
            <th scope="col">Client Name</th>
            <th scope="col">Email</th>
            <th scope="col">Reg. Date</th>
            <th scope="col">Service</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{order.clientName}</td>
              <td>{order.email}</td>
              <td>{order.date}</td>
              <td>{order.place}</td>
              <td>
                {order.approved == false ? (
                  <span className="text-warning">pending....</span>
                ) : (
                  <span className="text-success"> approve</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(order._id)}
                >
                  delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleApprove(order._id)}
                >
                  approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageData;
