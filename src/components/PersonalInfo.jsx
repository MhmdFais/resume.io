import { useState } from "react";

function PersonalInfo(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [jobTiltle, setJobTitle] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handleJobTitleChange = (event) => {
        setJobTitle(event.target.value);
    }

    const submitHandle = (event) => {
        event.preventDefault();
        console.log(firstName, lastName, email, phone, address, jobTiltle);
    }

    return (
        <div className="personalInfoDiv">
            <form onSubmit={submitHandle}>
                <div className="firstName">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required />
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required/>
                </div>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} required/>
                </div>
                <div className="jobTitle">
                    <label htmlFor="jobTitle">Job Title:</label>
                    <input type="text" id="jobTitle" value={jobTiltle} onChange={handleJobTitleChange} required/>
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required/>
                </div>
                <div className="address">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" value={address} onChange={handleAddressChange} required/>
                </div>
            </form>
        </div>
    )

}

export default PersonalInfo;