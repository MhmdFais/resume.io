import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/WelsomeScreen.css';

function WelcomeScreen() {
    const [startButton, setStartButton] = useState(false);
    const navigate = useNavigate();

    const handleStartClick = () => {
        setStartButton(true);
        navigate('/home');
    };

    return (
        <div className="welcomePageDiv">
            {startButton ? 
              null 
            :
                <div className="welcomeContentDiv">
                    <div className="welcomeTextDiv">
                        <p>Generate Your <span>CV</span> Here !!</p>
                    </div>
                    <div className="buttonDiv">
                        <button onClick={handleStartClick}>Start</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default WelcomeScreen;
