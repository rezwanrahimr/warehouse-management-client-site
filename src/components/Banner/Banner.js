import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel className='banner' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/abstract-blue-background-blue-paper-in-pastel-colours-bright-halftone-picture-id1061222280?b=1&k=20&m=1061222280&s=170667a&w=0&h=1MT-qczVVXrdp20XbTip0nfbYZyXoMIFEuHQmJONDmU="
                        alt="First slide"
                    />
                    <Carousel.Caption className='col-md-4 text-black mb-4'>

                        <h3 className='display-3 fw-bold'>Dr. Antonia Novello</h3>
                        <p>MBBS (DMC), MRCS (England), FCPS (Urology)
                            Female Urology, Endourology & Reconstructive Urology Specialist
                            Popular Medical College & Hospital
                            <br></br>
                            <small>25 Years of experience in Medical Services</small></p>
                        <br />
                        <Button className='rounded-pill px-4 ' variant="danger">Learn More । +</Button>  <Button className='rounded-pill px-4 ' variant="success">Doctor । +</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner;