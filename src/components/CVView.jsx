import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import '../styles/CVView.css';
import PropTypes from 'prop-types';
import Email from '../assets/photos/email.png'
import Phone from '../assets/photos/call.png'
import Location from '../assets/photos/location.png'

function CVView({ cvData }) {
    const { personal, education, experience, skills, projects, contact } = cvData;

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "My_CV",  
    });

    return (
        <div className='CVViewInfo' >
            <div className="buttonDiv downloadButton">
                <button onClick={handlePrint}>Download as PDF</button>
            </div>
            <div className="cvViewDiv">
                <section className='header'>
                    <div className="upperPart">
                        <h2>{personal.firstName} {personal.lastName}</h2>
                    </div>
                    <div className="lowerPart">
                            <div className="contact-item">
                                <img src={Email} alt="Email" />
                                <p>{contact.email}</p>
                            </div>
                            <div className="contact-item">
                                <img src={Phone} alt="Phone" />
                                <p>{contact.phone}</p>
                            </div>
                            <div className="contact-item">
                                <img src={Location} alt="Location" />
                                <p>{personal.address}</p>
                            </div>
                    </div>
                </section>
                <section className='education'>
                    <h2>Education</h2>
                    {education.map((edu, index) => (
                        <div key={index} className='eduContent'>
                            <p>{edu.startDate} - {edu.endDate}</p>
                            <div className="school-info">
                                <h3>{edu.schoolName}</h3>
                                <p>{edu.education} </p>
                            </div>
                        </div>
                    ))}
                </section>
                <section className='experience'>
                    <h2>Experience</h2>
                    {experience.map((exp, index) => (
                        <div key={index} className='experienceContent'>
                            <p>{exp.startDate} - {exp.endDate}</p>
                            <div className="exp-info">
                                <h3>{exp.companyName}</h3>
                                <h4>{exp.position}</h4>
                                <p>{exp.description}</p>
                            </div>
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
                        <div key={index} className='projectContent'>
                            <h3>{proj.projectName}</h3>
                            <div className="proj-info">
                                <p>{proj.projectDescription}</p>
                                <a href={proj.projectLink} target="_blank" rel="noopener noreferrer">Project Link</a>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default CVView;

CVView.propTypes = {
    cvData: PropTypes.object.isRequired
}
