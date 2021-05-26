import { useContext } from "react";
import SelectedProjectsContext from "../../context/SelectedProjectContext";
import Modal from "../UI/Modal";


const Project: React.FC = () => {
    const [selectedProject, ] = useContext(SelectedProjectsContext);

    console.log("[Selected Project]", selectedProject);

    


    return (
        <Modal link="#portfolio" id="project" classes="project-modal" >
            {selectedProject ? 
            
            <div className="project">
                <div className="project-content">
                    <h3 className="headline headline--secondary">{selectedProject.name}</h3>
                    <p className="paragraph">{selectedProject.description}</p>
                </div>
                <div className="project-graphic">
                    <img src={selectedProject.thumbnail} alt={selectedProject.name} className="project-graphic__image" />
                    <div className="project-graphic__buttons">
                        <a href={selectedProject.link} className="btn btn--primary btn--md">Live Demo</a>
                        <a href={selectedProject.github} className="btn btn--github btn--md">GitHub</a>
                    </div>
                </div>
            </div>

            : null}
            
        </Modal>
    );
}

export default Project;