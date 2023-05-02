import React, { useState } from "react";
import "./carousel.css";

function Carousel({ images }) {
  const [active, setActive] = useState(0);

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            onClick={() => setActive(index)}
            className={index === active ? "active" : ""}
            alt="animal hero"
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
