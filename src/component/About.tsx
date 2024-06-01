import styles from "./styling/About.module.css";
import { useInView } from "react-intersection-observer";
import cat from "../assets/about/cat.png";
import flower from "../assets/about/flower.png";
import people from "../assets/about/people.png";

const options = [
  "React",
  "NextJS",
  "Vite",
  "Html",
  "CSS",
  "JavaScript",
  "Styled-components",
  "Node JS",
  "PostgreSQL",
  "Firebase",
  "Github",
  "Figma",
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "0px" });

  return (
    <div className={styles.about}>
      <div
        className={styles.about_content}
        ref={ref}
        style={{
          transform: inView ? "none" : "translateY(50px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.5s ease",
        }}
      >
        <h3>
          I'm Roy, a Front-end developer. My goal? To build
          <span className={styles.image_container}>
            <img src={flower} alt="flower" />
          </span>
          stunning websites that are both
          <span className={styles.image_container}>
            <img src={cat} alt="cat" />
          </span>
          aesthetically pleasing and functional, all the while surrounded by
          awesome
          <span className={styles.image_container}>
            <img src={people} alt="arms" />
          </span>
          people.
        </h3>
      </div>
    </div>
  );
};

export default About;
