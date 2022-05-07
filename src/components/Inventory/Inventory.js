import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const navigate = useNavigate();
    const handleDelevered = (id, quantity) => {
        console.log(id, quantity)
        const body = { quantity: Number(quantity) - 1 };
        fetch('http://localhost:5000/checkout/' + id, {
            method: "POST", headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => console.log(data));

    }

    // load items
    const [item, SetItem] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-journey-35546.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => SetItem(data));
    }, [])
    return (
        <div>
            <h2>This is inventory page</h2>

            {/* items showing section start*/}
            {
                item.map(items => <div key={items._id}>



                    <Card className='my-3' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={items.img} />
                        <Card.Body>
                            <Card.Title>{items.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Quantity: {items.quantity}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Price: $ {items.price}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Supplier: {items.supplier}</Card.Subtitle>
                            <hr />


                            <Button onClick={() => handleDelevered(items._id, items.quantity)} disabled={Number(items.quantity) <= 0 && true} className='mx-3' variant="danger">{Number(items.quantity)<= 0 ?'stock out': 'Delivered'}</Button>

                        </Card.Body>
                    </Card>
                </div>)
            }

            {/* items showing section end */}

            <button onClick={() => navigate("/manageInventori")}>Manage Inventori</button>
        </div>
    );
};

export default Inventory;