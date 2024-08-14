import { useState } from "react";
import '../styles/HomeScreen.css';

function HomeScreen() {
    const [currentSection, setCurrentSection] = useState('Personal');

    const navigationElements = ['Personal', 'Education', 'Experience', 'Skills', 'Projects', 'Contact', 'View'];

    const renderContent = () => {
        switch (currentSection) {
            case 'Personal':
                return <h1>Personal Information Page</h1>;
            case 'Education':
                return <h1>Education Information Page</h1>;
            case 'Experience':
                return <h1>Experience Information Page</h1>;
            case 'Skills':
                return <h1>Skills Information Page</h1>;
            case 'Projects':
                return <h1>Projects Information Page</h1>;
            case 'Contact':
                return <h1>Contact Information Page</h1>;
            case 'View':
                return <h1>View CV Page</h1>;
            default:
                return <h1>Welcome to Your CV Builder!</h1>;
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