import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./sliderCarroussel.css"
import slider1 from "../../assets/images/slider/slider1.jpg";
import slider2 from "../../assets/images/slider/slider2.jpg";
import slider3 from "../../assets/images/slider/slider3.jpg";
import slider4 from "../../assets/images/slider/slider4.jpg";





function SliderCarroussel() {

  const carroussel = [
    {
    link: "https://google.com",
    image: slider1,
    title: "Carroussel"
  },
    {
    link: "https://google.com",
    image: slider2,
    title: "Carroussel"
  },
    {
    link: "https://google.com",
    image: slider3,
    title: "Carroussel"
  },
    {
    link: "https://google.com",
    image: slider4,
    title: "Carroussel"
  },
]



  var settings = {
    arrows: false,
    autoplay: true,
    vertical: true,
    rtl: true,
    slickPrev: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  return (
    <Slider {...settings}>
      {carroussel.map((list) => {
        return (
      <div className="slider-carrousel">
      <a href={list.link}>
        <img src={list.image} alt={list.title} />
      </a>
      </div>
        )
      })}

    </Slider>
  )
}

export { SliderCarroussel }