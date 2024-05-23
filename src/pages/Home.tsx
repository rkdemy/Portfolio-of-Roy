import styles from "../App.module.css";
import Hero from "../component/Hero";
import About from "../component/About";
import Contact from "../component/Contact";
import Portfolio from "../component/Portfolio";
import Summary from "../component/Summary";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(transparent, #0e100f), linear-gradient(to right, rgb(192, 116, 178, 0.3), #15161c)",
      }}
    >
      <div className={styles.noise}></div>
      <div className={styles.noise}></div>
      <section>
        <Hero />
      </section>

      <section className={styles.portfolio} id="portfolio">
        <Portfolio />
      </section>

      <section className={styles.about} id="about">
        <About />
      </section>

      <section className={styles.summary} id="summary">
        <Summary />
      </section>

      <section className={styles.contact} id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
