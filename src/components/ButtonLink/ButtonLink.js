import classes from "./ButtonLink.module.css";

const ButtonLink = ({ path, title }) => {
  return (
    <a href={path} className={classes.buttonLink}>
      {title}
    </a>
  );
};

export default ButtonLink;
