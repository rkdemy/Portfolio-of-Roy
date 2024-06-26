import { useState, useEffect } from "react";
import styles from "./styling/Navbar.module.css";
import ParallaxText from "../ulilities/ParallaxText";
import Modal from "./Modal";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", changeColor);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      <nav
        className={
          color
            ? `${styles.hero_nav_links} ${styles.hero_nav_links_glass}`
            : styles.hero_nav_links
        }
      >
        <div className={styles.hero_nav_logo}>
          <ul>
            <li>
              <a href="/">Roy</a>
            </li>

            <div className={styles.loader_container}>
              <div className={styles.loader}></div>
              <p>Available for work</p>
            </div>

            <li>
              <Modal>
                <button className={styles.button}>CONTACT</button>
              </Modal>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
