import { useState } from "react";
import '../styles/HomeScreen.css';
import PersonalInfo from '../components/PersonalInfo';
import EducationInfo from '../components/EducationInfo';
import ExperienceInfo from '../components/ExperinceInfo';
import SkillInfo from '../components/SkillInfo';
import ProjectsInfo from '../components/ProjectsInfo';

function HomeScreen() {
    const [currentSection, setCurrentSection] = useState('Personal');

    const navigationElements = ['Personal', 'Education', 'Experience', 'Skills', 'Projects', 'Contact', 'View'];

    const renderContent = () => {
        switch (currentSection) {
            case 'Personal':
                return <PersonalInfo />;  // PERSONAL COMPONENT
            case 'Education':
                return <EducationInfo />; // EDUCATION COMPONENT
            case 'Experience':
                return <ExperienceInfo />; // EXPERIENCE COMPONENT
            case 'Skills':
                return <SkillInfo />; // SKILLS COMPONENT
            case 'Projects':
                return <ProjectsInfo />; // PROJECTS COMPONENT
            case 'Contact':
                return <></>; // CONTACT COMPONENT
            case 'View':
                return <></>; // VIEW COMPONENT
            // default:
            //     return <h1>Welcome to Your CV Builder!</h1>;
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