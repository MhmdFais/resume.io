import { useState } from "react";
import '../styles/EducationInfo.css';
import '../styles/common/NextButton.css';
import '../styles/common/AddRemoveButton.css';
import PropTypes from 'prop-types';

function EducationInfo({ data, onSubmit }) {
    const [schools, setSchools] = useState(data.length > 0 ? data : [{ id: 1, schoolName: '', education: '', startDate: '', endDate: '' }]);
    const [isSaved, setIsSaved] = useState(false);

    const handleChange = (id, event) => {
        const { name, value } = event.target;
        const updatedSchools = schools.map(school =>
            school.id === id ? { ...school, [name]: value } : school
        );
        setSchools(updatedSchools);
    };

    const addSchool = () => {
        const newSchool = { id: schools.length + 1, schoolName: '', education: '', startDate: '', endDate: '' };
        setSchools([...schools, newSchool]);
    };

    const removeSchool = (id) => {
        const updatedSchools = schools.filter(school => school.id !== id);
        setSchools(updatedSchools);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(schools);
        setIsSaved(true)
    };

    return (
        <div className="educationInfoDiv InformationDiv">
            <form onSubmit={handleSubmit}>
                {schools.map((school, index) => (
                    <div key={school.id} className="schoolInfoSet">
                        <div className="inputsDiv">
                            <div className="labelDiv">
                                <label htmlFor={`schoolName-${school.id}`}>School Name</label>
                                <input
                                    type="text"
                                    id={`schoolName-${school.id}`}
                                    name="schoolName"
                                    value={school.schoolName}
                                    onChange={(event) => handleChange(school.id, event)}
                                    required
                                />
                            </div>
                            <div className="labelDiv">
                                <label htmlFor={`education-${school.id}`}>Education</label>
                                <input
                                    type="text"
                                    id={`education-${school.id}`}
                                    name="education"
                                    value={school.education}
                                    onChange={(event) => handleChange(school.id, event)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="datesDiv">
                            <div className="labelDiv dateLabelDiv">
                                <label htmlFor={`startDate-${school.id}`}>Start Date</label>
                                <input
                                    type="date"
                                    id={`startDate-${school.id}`}
                                    name="startDate"
                                    value={school.startDate}
                                    onChange={(event) => handleChange(school.id, event)}
                                    required
                                />
                            </div>
                            <div className="labelDiv dateLabelDiv">
                                <label htmlFor={`endDate-${school.id}`}>End Date</label>
                                <input
                                    type="date"
                                    id={`endDate-${school.id}`}
                                    name="endDate"
                                    value={school.endDate}
                                    onChange={(event) => handleChange(school.id, event)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="addRemoveDiv">
                            {index > 0 && (
                                <button type="button" onClick={() => removeSchool(school.id)}>Remove</button>
                            )}
                            {index === schools.length - 1 && (
                                <button type="button" onClick={addSchool}>Add</button>
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

export default EducationInfo;

EducationInfo.propTypes = {
    data: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}
