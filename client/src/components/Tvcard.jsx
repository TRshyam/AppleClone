import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import styles from 'react-awesome-slider/dist/custom-styles/cube-animation.css'; // Import the default styles
import watch from '../assets/images/productd/watch.jpg';

const Slider = () => {
  const images = [
    { img: watch, con: "hello World" },
    { img: watch, con: "hello World" },
    { img: watch, con: "hello World" },
    { img: watch, con: "hello World" },
  ];

  return (
    <AwesomeSlider cssModule={styles}>
      {images.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={`Slide ${index + 1}`} />
          <div>
            <h2>{item.con}</h2>
          </div>
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default Slider;
