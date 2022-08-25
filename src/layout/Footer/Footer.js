import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <h1>Reach out</h1>
      <p>
        Feel free to reach out and contact me. I am always open to hearing about
        new job opportunities. Let's collaborate and build something cool.
      </p>
      <a href="mailto:maxheimer4211@gmail.com">contact me</a>
      <div className={classes.copyright}>
        <div className={classes.copyLine}></div>
        <h1>Created by: Austin Maxheimer | React</h1>
        <div className={classes.copyLine}></div>
      </div>
    </section>
  );
};

export default Footer;
