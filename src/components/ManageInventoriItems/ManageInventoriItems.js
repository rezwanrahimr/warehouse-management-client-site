import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase";

const ManageInventoriItems = () => {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://aqueous-journey-35546.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = item.filter((items) => items._id !== id);
          setItem(remaining);
        });
    }
  };

  useEffect(() => {
    fetch("https://aqueous-journey-35546.herokuapp.com/inventory")
    .then((res) => res.json())
      .then((data) => setItem(data));
     
  }, []);

  return (
    <div className="container">
      <h2>My item Section</h2>
      <div className="row">
        {item?.length > 0 ? (
          item.map((items) => (
            <div key={items._id} className="col-md-3">
              <Card className="my-3" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={items.img}
                  style={{ height: 220 }}
                />
                <Card.Body>
                  <Card.Title>{items.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Quantity: {items.quantity}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Price: $ {items.price}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Supplier: {items.supplier}
                  </Card.Subtitle>
                  <hr />

                  <Button
                    onClick={() => handleDelete(items._id)}
                    className="mx-3"
                    variant="danger"
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h2>No Data</h2>
        )}
      </div>
      <button
        className="btn btn-warning"
        onClick={() => navigate("/addItem")}
      >
        Add items
      </button>
    </div>
  );
};

export default ManageInventoriItems;
