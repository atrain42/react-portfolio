import classes from "./ButtonLink.module.css";

const ButtonLink = ({ title }) => {
  return <button className={classes.buttonLink}>{title}</button>;
};

export default ButtonLink;
