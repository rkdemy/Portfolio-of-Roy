import React from "react";
import styles from "./styling/AudioVisualizer.module.css";

const AudioVisualizer = () => {
  const getRandomHeight = () => {
    return Math.floor(Math.random() * 150 + 50) + "px"; // Generate random height between 50px and 200px
  };

  return (
    <div style={{ display: "flex" }}>
      {[...Array(90)].map((_, index) => (
        <div
          className={styles.audio_visualizer}
          key={index}
          style={{ height: getRandomHeight() }}
        ></div>
      ))}
    </div>
  );
};

export default AudioVisualizer;
