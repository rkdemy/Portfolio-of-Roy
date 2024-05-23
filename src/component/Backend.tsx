import React from "react";
import styles from "./styling/Backend.module.css";
import nodeLogo from "../assets/educationLogo/node.svg";
import postgresLogo from "../assets/educationLogo/postgres.svg";
import firebaseLogo from "../assets/educationLogo/firebase.svg";

const Backend = () => {
  const backend = [
    { image: nodeLogo, text: "Node.JS" },
    { image: postgresLogo, text: "PostgreSQL" },
    { image: firebaseLogo, text: "Firebase" },
  ];
  return (
    <div className={styles.backend}>
      <h4>Back-End Stack</h4>
      {backend?.map((x, index) => (
        <div className={styles.tech_container}>
          <img src={x.image} alt="" key={index} className={styles.tech_logo} />
          <p>{x.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Backend;
