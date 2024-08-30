import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; 
import './MainPage.css';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';
import img6 from '../../assets/img6.jpeg';
import img7 from '../../assets/img7.jpeg';
import img8 from '../../assets/img8.jpeg';
import img9 from '../../assets/img9.jpeg';
import img10 from '../../assets/img10.jpeg';

const images = [
  { src: img4, name: 'Biryani' },
  { src: img5, name: 'Paneer Tikka' },
  { src: img6, name: 'Samosa' },
  { src: img7, name: 'Butter Chicken' },
  { src: img8, name: 'Chole Bhature' },
  { src: img9, name: 'Rogan Josh' },
  { src: img10, name: 'Pani Puri' },
];
export const FoodSlider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 0,  
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3, 
        },
        1440: {
          slidesPerView: 6, 
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (

    <div className='slider-back'>
      <div className='all-btn'>
        <h3 className='slider-title'>What's on your mind?</h3>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div className="swiper-slide" key={index}>
              <img src={image.src} alt={`Slide ${index + 1}`} />
              <h6>{image.name}</h6>
            </div>
      ))}
      </div>
      </div>
    </div>

  );
};