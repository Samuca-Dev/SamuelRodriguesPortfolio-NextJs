import React, { Component } from 'react';
import Slider from 'react-slick';
import { ImageInterface } from '../../../../core/interface/ProjectInterface';

export default function Projects(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images: Array<ImageInterface> = props.images;

  return (
    <div>
      <Slider {...settings}>
        {images.map((img, index) => {
          return (
            <div key={index}>
              <img src={img.path}></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
