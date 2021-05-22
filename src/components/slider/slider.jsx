import React from "react";
import Category from "../../img/img-category";
import Slider from "react-slick";

const SliderMoto = () => {
  // Slider Setting
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-wrapper">
      <h2>Top Categories</h2>
      <Slider {...settings}>
        {Category.map((element) => (
          <div
            className="slider-box"
            key={element.id}
            style={{ backgroundImage: "url(" + element.url + ")" }}
          >
            <div
              className="slider-part"
              style={{ backgroundImage: "url(" + element.url + ")" }}
            >
              <h2>{element.category}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderMoto;
