import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const ManageInventori = () => {
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://aqueous-journey-35546.herokuapp.com/inventory/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = item.filter(items => items._id !== id);
                SetItem(remaining);
            })

        }
    }
    const [item, SetItem] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-journey-35546.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => SetItem(data));
    }, [])
    return (
        <div>
            <h2>Manage Inventori section</h2>
            <div className='items container'>
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
                           

                            <Button onClick={() => handleDelete(items._id)}  className='mx-3' variant="danger">Delete</Button>
                        </Card.Body>
                    </Card>
                    </div>)
            }
        </div>
        </div>
        
    );
};

export default ManageInventori;