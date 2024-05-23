import styles from "./styling/Hero.module.css";
import bg from "../assets/pill2.png";
import Switch from "../ulilities/Switch";
import person from "../assets/person.png";
import { TbArrowMoveRight } from "react-icons/tb";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.hero_container__content}>
          <div className={styles.hero_name}>
            <div className={styles.hero_2}>
              <h1>R</h1>
              <Switch />
              <h1>Y FRONT</h1>
            </div>
            <div className={styles.hero_3}>
              <h1>END</h1>
              <div className={styles.image_container}>
                <img
                  src={bg}
                  placeholder="blur"
                  alt="An abstract painting"
                  className={styles.base}
                />
              </div>
            </div>
            <div className={styles.hero_4}>
              <div className={styles.image_container}>
                <img src={bg} placeholder="blur" alt="An abstract painting" />
              </div>
              <h1>DEVELOPER</h1>
            </div>
          </div>
        </div>
        <div>
          <ul className={styles.hero_links}>
            <li>
              <a href="#portfolio" className={styles.underline}>
                <aside className={styles.arrow}>
                  <TbArrowMoveRight />
                </aside>
                my projects
              </a>
            </li>
            <li>
              <a href="#about" className={styles.underline}>
                <aside className={styles.arrow}>
                  <TbArrowMoveRight />
                </aside>
                about me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
