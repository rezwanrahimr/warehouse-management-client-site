import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState([]);
  const [stockQuantity, setStockQuantity] = useState("0");
  const [loading, setLoading] = useState({
    id: "",
    isLoading: false,
    isStock: false,
  });

  const loadData = () => {
    fetch("https://aqueous-journey-35546.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setItem(data));
  };

  // Load data when component is mounted
  useEffect(() => {
    loadData();
  }, []);

  const handleOrder = (id, quantity) => {
    setLoading({ id, isLoading: true, isStock: false });
    const body = { quantity: Number(quantity) - 1 };
    fetch("https://aqueous-journey-35546.herokuapp.com/checkout/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 1) {
          loadData();
        }
        setLoading({ id: "", isLoading: false, isStock: false });
      });
  };

  const handleReStock = (id, quantity) => {
    if (stockQuantity === "") return;
    setLoading({ id, isStock: true, isLoading: false });
    const body = { quantity: !quantity ? 0 : quantity, stock: stockQuantity };
    fetch("https://aqueous-journey-35546.herokuapp.com/re_stock/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 1) {
          loadData();
        }
        setLoading({ id: "", isStock: false, isLoading: false });
      });
  };

  return (
    <div className="container">
       <h2 className="fw-bold my-2 bg-light py-3 mb-4">Inventory Items</h2>
      {/* items showing section start*/}
      <div className="row">
        {item.map((items) => (
          <div key={items._id} className="col-md-3">
            <Card className="my-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={items.img} style={{ height: 220 }} />
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
                <div className="d-flex justify-content-between align-items-end row">
                  <div className="col-md-6">
                    <Button
                      onClick={() => handleOrder(items._id, items.quantity)}
                      disabled={
                        (Number(items.quantity) <= 0 ||
                          (loading.isLoading && loading.id === items._id)) &&
                        true
                      }
                      className="mx-0 w-100"
                      variant="danger"
                    >
                      {loading.isLoading && loading.id === items._id
                        ? "Processing..."
                        : Number(items.quantity) <= 0
                          ? "Stock Out"
                          : "Delivered"}
                    </Button>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control mb-1"
                      placeholder="Quantity"
                      onChange={(e) => setStockQuantity(e.target.value)}
                    />
                    <Button
                      onClick={() => handleReStock(items._id, items.quantity)}
                      className="mx-0 w-100"
                      variant="danger"
                      disabled={
                        loading.isStock && loading.id === items._id && true
                      }
                    >
                      {loading.isStock && loading.id === items._id
                        ? "Stocking..."
                        : "Restock"}
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* items showing section end */}

      <Button className="mb-5 mt-2 px-5 fw-bold" onClick={() => navigate("/manageInventoriItems")} variant="warning" size="lg">
      Manage Inventori +
  </Button>
     
    </div>
  );
};

export default Inventory;
