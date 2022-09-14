import "./Project.css";

const Project = ({ title, src, tech, direction }) => {
  return (
    <div className="project">
      <img src={src} alt="project" />
      <div className="shelf-linebreak"></div>
      <h1>{title}</h1>
      <p>{tech}</p>
      <a href={direction}>VISIT</a>
    </div>
  );
};

export default Project;
