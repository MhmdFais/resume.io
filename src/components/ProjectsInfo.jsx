import { useState } from 'react';
import '../styles/common/NextButton.css';
import '../styles/common/AddRemoveButton.css';
import '../styles/ProjectsInfo.css';
import PropTypes from 'prop-types';

function ProjectsInfo({ data, onSubmit }) {
    const [projects, setProjects] = useState(data.length > 0 ? data : [{ id: 1, projectName: '', projectDescription: '', projectLink: '' }]);
    const [isSaved, setIsSaved] = useState(false);

    const handleChange = (id, event) => {
        const { name, value } = event.target;
        const updatedProjects = projects.map(project =>
            project.id === id ? { ...project, [name]: value } : project
        );
        setProjects(updatedProjects);
    };

    const addProject = () => {
        const newProject = { id: projects.length + 1, projectName: '', projectDescription: '', projectLink: '' };
        setProjects([...projects, newProject]);
    };

    const removeProject = (id) => {
        const updatedProjects = projects.filter(project => project.id !== id);
        setProjects(updatedProjects);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(projects);
        setIsSaved(true)
    };

    return (
        <div className="InformationDiv projectsInfoDiv">
            <form onSubmit={handleSubmit}>
                {projects.map((project, index) => (
                    <div key={project.id} className="projectsInfoSet">
                        <div className="labelDiv">
                            <label htmlFor={`projectName-${project.id}`}>Name</label>
                            <input 
                                type="text"
                                id={`projectName-${project.id}`}
                                name="projectName"
                                value={project.projectName}
                                onChange={(event) => handleChange(project.id, event)}
                                required
                            />
                        </div>
                        <div className="labelDiv">
                            <label htmlFor={`projectDescription-${project.id}`}>Description</label>
                            <textarea 
                                id={`projectDescription-${project.id}`}
                                name="projectDescription"
                                value={project.projectDescription}
                                onChange={(event) => handleChange(project.id, event)}    
                            />
                        </div>
                        <div className="labelDiv">
                            <label htmlFor={`projectLink-${project.id}`}>Link</label>
                            <input 
                                type="text"
                                id={`projectLink-${project.id}`}
                                name="projectLink"
                                value={project.projectLink}
                                onChange={(event) => handleChange(project.id, event)}
                            />
                        </div>
                        <div className="addRemoveDiv">
                            {index > 0 && (
                                <button type="button" onClick={() => removeProject(project.id)}>Remove</button>
                            )}
                            {index === projects.length - 1 && (
                                <button type="button" onClick={addProject}>Add</button>
                            )}
                        </div>
                    </div>
                ))}
                <div className="submitDiv buttonDiv InfoButton">
                    <button type="submit">{isSaved ? "Saved" : "Save"}</button>
                </div>
            </form>
        </div>
    );
}

export default ProjectsInfo;

ProjectsInfo.propTypes = {
    data: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}
