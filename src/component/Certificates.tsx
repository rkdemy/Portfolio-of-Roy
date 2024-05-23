import styles from "./styling/Certificates.module.css";
import ccnaEnterprise from "../assets/certificate_images/ccnaEnterprise.png";
import ccnaSwitch from "../assets/certificate_images/ccnaSwitch.png";
import ccnaIntro from "../assets/certificate_images/ccnaIntro.png";
import LazyLoad from "react-lazyload";

type Text = {
  title: string;
  issued: string;
  image: string;
  url: string;
};

function Certificates() {
  // const text = [
  //   "Understanding of systems design and implementation",
  //   "Experienced in system documentation",
  //   "Skilled in web development technologies including HTML, CSS, and JavaScript",
  //   "Familiarity with front-end framework such as React.js",
  //   "Knowledge of back-end technologies such as Node.js and Express.js",
  //   "Understanding of database management using PostgreSQL",
  //   "Experience in responsive web design",
  //   "Experience in version control using Git and GitHub",
  // ];

  const text: Text[] = [
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issued: "March 01, 2023",
      image: ccnaEnterprise,
      url: "https://www.credly.com/badges/53a8922e-3d79-4c81-93f0-68b16f8f287a",
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issued: "November 17, 2022",
      image: ccnaSwitch,
      url: "https://www.credly.com/badges/b53e9931-87b8-4f37-9a9b-2fdc3122b9c9",
    },
    {
      title: "CCNA: Introduction to Networks",
      issued: "July 02, 2022",
      image: ccnaIntro,
      url: "https://www.credly.com/badges/9f0440c0-07fc-4983-9a9d-eb81d6b0fb7c",
    },
  ];

  return (
    <div className={styles.certificate}>
      <div className={styles.certificate_content}>
        <h3>Certificates</h3>
        <section>
          {text.map((x) => (
            <a key={x.title} href={x.url} target="_blank">
              <LazyLoad once>
                <img src={x.image} alt="" />
              </LazyLoad>
              <span>
                <p>{x.title}</p>
                <p>{x.issued}</p>
              </span>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Certificates;
