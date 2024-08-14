import { useState } from "react";
import '../styles/WelsomeScreen.css';

function WelcomeScreen(){

    const [startButton, setStartButton] = useState(false);

    return(
        <div className="welcomePageDiv">
            {startButton ? 
              <></>
              // redirec to dashboard
            :
                <div className="welcomeContentDiv">
                    <div className="welcomeTextDiv">
                        <p>Generate Your <span>CV</span> Here !!</p>
                    </div>
                    <div className="buttonDiv">
                        <button onClick={() => setStartButton(true)}>Start </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default WelcomeScreen;