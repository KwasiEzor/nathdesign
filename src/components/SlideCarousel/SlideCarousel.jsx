import React, { useState, useEffect } from "react";
import Slider from "infinite-react-carousel/lib/carousel/slider";
const SlideCarousel = ({ slidesToShow, arrowsScroll, children }) => {
  const [slidesNbToShow, setSlidesNbToShow] = useState(slidesToShow);
  const [arrowsNbScroll, setArrowsNbScroll] = useState(arrowsScroll);
  const [windowSize, setWindowSize] = useState(window.innerWidth >= 1200);
  useEffect(() => {
    window.addEventListener("resize", function () {
      if (this.window.innerWidth <= 992) {
        setSlidesNbToShow(3);
        setArrowsNbScroll(3);
        setWindowSize(this.window.innerWidth <= 992);
      }
      if (this.window.innerWidth <= 768) {
        setSlidesNbToShow(2);
        setArrowsNbScroll(2);
        setWindowSize(this.window.innerWidth <= 768);
      }
      if (this.window.innerWidth <= 576) {
        setSlidesNbToShow(1);
        setArrowsNbScroll(1);
        setWindowSize(this.window.innerWidth <= 576);
      }
    });
  }, [slidesNbToShow, arrowsNbScroll, windowSize]);

  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesNbToShow} arrowsScroll={arrowsNbScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default SlideCarousel;
