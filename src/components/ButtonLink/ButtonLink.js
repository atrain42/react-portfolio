import classes from "./ButtonLink.module.css";

const ButtonLink = ({ path, title }) => {
  return <button className={classes.buttonLink}>{title}</button>;
};

export default ButtonLink;
