import { useState } from 'react';
import '../styles/common/NextButton.css'
import '../styles/ContactInfo.css'

function ContactInfo(){
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const submitHandle = (event) => {
        event.preventDefault();
        console.log(email, phone);
    }

    return(
        <div className="InformationDiv contactsInfoDiv">
            <form onSubmit={submitHandle}>
                <div className="contactInfoSet">
                    <div className="labelDiv">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} required/>
                    </div>
                    <div className="labelDiv">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required/>
                    </div>
                </div>
                <div className="buttonDiv InfoButton">
                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    )
}

export default ContactInfo;