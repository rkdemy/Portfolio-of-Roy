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
        {/* <h4 className={styles.email}>roykdemy@gmail.com</h4> */}
      </section>
      <section>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/roy-kim-0428b7276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}>
                <span className={styles.span_mother}>
                  <span>L</span>
                  <span>I</span>
                  <span>N</span>
                  <span>K</span>
                  <span>E</span>
                  <span>D</span>
                  <span>I</span>
                  <span>N</span>
                </span>
                <span className={styles.span_mother2}>
                  <span>L</span>
                  <span>I</span>
                  <span>N</span>
                  <span>K</span>
                  <span>E</span>
                  <span>D</span>
                  <span>I</span>
                  <span>N</span>
                </span>
              </button>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rkdemy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <span className={styles.span_mother}>
                  <span>G</span>
                  <span>I</span>
                  <span>T</span>
                  <span>H</span>
                  <span>U</span>
                  <span>B</span>
                </span>
                <span className={styles.span_mother2}>
                  <span>G</span>
                  <span>I</span>
                  <span>T</span>
                  <span>H</span>
                  <span>U</span>
                  <span>B</span>
                </span>
              </button>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
