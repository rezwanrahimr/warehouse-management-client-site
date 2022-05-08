import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import cursolImage from "../../image/carsol1.jpg";
import cursolImagetwo from "../../image/carsol2.jpg";
const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel className="banner" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={cursolImage} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cursolImagetwo}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
