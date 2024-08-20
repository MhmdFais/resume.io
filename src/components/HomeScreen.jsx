import { useState } from "react";
import '../styles/HomeScreen.css';
import PersonalInfo from '../components/PersonalInfo';
import EducationInfo from '../components/EducationInfo';
import ExperienceInfo from '../components/ExperinceInfo';
import SkillInfo from '../components/SkillInfo';
import ProjectsInfo from '../components/ProjectsInfo';
import ContactInfo from '../components/ContactInfo';
import WelcomeScreen from '../components/WelcomeScreen'
import CVView from '../components/CVView';

function HomeScreen() {
    const [currentSection, setCurrentSection] = useState('Personal');
    
    // Centralized state for storing form data
    const [cvData, setCvData] = useState({
        personal: {},
        education: [],
        experience: [],
        skills: [],
        projects: [],
        contact: {}
    });

    const navigationElements = ['Personal', 'Education', 'Experience', 'Skills', 'Projects', 'Contact', 'View'];

    const handleSectionSubmit = (sectionName, data) => {
        setCvData(prevState => ({
            ...prevState,
            [sectionName]: data
        }));
        const nextSectionIndex = navigationElements.indexOf(sectionName) + 1;
        if (nextSectionIndex < navigationElements.length) {
            setCurrentSection(navigationElements[nextSectionIndex]);
        }
    };

    const renderContent = () => {
        switch (currentSection) {
            case 'Personal':
                return <PersonalInfo data={cvData.personal} onSubmit={(data) => handleSectionSubmit('personal', data)} />;
            case 'Education':
                return <EducationInfo data={cvData.education} onSubmit={(data) => handleSectionSubmit('education', data)} />;
            case 'Experience':
                return <ExperienceInfo data={cvData.experience} onSubmit={(data) => handleSectionSubmit('experience', data)} />;
            case 'Skills':
                return <SkillInfo data={cvData.skills} onSubmit={(data) => handleSectionSubmit('skills', data)} />;
            case 'Projects':
                return <ProjectsInfo data={cvData.projects} onSubmit={(data) => handleSectionSubmit('projects', data)} />;
            case 'Contact':
                return <ContactInfo data={cvData.contact} onSubmit={(data) => handleSectionSubmit('contact', data)} />;
            case 'View':
                return <CVView cvData={cvData} />;
                //return <></>;
            default:
                return <WelcomeScreen />;
        }
    };

    return (
        <div className="homeScreenDiv">
            <nav className="navigationDiv">
                {navigationElements.map((element, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSection(element)}
                        className={currentSection === element ? 'activeNavItem' : ''}
                    >
                        {element}
                    </button>
                ))}
            </nav>

            <div className="contentDiv">
                {renderContent()}
            </div>
        </div>
    );
}

export default HomeScreen;
