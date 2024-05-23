import styles from "./styling/Summary.module.css";
import Education from "./Education";
import Certificates from "./Certificates";

const Summary = () => {
  return (
    <div className={styles.summary_container}>
      <div className={styles.summary_container__contents}>
        {/* Education */}
        <section className={styles.education_container}>
          <Education />
        </section>

        {/* Skills */}
        <section>
          <Certificates />
        </section>
      </div>
    </div>
  );
};

export default Summary;
