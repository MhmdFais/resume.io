import { useState } from 'react';
import '../styles/common/NextButton.css';
import '../styles/common/AddRemoveButton.css';
import '../styles/SkillsInfo.css';
import PropTypes from 'prop-types';

function SkillInfo({ data, onSubmit }) {
    const [skills, setSkills] = useState(data.length > 0 ? data : [{ id: 1, skill: '' }]);
    const [isSaved, setIsSaved] = useState(false);

    const handleChange = (id, event) => {
        const { name, value } = event.target;
        const updatedSkills = skills.map(skill =>
            skill.id === id ? { ...skill, [name]: value } : skill
        );
        setSkills(updatedSkills);
    };

    const addSkill = () => {
        const newSkill = { id: skills.length + 1, skill: '' };
        setSkills([...skills, newSkill]);
    };

    const removeSkill = (id) => {
        const updatedSkills = skills.filter(skill => skill.id !== id);
        setSkills(updatedSkills);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(skills);
        setIsSaved(true);
    };

    return (
        <div className='InformationDiv skillsInfoDiv'>
            <form onSubmit={handleSubmit}>
                {skills.map((skill, index) => (
                    <div key={skill.id} className="skillInfoSet">
                        <div className="labelDiv skillInputLabelDiv">
                            <label htmlFor={`skill-${skill.id}`}>Skill</label>
                            <input 
                                type="text"
                                id={`skill-${skill.id}`}
                                name="skill"
                                value={skill.skill}
                                onChange={(event) => handleChange(skill.id, event)}
                                required
                            />
                        </div>
                        <div className="addRemoveDiv">
                            {index > 0 && (
                                <button type="button" onClick={() => removeSkill(skill.id)}>Remove</button>
                            )}
                            {index === skills.length - 1 && (
                                <button type="button" onClick={addSkill}>Add</button>
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

export default SkillInfo;

SkillInfo.propTypes = {
    data: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}
