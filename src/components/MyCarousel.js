import React from 'react';
import { Carousel } from "react-bootstrap";
import "./MyCarousel.css"


const MyCarousel = () => {
  return (
    <div className='mycarousel'>
    <Carousel fade={true} pause={false} >
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src="https://wallpaperaccess.com/full/37965.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Upcoming Movie</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src="https://images.hdqwalls.com/wallpapers/avengers-end-game-4k-banner-cb.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Upcoming Movie</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src="https://www.pixel4k.com/wp-content/uploads/2019/10/taken-3-movie-banner_1570395347.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
      <h3>Upcoming Movie</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default MyCarousel