const ProjectText = ({ head, title, info, classStyle }) => {
  return (
    <div className={classStyle}>
      <h2 className="project-spotlight">{head}</h2>
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
};

export default ProjectText;
