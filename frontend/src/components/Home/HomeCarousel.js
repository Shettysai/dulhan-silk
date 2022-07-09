import React from 'react';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const dataCarousel = [
  {
    image:
      'https://res.cloudinary.com/dulhansilk/image/upload/v1657353919/dulhansilk/posters/land-silk_1_e3vuoz.jpg',
    subtitle: "AASHADAM '22",
    title: 'Ikkat Mela',
    position: 'left',
  },
  {
    image:
      'https://res.cloudinary.com/dulhansilk/image/upload/v1657353916/dulhansilk/posters/land-kanmanie-min_kqs7kf.jpg',
    subtitle: '20% OFF',
    title: 'Chittinad Plain',
    position: 'right',
  },
  {
    image:
      'https://res.cloudinary.com/dulhansilk/image/upload/v1657353914/dulhansilk/posters/land-exc_zrie6t.jpg',
    subtitle: "Ikkat Mela '22",
    title: 'Grand Design',
    position: 'left',
  },
];

const HomeCarousel = () => {
  return (
    <div>
      <Carousel
        autoPlay
        styles= {{minHeight: '900px'}}
        interval={5000}
        infiniteLoop
        showIndicators
        showArrows
        swipeable={false}
        showThumbs={false}
        showStatus={false}
        animationHandler='fade'
      >
        {dataCarousel.map((slide, index) => (
          <div className='carousel__slide' key={index}>
            <img src={slide.image} alt='' className='carousel__img' />
            <div
              className={`carousel__banner carousel__banner--${slide.position}`}
            >
              <div className='banner__subtitle'>{slide.subtitle}</div>
              <h2 className='banner__title'>{slide.title}</h2>
              <Button
                to='/shop'
                component={RouterLink}
                size='small'
                variant='outlined'
                color='secondary'
                className='banner__link'
              >
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
