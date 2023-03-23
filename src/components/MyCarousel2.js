import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./MyCarousel2.css"


const responsive = {
    0: { 
        items: 1
    },
    568: { 
        items: 2
    },
    1024: {
        items: 3, 
        itemsFit: 'contain'
    },
};

const items = [
    <div className="item" data-value="1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zGOL4M_0UfkLs0Kxd4cDl-zAGmHdn-rLVQ&usqp=CAU" alt="1"/>
    </div>,
    <div className="item" data-value="2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_HAFR-m8Ka0GiT1KU7FLHEQFu8NyCiO-mqA&usqp=CAU" alt="2"/>
    </div>,
    <div className="item" data-value="2">
        <img src="https://d18hry5vavz86j.cloudfront.net/BlogImages/107cbe45-937f-46be-888b-08e530c76e9c.jpg" alt="3"/>
    </div>,
    <div className="item" data-value="2">
        <img src="https://www.scrolldroll.com/wp-content/uploads/2022/10/Dhaakad-Worst-bollywood-movies-of-2022.jpg" alt="4"/>
    </div>,
    <div className="item" data-value="2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1s-PBSQ_7TaONVVTM73KXGqLSc2nPnCvJtA&usqp=CAU" alt="5"/>
    </div>,
     <div className="item" data-value="2">
     <img src="https://i0.wp.com/ec2-3-110-12-117.ap-south-1.compute.amazonaws.com/wp-content/uploads/2016/04/gangs-of-wasseypur.jpg?fit=630%2C450" alt="5"/>
 </div>,
  <div className="item" data-value="2">
  <img src="https://wallpapercave.com/wp/wp5031290.jpg" alt="5"/>
</div>,
];

const MyCarousel2 = (props) => {
    // console.log("props",props)
  return (
    <div className='mycarousel2'>
    <AliceCarousel
    autoPlayInterval={300}
    autoPlay={true}
    // autoPlayStrategy="none"
    infinite={true}
    // mouseTracking
    autoPlayDirection={props.dir}
    disableDotsControls={true}
    disableButtonsControls={true}
    items={items}
    responsive={responsive}
/>
</div>
  )
}

export default MyCarousel2






