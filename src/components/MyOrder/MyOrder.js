import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { allFirebase } = useAuth();
  const { user, setUser } = allFirebase;
  useEffect(() => {
    fetch(`https://rocky-dawn-28247.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [myOrders]);

  const handleDelete = (id) => {
    console.log(id);
    const permit = window.confirm("Are you want to delete?");
    if (permit) {
      fetch(`https://rocky-dawn-28247.herokuapp.com/orders/${id}`, {
        method: "delete",
      });
    }
  };
  return (
    <div className="container">
      <h2>my orders</h2>
      <h3>
        {user.email} {myOrders.length}
      </h3>

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
          {myOrders.map((myOrder, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{myOrder.clientName}</td>
              <td>{myOrder.email}</td>
              <td>{myOrder.date}</td>
              <td>{myOrder.place}</td>
              <td>
                {myOrder.approved == false ? (
                  <span className="text-warning">pending....</span>
                ) : (
                  <span className="text-success"> approve</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(myOrder._id)}
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

export default MyOrder;
