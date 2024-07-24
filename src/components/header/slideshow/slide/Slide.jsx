import React from 'react';
import styles from "./Slide.module.css";

function Slide({ imageURL }) {
  return (
    <div className={styles.slide} style={{ backgroundImage: `url(${imageURL})` }}>
      {} 
    </div>
  );
}

export default Slide;