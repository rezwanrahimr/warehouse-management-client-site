import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Items.css'

const Items = () => {
    const [item, SetItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => SetItem(data));
    }, [])
    return (

        <div className='items container'>
            {
                item.slice(0,6).map(items => < >


                    <Card className='my-3' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={items.img} />
                        <Card.Body>
                            <Card.Title>{items.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Quantity: {items.quantity}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Price: $ {items.price}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Supplier: {items.supplier}</Card.Subtitle>
                           <hr />
                            <Card.Text>
                                <small>{items.description}</small>
                            </Card.Text>

                            <Button className='mx-3' variant="primary">Update</Button>
                        </Card.Body>
                    </Card>

                </>)
            }

        </div>
    );
};

export default Items;