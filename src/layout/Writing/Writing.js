// import { useContext } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

import classes from "./Writing.module.css";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import writingImage from "../../images/writing.svg";
import SingleArticle from "../../components/Articles/SingleArticle";

import pacman from "../../images/pacman.svg";

const Writing = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.writingSection} ref={ref} id="writing">
      <div className="writingHeadingContainer">
        <img
          src={pacman}
          alt="pacman"
          id="pacman"
          style={{
            transform: isInView ? "none" : "translateX(-70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s linear 0.75s",
          }}
        />
        <div
          className="linebreak"
          style={{
            transform: isInView ? "none" : "translateX(-70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        ></div>
        <h1
          className="writing-title"
          style={{
            transform: isInView ? "none" : "translateX(-70px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Writing Shelf
        </h1>
      </div>
      <div className={classes.writingContainer}>
        <div className={classes.writingImageContainer}>
          <img src={writingImage} alt="writing" />
          <Link to="/writing">
            <ButtonLink title="View All" />
          </Link>
        </div>

        <div className={classes.articleContainer}>
          <SingleArticle data={data} />
        </div>
      </div>
    </section>
  );
};

export default Writing;
