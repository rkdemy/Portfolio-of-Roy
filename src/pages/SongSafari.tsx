import React from "react";
import styles from "./styling/SongsSafari.module.css";
import LazyLoad from "react-lazyload";
import html from "../assets/songssafari/html.png";
import Optimizing from "../assets/songssafari/Optimizing.png";
import genres from "../assets/songssafari/genres.png";
import Cluster from "../assets/songssafari/Cluster.png";
import Identify from "../assets/songssafari/Identify.png";
import reduce from "../assets/songssafari/reduce.png";
import api from "../assets/songssafari/api.png";
import everynoise from "../assets/songssafari/everynoise.png";
import rstudio from "../assets/songssafari/rstudio.png";
import weka from "../assets/songssafari/weka.png";
import output from "../assets/songssafari/output.png";
import kmeans from "../assets/songssafari/kmeans.png";
import object from "../assets/songssafari/object.png";
import commongenre from "../assets/songssafari/commongenre.png";
import value from "../assets/songssafari/value.png";
import nearest from "../assets/songssafari/nearest.png";
import home from "../assets/portfolio_images/Disney/recommendedsongs23.png";
import inspiration from "../assets/songssafari/inspiration.png";
import firstdesign from "../assets/songssafari/firstdesign.png";
import seconddesign from "../assets/songssafari/seconddesign.png";
import thirddesign from "../assets/songssafari/thirddesign.png";
import VideoPlayer from "../component/VideoPlayer";

