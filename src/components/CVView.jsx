//import React from 'react';
//import '../styles/CVView.css';
import PropTypes from 'prop-types';

function CVView({ cvData }) {
    const { personal, education, experience, skills, projects, contact } = cvData;

    return (
        <div className="cvViewDiv">
            <h1>Curriculum Vitae</h1>
            <section>
                <h2>Personal Information</h2>
                <p>{personal.firstName} {personal.lastName}</p>
                <p>{personal.address}</p>
            </section>
            <section>
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <div key={index}>
                        <h3>{edu.schoolName}</h3>
                        <p>{edu.education} ({edu.startDate} - {edu.endDate})</p>
                    </div>
                ))}
            </section>
            <section>
                <h2>Experience</h2>
                {experience.map((exp, index) => (
                    <div key={index}>
                        <h3>{exp.companyName} - {exp.position}</h3>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill.skill}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Projects</h2>
                {projects.map((proj, index) => (
                    <div key={index}>
                        <h3>{proj.projectName}</h3>
                        <p>{proj.projectDescription}</p>
                        <a href={proj.projectLink} target="_blank" rel="noopener noreferrer">Project Link</a>
                    </div>
                ))}
            </section>
            <section>
                <h2>Contact Information</h2>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
            </section>
        </div>
    );
}

export default CVView;

CVView.propTypes = {
    cvData: PropTypes.object.isRequired
}
