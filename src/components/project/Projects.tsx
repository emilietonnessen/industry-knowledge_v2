import projects from '../../server/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
    return (
        <div className="projects">
            {projects.map(project => (
                <ProjectCard 
                    key={project.id}
                    image={project.thumbnail}
                    title={project.name}
                    github={project.github} />
            ))}
        </div>
    );
}

export default Projects;