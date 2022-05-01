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

        <div className='items'>
            {
                item.map(items => < >


                    <Card className='my-3' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={items.img} />
                        <Card.Body>
                            <Card.Title>{items.name}</Card.Title>
                           
                            <Button className='mx-3' variant="primary">Go</Button>
                        </Card.Body>
                    </Card>

                </>)
            }

        </div>
    );
};

export default Items;