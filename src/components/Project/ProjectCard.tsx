interface ProjectProps {
    image: any;
    title: any;
    github: any;
}

const ProjectCard: React.FC<ProjectProps> = ({image, title, github}) => {
    return (
        <a href={github} className="project" target="_blank" rel="noopener noreferrer" >
            <img src={image} alt="test" className="project__image"/>
            <h4 className="project__title">{title}</h4>
        </a>
    );
}

export default ProjectCard;