import styles from "./styling/ProjectStyle.module.css";

//ChaseSpace
import ChaseSpaceScreenshot from "../assets/portfolio_images/chasespace1.png";

//Song Safari
import SongSafari from "../assets/portfolio_images/Disney/recommendedsongs23.png";

//Ikea
import IkeaHome2 from "../assets/portfolio_images/Ikea/notikea2.png";

//Tech Stack Icons
import reactLogo from "../assets/portfolio_images/tech/react.png";
import cloudfunction from "../assets/portfolio_images/tech/cloudfunction.png";
import reactNativeLogo from "../assets/portfolio_images/tech/React_Native_Logo.png";
import firebaseLogo from "../assets/portfolio_images/tech/Firebase_Logo.png";
import firestore from "../assets/portfolio_images/tech/firestore.png";
import escrowLogo from "../assets/portfolio_images/tech/Escrow_com_logo.png";
import expoLogo from "../assets/portfolio_images/tech/expo.png";
import jsLogo from "../assets/portfolio_images/tech/js.png";
import nodeLogo from "../assets/portfolio_images/tech/nodejs.png";
import postgresLogo from "../assets/portfolio_images/tech/postgres.png";
import ts from "../assets/portfolio_images/tech/ts.png";
import auth0Logo from "../assets/portfolio_images/tech/auth0.png";
import stripeLogo from "../assets/portfolio_images/tech/stripe.png";
import styledLogo from "../assets/portfolio_images/tech/styled-components.png";
import redux from "../assets/portfolio_images/tech/redux.png";

import ProjectContainer from "./ProjectContainer.js";
import { useInView } from "react-intersection-observer";

const notikeadescription =
  "An ecommerce shop made loosely following a tutorial project from a Udemy course by John Smilga completed during my early days of learning React. It served as a crucial milestone before moving onto personal projects.";

const chasespacedescription =
  " A peer-to-peer marketplace to facilitate global personal shopping by connecting Buyers with Travelers, akin to Grabr, Airtasker and Fiverr.";

const songSafaridescription =
  "Requiring Spotify Premium, Song Safari is a website to help discover new music genres based on your spotify playlist. By analyzing the genres associated with the artists in your playlist, it returns similar yet distinct genres and recommends new songs to broaden your musical tastes.";

const chasespaceTechImage = [
  { image: reactNativeLogo },
  { image: expoLogo },
  { image: jsLogo },
  { image: nodeLogo },
  { image: postgresLogo },
  { image: firebaseLogo },
  { image: escrowLogo },
];

const songSafariTechImage = [
  { image: reactLogo },
  { image: ts },
  { image: jsLogo },
  { image: nodeLogo },
  { image: redux },
  { image: cloudfunction },
  { image: firestore },
];

const ikeaTechImage = [
  { image: reactLogo },
  { image: jsLogo },
  { image: styledLogo },
  { image: auth0Logo },
  { image: stripeLogo },
];

const Portfolio = () => {
  const [chasespaceRef, chasespaceInView] = useInView({
    triggerOnce: false,
  });
  const [disneyRef, disneyInView] = useInView({
    triggerOnce: false,
  });
  const [notIkeaRef, notIkeaInView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className={styles.portfolio}>
      <section className={styles.section}>
        <ul>
          <div
            ref={disneyRef}
            style={{
              transform: disneyInView ? "none" : "translateY(50px)",
              opacity: disneyInView ? 1 : 0,
              transition: "all 0.5s ease",
            }}
          >
            <div className={styles.header}>
              <h3>Song Safari</h3>
              <h3 className={styles.project_number}>01</h3>
            </div>

            <li>
              <ProjectContainer
                title="Song"
                id="v4dnabhbchjna6szlpvi"
                description={songSafaridescription}
                tech={songSafariTechImage}
                image={SongSafari}
                techStyling={styles.second_tech_logo_container}
                link="/songsafari"
              />
            </li>
          </div>

          <div
            ref={chasespaceRef}
            style={{
              transform: chasespaceInView ? "none" : "translateY(50px)",
              opacity: chasespaceInView ? 1 : 0,
              transition: "all 0.5s ease",
            }}
          >
            <div className={styles.header}>
              <h3>ChaseSpace</h3>
              <h3 className={styles.project_number}>02</h3>
            </div>

            <li>
              <ProjectContainer
                title="ChaseSpace"
                description={chasespacedescription}
                tech={chasespaceTechImage}
                image={ChaseSpaceScreenshot}
                techStyling={styles.first_tech_logo_container}
                link="/chasespace"
              />
            </li>
          </div>

          <div
            ref={notIkeaRef}
            style={{
              transform: notIkeaInView ? "none" : "translateY(50px)",
              opacity: notIkeaInView ? 1 : 0,
              transition: "all 0.5s ease",
            }}
          >
            <div className={styles.header}>
              <h3>Not Ikea</h3>
              <h3 className={styles.project_number}>03</h3>
            </div>
            <li>
              <ProjectContainer
                description={notikeadescription}
                tech={ikeaTechImage}
                image={IkeaHome2}
                techStyling={styles.third_tech_logo_container}
              />
            </li>
          </div>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
