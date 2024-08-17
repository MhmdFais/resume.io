import { useState } from "react";

function EducationInfo(){
    const [schools, setSchools] = useState([{ id: 1, schoolName: '', education: '', startDate: '', endDate: '' }]);

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
        console.log(schools);
    };

    return (
        <div className="educationInfoDiv">
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
                            <div className="labelDiv">
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
                            <div className="labelDiv">
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
                <div className="submitDiv">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default EducationInfo;