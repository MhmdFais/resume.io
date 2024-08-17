import { useState } from "react";
import '../styles/PersonalInfo.css';

function PersonalInfo(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const submitHandle = (event) => {
        event.preventDefault();
        console.log(firstName, lastName, address);
    }

    return (
        <div className="personalInfoDiv InformationDiv">
            <form onSubmit={submitHandle}>
                <div className="firstName labelDiv">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
                </div>
                <div className="lastName labelDiv">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required/>
                </div>
                <div className="address labelDiv">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" value={address} onChange={handleAddressChange} required/>
                </div>
                <div className="buttonDiv InfoButton">
                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    )

}

export default PersonalInfo;