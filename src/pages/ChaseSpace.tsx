import React from "react";
import styles from "./styling/SongsSafari.module.css";
import chasespace from "../assets/portfolio_images/chasespace2.png";
import shipping from "../assets/chasespace_page/challenge_images/ausShipping.png";
import { SiExpo, SiPostgresql } from "react-icons/si";
import { AiOutlineGoogle } from "react-icons/ai";
import { TbBrandFirebase } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import EscrowOverviewIcon from "../assets/chasespace_page/icons/escrow.png";
import LazyLoad from "react-lazyload";

// Gifs
import AuthVideo from "../assets/chasespace_page/authentication compressed.gif";
import EscrowVideo from "../assets/chasespace_page/escrow compressed.gif";
import messageVideo from "../assets/chasespace_page/message compressed.gif";
import TripVideo from "../assets/chasespace_page/crud compressed.gif";

// Challenges
import leadership from "../assets/chasespace_page/challenge_images/discord.png";
import adaptingToExistingDatabase from "../assets/chasespace_page/challenge_images/systemdesign.svg";
import messaging from "../assets/chasespace_page/challenge_images/messaging.svg";
import escrowCode from "../assets/chasespace_page/challenge_images/escrowCode.svg";

const ChaseSpace = () => {
  return (
    <div className={styles.song}>
      <div>
        <h1>ChaseSpace</h1>
        <p>
          A peer-to-peer marketplace connecting Buyers and Travelers for global
          personal shopping.
        </p>

        <LazyLoad once>
          <img src={chasespace} alt="A photo of an app called ChaseSpace" />
        </LazyLoad>
      </div>

      <div>
        <h1>
          <span className={styles.bullet_point}></span>
          The Problem
        </h1>
        <span>
          The exorbitant delivery costs associated with purchasing products from
          overseas, particularly in Australia. High delivery fees, which can
          sometimes be as expensive as the product itself or even more.
        </span>
        <p className={styles.tab}>
          E.g., Hedon a motorcycle helmet company places the shipping cost at
          around $100 AUD
        </p>

        <LazyLoad once>
          <img src={shipping} alt="The prices of different delivery costs" />
        </LazyLoad>
      </div>

      <div>
        <h1>
          <span className={styles.bullet_point}></span>
          The Solution
        </h1>
        <span>
          ChaseSpace — a platform that connects buyers and travelers globally.
          Travelers who are already travelling from one country to another can
          conveniently purchase products on behalf of buyers and deliver them.
        </span>

        <p>
          As a team we successfully implemented user roles (Buyers and
          Travelers), authentication, integrated transactions using Escrow, CRUD
          functionality for Travelers and Buyers, Real-time messaging, user
          reviews, user profiles and edited database design schema.
        </p>
      </div>

      <div>
        <h1>
          <span className={styles.bullet_point}></span>
          The Goal
        </h1>

        <p>
          The Goal was to build a solid foundation for the application, setting
          the stage for future development and fine-tuning. It also allowed us
          to showcase our abilities in core feature implementation and teamwork,
          all while working within a real-world project.
        </p>
      </div>

      <div>
        <h1>Project Overview</h1>

        <p>
          This 'Professional Experience' was a capstone unit at university where
          our team of four was assigned a client. ChaseSpace asked us to develop
          the core functionality of their mobile application before handing it
          off to a second development team.
        </p>

        <div className={styles.techstack}>
          <div>
            <h4>Tech Stack</h4>
            <p>
              <SiExpo /> Expo Go
            </p>
            <p>
              <FaReact />
              React-Native
            </p>
            <p>
              <FaNodeJs />
              Node.JS/Express
            </p>
            <p>
              <TbBrandFirebase />
              Firebase
            </p>
            <p>
              <SiPostgresql />
              PostgreSQL
            </p>
            <p>
              <img
                src={EscrowOverviewIcon}
                alt=""
                id={styles.escrowImage}
                style={{ marginRight: "0px", width: "15px" }}
              />
              Escrow API
            </p>
            <p>
              <AiOutlineGoogle />
              Google Locations API
            </p>
          </div>
          <div>
            <h4>Client</h4>
            <p>ChaseSpace</p>

            <h4>Year</h4>
            <p>2023 July - September</p>

            <h4>The Team</h4>
            <p>4 Junior Developers</p>
            <p>1 Supervisor</p>

            <h4>My Role</h4>
            <p>Junior Full-Stack Developer</p>
          </div>
        </div>
      </div>

      <div>
        <h1>
          <span className={styles.bullet_point}></span>
          Key Involvements
        </h1>
        <h1>Authentication</h1>
        <p>
          Implemented the core authentication process, covering user
          registration and login functionalities, ensuring the privacy and
          integrity of user accounts.
        </p>

        <div className={styles.image_container}>
          <LazyLoad once>
            <img
              src={AuthVideo}
              alt="A gif of an authentication process"
              id={styles.gif}
            />
          </LazyLoad>
        </div>
      </div>

      <div>
        <h1>Real-time Messages</h1>
        <p>
          Implemented real-time messaging to enhance user interactions and
          communication within the platform. After discussing with our
          supervisor and client we agreed that using Firebase Real-time database
          was the best course of action for a startup rather than integrating a
          WebSocket and hosting it from scratch.
        </p>
        <div className={styles.image_container}>
          <LazyLoad once>
            <img src={messageVideo} alt="A messaging gif" id={styles.gif} />
          </LazyLoad>
        </div>
      </div>

      <div>
        <h1>Traveler CRUD</h1>
        <p>
          Developed essential CRUD (Create, Read, Update, Delete) functionality
          for Trips, and added a section to see available orders associated with
          the trip.
        </p>
        <div className={styles.image_container}>
          <LazyLoad once>
            <img
              src={TripVideo}
              alt="A gif of someone adding their travel details"
              id={styles.gif}
            />
          </LazyLoad>
        </div>
      </div>

      <div>
        <h1>Escrow API</h1>
        <p>
          Integrated the Escrow API to facilitate secure transactions between
          buyers and travelers, providing built-in payment protection and trust
          for users.
        </p>
        <div className={styles.image_container}>
          <LazyLoad once>
            <img
              src={EscrowVideo}
              alt="A gif of someone making a transaction"
              id={styles.gif}
            />
          </LazyLoad>
        </div>
      </div>

      <div>
        <h1>Google Locations API</h1>
        <p>
          Integrated the Google Locations API in the Trip details to improve
          user experience and streamline the creation process.
        </p>
        <div className={styles.image_container}>
          <LazyLoad once>
            <img
              src={TripVideo}
              alt="A gif of autocomplete destination"
              id={styles.gif}
            />
          </LazyLoad>
        </div>
      </div>

      <div>
        <h1>
          <span className={styles.bullet_point}></span>
          Challenges
        </h1>
        <h1>Leadership</h1>

        <p>
          After the research phase I gained a clear app vision and the
          milestones the team would need to achieve. After a couple of weeks
          guiding the team I gradually became the project lead. I managed
          various aspects of the project from being primary contact for the
          client which included managing client expectations, addressing
          concerns, and ensuring client satisfaction. I also managed the
          timeline and supported the team with bugs, code, and Git assistance.
        </p>
        <div className={styles.image_container}>
          <LazyLoad once>
            <img src={leadership} alt="A screenshot of discord comments" />
          </LazyLoad>
        </div>
      </div>

      <div>
        <h1>Adapting to existing database</h1>

        <p>
          Inheriting a Django and Python backend with limited documentation from
          the previous team was a challenge. Navigating their source code,
          deciphering the database structure, and understanding the use of each
          table required indepth analysis and adaptation.
        </p>
        <div className={styles.image_container}>
          <LazyLoad once>
            <img
              src={adaptingToExistingDatabase}
              alt="A system design overview"
            />
          </LazyLoad>
        </div>
      </div>

      <div>
        <h1>Real-time messaging</h1>

        <p>
          Implementing real-time messaging per the client's request was a
          complex task. I researched whether to build this feature from scratch
          or use a third-party service like Firebase Real-time Database, opting
          for the latter due to cost-effectiveness for a startup. Implementing
          additional features like an unread badge, displaying the latest
          message, and enabling image uploads added further complexity.
        </p>
        <div className={styles.image_container}>
          <LazyLoad once>
            <img src={messaging} alt="Messaging screen" />
          </LazyLoad>
        </div>
      </div>

      <div>
        <h1>Escrow API</h1>

        <p>
          Integrating the Escrow API presented the most significant challenge.
          With limited community support, forums, or resources, I relied heavily
          on the official API documentation. It took three days of trial and
          error to identify the correct code snippet and successfully integrate
          the API.
        </p>
        <div className={styles.image_container}>
          <LazyLoad once>
            <img src={escrowCode} alt="Boilerplate code" />
          </LazyLoad>
        </div>
      </div>

      <div>
        <h1>Conclusion & Reflection</h1>

        <p>
          This professional experience was my first experience into client
          services, involving tasks such as expectation management, regular
          communication via emails and Zoom meetings, and collaboration within a
          team. The collaborative nature of discussing code, brainstorming
          ideas, and overcoming challenges as a group stood out as a significant
          reason for my enjoyment and reaffirmed my passion for the industry.
        </p>
      </div>
    </div>
  );
};

export default ChaseSpace;
