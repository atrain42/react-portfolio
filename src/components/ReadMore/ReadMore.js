import classes from "./ReadMore.module.css";

const ReadMore = () => {
  return (
    <button to="/home" className={classes.readMore}>
      Read More &rarr;
    </button>
  );
};

export default ReadMore;
