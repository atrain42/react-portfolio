const ProjectText = ({ head, title, info, classStyle, destination, id }) => {
  return (
    <div className={classStyle}>
      <h2 className="project-spotlight">{head}</h2>
      <h3>{title}</h3>
      <p>{info}</p>
      <a href={destination} id={id}>
        vist site &rarr;
      </a>
    </div>
  );
};

export default ProjectText;
