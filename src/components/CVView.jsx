//import React from 'react';
import '../styles/CVView.css';
import PropTypes from 'prop-types';
import Email from '../assets/photos/email.png'
import Phone from '../assets/photos/call.png'
import Location from '../assets/photos/location.png'

function CVView({ cvData }) {
    const { personal, education, experience, skills, projects, contact } = cvData;

    return (
        <div className="cvViewDiv">
            <section className='header'>
                <div className="upperPart">
                    <h2>{personal.firstName} {personal.lastName}</h2>
                </div>
                <div className="lowerPart">
                    <img src={Email}>{contact.email}</img>
                    <img src={Phone}>{contact.phone}</img>
                    <img src={Location}>{personal.address}</img>
                </div>
            </section>
            <section className='education'>
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <div key={index}>
                        <h3>{edu.schoolName}</h3>
                        <p>{edu.education} ({edu.startDate} - {edu.endDate})</p>
                    </div>
                ))}
            </section>
            <section className='experience'>
                <h2>Experience</h2>
                {experience.map((exp, index) => (
                    <div key={index}>
                        <h3>{exp.companyName} - {exp.position}</h3>
                        <p>{exp.startDate} - {exp.endDate}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </section>
            <section  className='skills'>
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill.skill}</li>
                    ))}
                </ul>
            </section> 
            <section className='projects'>
                <h2>Projects</h2>
                {projects.map((proj, index) => (
                    <div key={index}>
                        <h3>{proj.projectName}</h3>
                        <p>{proj.projectDescription}</p>
                        <a href={proj.projectLink} target="_blank" rel="noopener noreferrer">Project Link</a>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default CVView;

CVView.propTypes = {
    cvData: PropTypes.object.isRequired
}
