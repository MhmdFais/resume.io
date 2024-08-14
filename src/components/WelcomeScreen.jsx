import { useState } from "react";

function WelcomeScreen(){

    const [startButton, setStartButton] = useState(false);

    return(
        <div className="welcomePageDiv">
            {startButton ? 
              <></>
              // redirec to dashboard
            :
                <>
                    <div className="welcomeTextDiv">
                        <p>Generate Your CV Here !!</p>
                    </div>
                    <div className="buttonDiv">
                        <button onClick={() => setStartButton(true)}>Start</button>
                    </div>
                </>
            }
        </div>
    )
}

export default WelcomeScreen;