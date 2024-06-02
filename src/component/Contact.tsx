import styles from "./styling/Contact.module.css";
import ParallaxText from "../ulilities/ParallaxText.tsx";
import Modal from "./Modal.tsx";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.marquee}>
        <Modal>
          <a>
            <ParallaxText baseVelocity={2}>
              GET IN TOUCH - LET'S TALK -&nbsp;
            </ParallaxText>
          </a>
        </Modal>
      </div>
      <section>
      </section>
      <section>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/roy-kim-0428b7276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>LINKEDIN</button>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rkdemy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>GITHUB</button>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
