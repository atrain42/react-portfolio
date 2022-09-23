import classes from "./SocialLinks.module.css";

export default function SingleLink({ path, image }) {
  return (
    <a href={path}>
      <img src={image} alt="social media" className={classes.github} />
    </a>
  );
}
