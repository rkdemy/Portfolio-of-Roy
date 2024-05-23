import React, { useEffect, useState } from "react";
import styles from "./styling/ProjectStyle.module.css";
import { AdjustImageWidth } from "../ulilities/AdjustImageWidth";
import ParallaxText from "../ulilities/ParallaxText";
import { FaPlay } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import VideoPlayer from "./VideoPlayer";

interface ProjectContainerProps {
  title?: string;
  id?: string; // Make id optional
  description: string;
  tech: { image: string }[];
  image: string;
  techStyling: string;
  link?: string;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
  title,
  id,
  description,
  tech,
  image,
  techStyling,
  link,
}) => {
  const [imageWidths, setImageWidths] = useState([]);
  const [showIframe, setShowIframe] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);

  useEffect(() => {
    async function fetchImageWidths() {
      const widths = await Promise.all(
        tech.map(async (x) => {
          const adjustedWidth = await AdjustImageWidth(x.image);
          return adjustedWidth;
        })
      );
      setImageWidths(widths);
    }

    fetchImageWidths();
  }, [tech]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 830);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePlayButtonClick = () => {
    setShowIframe(!showIframe);
  };

  return (
    <>
      <div className={styles.projectContainer_section}>
        <div className={styles.top_container}>
          <div className={styles.link_button}>
            {title == "ChaseSpace" ? (
              <>
                <button>
                  <a href={link}>Learn more...</a>
                </button>
              </>
            ) : title === "Song" ? (
              <>
                <button>
                  <a href={link}>Learn more...</a>
                </button>
                <button>
                  <a
                    href="https://github.com/rkdemy/song-safari-public"
                    target="_blank"
                  >
                    Github
                  </a>
                </button>
                <button>
                  <a
                    href="https://song-safari-private.vercel.app/guest"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </button>
              </>
            ) : (
              <>
                <button>
                  <a href="https://github.com/rkdemy/notikea" target="_blank">
                    Github
                  </a>
                </button>
                <button>
                  <a
                    href="https://sea-lion-app-p4at7.ondigitalocean.app"
                    target="_blank"
                  >
                    Live Site
                  </a>
                </button>
              </>
            )}
          </div>
        </div>
        <div
          className={
            title == "ChaseSpace"
              ? styles.chasespace_image_container
              : styles.image_container
          }
        >
          <img src={image} alt="" className={styles.image} />

          {showIframe && (
            <>
              <VideoPlayer
                width="100%"
                height="100%"
                id={id}
                className={styles.iframe}
              />

              <button
                className={styles.close_button}
                onClick={() => setShowIframe(false)}
              >
                <IoCloseSharp />
              </button>
            </>
          )}
          {!showIframe && id && (
            <button
              className={styles.play_button}
              onClick={() => setShowIframe(true)}
            >
              <FaPlay />
            </button>
          )}
        </div>

        <div className={techStyling}>
          {isMobile ? (
            //@ts-ignore
            <ParallaxText baseVelocity={1}>
              {tech?.map((x, index) => (
                <img
                  src={x.image}
                  alt=""
                  key={index}
                  className={styles.tech_logo}
                />
              ))}
            </ParallaxText>
          ) : (
            tech?.map((x, index) => (
              <img
                src={x.image}
                alt=""
                key={index}
                className={styles.tech_logo}
                style={{ width: imageWidths[index] }}
              />
            ))
          )}
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProjectContainer;
