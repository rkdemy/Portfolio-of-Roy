import React from "react";
import styles from "./styling/Education.module.css";
import wsu from "../assets/certificate_images/wsu.png";
import LazyLoad from "react-lazyload";

const Education = () => {
  return (
    <div className={styles.education}>
      <div className={styles.education_content}>
        <h3>Education</h3>
        <div className={styles.content_container}>
          <div className={styles.summary}>
            <p>
              Studying ICT exposed me to a variety of technologies such as
              javascript, C, SQL, ASP.NET, R, Java and more. Although my
              proficiency in some technologies have dulled over time, it
              displays my ability to adapt and learn new technologies. Moreover,
              I believe the variety of technologies I’ve applied to my projects
              proves my interest to experiment with new frameworks and
              technologies.
            </p>
            <br />
            <p>
              My primary focus is on programming, however, my experience in
              documentation has instilled an appreciation for its use when it
              comes to handovers, maintenance and collaboration.
            </p>
            <br />

            <a
              href="https://www.myequals.net/r/sharelink/189a0b87-ace2-4169-a01d-d87e9b23d94b/20e420ea-2f11-4f16-9b49-ad55c4a46159"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <div className={styles.wsu}>
                <LazyLoad once>
                  <img src={wsu} alt="WSU Logo" />
                </LazyLoad>
                <span>
                  <p>Bachelors of Information and Communications Technology</p>
                  <p>Western Sydney University</p>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