const SongSafari = () => {
  const mark = `hello`;
  return (
    <div className={styles.song}>
      <div>
        <h1>Song Safari - My Journey</h1>
        <p>
          With every side project I embarked on, I noticed a pattern—they
          weren't creations I'd genuinely utilize. Whether it was an Ecommerce
          website, a Netflix clone, or a Disney replica, they all served as
          learning experiences.
        </p>
        <p>
          I grew tired of crafting projects for the sake of it. I wanted to
          develop something personally meaningful, something I could actively
          engage with. Thus, Song Safari emerged—a project where I wasn't just
          the creator but also the user.
        </p>
        <p>
          Throughout its development, I found myself immersed in its features,
          discovering unique songs. This project fills me with immense pride,
          knowing that I've created something that I would personally use.
        </p>
        <LazyLoad once>
          <img src={home} alt="Home page of Song Safari" />
        </LazyLoad>
      </div>

      <div>
        <h1>The search for a genre proximity database</h1>
        <span>
          For my idea to work I needed a database that shows how genres relate.
          For example, recognizing that "rap" and "hip hop" are closely related,
          while "country music" isn't.
        </span>
        <p>
          After searching for such a database with no luck, I almost gave up on
          my idea. But then, by pure chance, a friend told me about a website
          called Everynoise. It turned out to be just what I needed. It provided
          a scatterplot where similar genres were placed close to eachother. I
          found the coordinates (left and top) of each genre in the devtools
          HTML.
        </p>
        <p>
          Then it hit me—I could use these coordinates from the HTML devtools to
          create my own cluster database.
        </p>
        <LazyLoad once>
          <img src={everynoise} alt="Website screenshot called everynoise" />
        </LazyLoad>
      </div>

      <div>
        <h1>Processing the html into a table</h1>
        <p>
          I converted the HTML into a text file and then filtered it to extract
          only the top, left, and genre name. Using regex, I managed to isolate
          these values and saved them into a new file named "output file".
        </p>
        <LazyLoad once>
          <img src={html} alt="screenshot of some code" />
        </LazyLoad>
        <LazyLoad once>
          <img src={output} alt="Output of the code" id={styles.slim} />
        </LazyLoad>
      </div>

      <div>
        <h1>Processing with R/Rstudio</h1>
        <p>
          Upon encountering over 6000 unique genres, I realized sorting them
          solely by their top and left coordinates would be challenging. How
          does one effectively sort data with two sorting parameters? ("The
          answer is Quad tree. But it didn't fit my usecase") It became evident
          that to efficiently utilize the Manhattan Distance for calculating the
          nearest genre, I needed to cluster the data. This would reduce the
          number of genres I need to loop through.
        </p>

        <p>
          Fortunately, I had prior experience with data analytics through a
          course using R and RStudio. So, I downloaded them and began to cluster
          my newly created output file using K-means clustering.
        </p>
        <LazyLoad once>
          <img src={rstudio} alt="Screenshot of Rstudio" />
        </LazyLoad>
      </div>

      <div>
        <h1>K-means? No X-means</h1>
        <p>
          However, a flaw emerged: K-means clustering necessitates a manual
          input for the number of clusters. With over 6000 genres, determining
          the optimal number of clusters became a challenge. I hunted for
          clustering methods that could do this automatically.
        </p>

        <p>
          During my search, I stumbled on X-means clustering, a method proposed
          by Dan Pelleg and Andrew Moore. However, the software I employed was
          Weka, developed by a team led by Professor Ian H. Witten. It was nice
          to also know it was developed by our friends from across the pond New
          Zealand.
        </p>
        <LazyLoad once>
          <img src={weka} alt="Screenshot of weka" />
        </LazyLoad>
      </div>

      <div>
        <h1>Did I say X-means? I meant K-means</h1>
        <p>
          X-means recommended me a cluster of 400. However, through some trial
          and error I went back to K-means and settled with 20 clusters being a
          good balance.
        </p>
        <LazyLoad once>
          <img
            src={kmeans}
            alt="Some output of genres and their positions and cluster number"
            id={styles.slim}
          />
        </LazyLoad>
      </div>

      <div>
        <h1>Optimizing Data for Efficient Searches</h1>
        <p>
          With the new data in hand, I realized that just using it as is
          wouldn't cut it performance-wise. Imagine if I needed to find the
          nearest genre to the inital genre like "pop" from a massive array
          every time. It'd be painfully slow. So, I split the data into two
          objects.
        </p>

        <p className={styles.tab}>
          I chose objects because JS in the backend will treat objects as hash
          maps meaning searches are speedier compared to looping through arrays.
        </p>
        <p>
          One object would use the genre as a key. So, when someone inputs
          "pop," I could quickly find the cluster number. The second object
          would have the cluster number as the key, containing all the genres
          associated to that cluster. This way, searching for details became
          much faster.
        </p>
        <LazyLoad once>
          <img src={Optimizing} alt="Some code" />
        </LazyLoad>
        <LazyLoad once>
          <img
            src={object}
            alt="Two images. One is a set of genres and their values. Another is cluster numbers and their associated genres"
          />
        </LazyLoad>
      </div>

      <div>
        <h1>Finding Playlists Genres</h1>
        <span>
          Next, I developed logic to extract the most common genres in the users
          playlist.
        </span>
        <p>
          I initially also collected "song features" like danceability and
          energy with the intention of recommending songs similar to the
          playlist's "vibes". However, I abandoned this approach due to its high
          demand on the Spotify API. To ensure accurate recommendations, it
          would've required requesting more songs than necessary requesting the
          songs features and only selecting the top 10 or 20 most similar songs.
        </p>

        <p>
          Ultimately, I believed this method was too wasteful and opted to sort
          songs based on their popularity, striking a balance between relevance
          and efficiency.
        </p>
        <LazyLoad once>
          <img src={genres} alt="Some code" />
        </LazyLoad>
        <LazyLoad once>
          <img
            src={commongenre}
            alt="Output of code shows commonly reoccuring genres"
            id={styles.slim}
          />
        </LazyLoad>
      </div>

      <div>
        <h1>Identify the Cluster</h1>
        <p>
          After identifying the most common genres from the user's playlist, I
          forwarded them to the server for further processing. With each genre,
          I queried the Genre Object to locate its corresponding cluster.
        </p>
        <LazyLoad once>
          <img src={Cluster} alt="some code" />
        </LazyLoad>
        <LazyLoad once>
          <img src={value} alt="Output code of the genre cluster" />
        </LazyLoad>
      </div>

      <div>
        <h1>Part 1: Identify nearest genre</h1>
        <p>
          Once I had the cluster, I searched for it within the Cluster Object to
          retrieve all the genres in the same cluster. I then obtained the
          coordinates of the initial input genre.
        </p>
        <LazyLoad once>
          <img src={Identify} alt="Some code" />
        </LazyLoad>
      </div>

      <div>
        <h1>Part 2: Identify nearest genre</h1>
        <p>
          Afterwards I map the contents of the object and calculate the distance
          of every genre to the initial coordinates. I then sort it by distance
          allowing the code to return the nth nearest genre.
        </p>
        <LazyLoad once>
          <img src={reduce} alt="Some code" />
        </LazyLoad>
        <LazyLoad once>
          <img
            src={nearest}
            alt="Output of the code with the initial genre and its nearest genre"
          />
        </LazyLoad>
      </div>

      <div>
        <h1>Spotify API for songs</h1>
        <p>
          Once I had all the new genres, I sent a request to the Spotify API,
          which returned songs to display in the Frontend.
        </p>
        <LazyLoad once>
          <img src={api} alt="Some code" />
        </LazyLoad>
      </div>

      <div>
        <h1>Design Inspiration</h1>
        <p>
          My design inspiration was designed by lazy kar for LazyInterface UI UX
          Team
        </p>
        <LazyLoad once>
          <img
            src={inspiration}
            alt="Website screenshot with vinyl"
            className={styles.songsafari}
          />
        </LazyLoad>
      </div>

      <div>
        <h1>I don't want to copy. Let me try neomorphism</h1>
        <p>
          My initial trial mirrored the design inspirations structure, while
          experimenting with neomorphic UI elements.
        </p>
        <LazyLoad once>
          <img
            src={firstdesign}
            alt="Website screenshot with neomorphism design"
            className={styles.songsafari}
          />
        </LazyLoad>
      </div>

      <div>
        <h1>From Neomorphism to Accessibility</h1>
        <p>
          However, I transitioned from a vinyl player with custom controls to
          utilizing Spotify's stock player due to API restrictions.
        </p>
        <p className={styles.tab}>
          I abandoned the neomorphic UI for accessibility concerns. This
          decision also prompted me to replace the scrollable songs container
          with a carousel, aiming to improve image visibility.
        </p>
        <p>
          Furthermore, I opted for a darker theme instead of a white background,
          as I often coded at night and being flash banged is not fun.
        </p>
        <LazyLoad once>
          <img
            src={seconddesign}
            alt="Website screenshot"
            className={styles.songsafari}
          />
        </LazyLoad>
      </div>

      <div>
        <h1>Carousel to Grid</h1>
        <p>
          I also explored alternative designs, such as arranging the songs
          section into a grid format where all songs would be visible at once
          side by side.
        </p>
        <p>
          However, the small images failed to emphasize any particular song,
          resulting in a lack of attention-grabbing elements. Additionally,
          their reduced size diminished overall visibility.
        </p>

        <p className={styles.tab}>
          But, I still liked being able to see many songs at once.
        </p>
        <LazyLoad once>
          <img
            src={thirddesign}
            alt="Website screenshot"
            className={styles.songsafari}
          />
        </LazyLoad>
      </div>

      <div>
        <h1>Final Design</h1>
        <p>
          So, I returned to the carousel UI, repositioning the songs and music
          player to maximize screen space and display a larger number of songs.
          Enlarging the images improved accessibility, while highlighting three
          songs had attention-grabbing elements. Moreover, reducing the opacity
          of other songs allowed users to view multiple songs simultaneously.
        </p>
        <LazyLoad once>
          <img
            src={home}
            alt="Website screenshot"
            className={styles.songsafari}
          />
        </LazyLoad>
        <LazyLoad once>
          <VideoPlayer
            width="100%"
            height="100%"
            id="v4dnabhbchjna6szlpvi"
            className={styles.iframe}
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default SongSafari;
