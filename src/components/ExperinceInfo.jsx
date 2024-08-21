import { useState } from "react";
import '../styles/common/NextButton.css';
import '../styles/common/AddRemoveButton.css';
import '../styles/ExperienceInfo.css';
import PropTypes from 'prop-types';

function ExperienceInfo({ data, onSubmit }) {
    const [experiences, setExperiences] = useState(data.length > 0 ? data : [{ id: 1, companyName: '', position: '', startDate: '', endDate: '', description: '' }]);

    const handleChange = (id, event) => {
        const { name, value } = event.target;
        const updatedExperiences = experiences.map(experience =>
            experience.id === id ? { ...experience, [name]: value } : experience
        );
        setExperiences(updatedExperiences);
    };

    const addExperience = () => {
        const newExperience = { id: experiences.length + 1, companyName: '', position: '', startDate: '', endDate: '', description: '' };
        setExperiences([...experiences, newExperience]);
    };

    const removeExperience = (id) => {
        const updatedExperiences = experiences.filter(experience => experience.id !== id);
        setExperiences(updatedExperiences);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(experiences);
    };

    return (
        <div className="experienceInfoDiv InformationDiv">
            <form onSubmit={handleSubmit}>
                {experiences.map((experience, index) => (
                    <div key={experience.id} className="experienceInfoSet">
                        <div className="upperPartDiv">
                            <div className="inputsDiv">
                                <div className="labelDiv">
                                    <label htmlFor={`companyName-${experience.id}`}>Company Name</label>
                                    <input
                                        type="text"
                                        id={`companyName-${experience.id}`}
                                        name="companyName"
                                        value={experience.companyName}
                                        onChange={(event) => handleChange(experience.id, event)}
                                        required
                                    />
                                </div>
                                <div className="labelDiv">
                                    <label htmlFor={`position-${experience.id}`}>Position</label>
                                    <input
                                        type="text"
                                        id={`position-${experience.id}`}
                                        name="position"
                                        value={experience.position}
                                        onChange={(event) => handleChange(experience.id, event)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="datesDiv">
                                <div className="labelDiv dateLabelDiv">
                                    <label htmlFor={`startDate-${experience.id}`}>Start Date</label>
                                    <input
                                        type="date"
                                        id={`startDate-${experience.id}`}
                                        name="startDate"
                                        value={experience.startDate}
                                        onChange={(event) => handleChange(experience.id, event)}
                                        required
                                    />
                                </div>
                                <div className="labelDiv dateLabelDiv">
                                    <label htmlFor={`endDate-${experience.id}`}>End Date</label>
                                    <input
                                        type="date"
                                        id={`endDate-${experience.id}`}
                                        name="endDate"
                                        value={experience.endDate}
                                        onChange={(event) => handleChange(experience.id, event)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lowerPartDiv">
                            <div className="descriptionDiv labelDiv">
                                <label htmlFor={`description-${experience.id}`}>Description</label>
                                <textarea
                                    id={`description-${experience.id}`}
                                    name="description"
                                    value={experience.description}
                                    onChange={(event) => handleChange(experience.id, event)}
                                />
                            </div>
                        </div>
                        <div className="addRemoveDiv">
                            {index > 0 && (
                                <button type="button" onClick={() => removeExperience(experience.id)}>Remove</button>
                            )}
                            {index === experiences.length - 1 && (
                                <button type="button" onClick={addExperience}>Add</button>
                            )}
                        </div>
                    </div>
                ))}
                <div className="submitDiv buttonDiv InfoButton">
                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    );
}

export default ExperienceInfo;

ExperienceInfo.propTypes = {
    data: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}
