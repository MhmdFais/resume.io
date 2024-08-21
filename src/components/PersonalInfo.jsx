import { useState } from "react";
import '../styles/PersonalInfo.css';
import PropTypes from 'prop-types';

function PersonalInfo({ data, onSubmit }) {
    const [firstName, setFirstName] = useState(data.firstName || '');
    const [lastName, setLastName] = useState(data.lastName || '');
    const [address, setAddress] = useState(data.address || '');
    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ firstName, lastName, address });
        setIsSaved(true);
    };

    return (
        <div className="InformationDiv">
            <form onSubmit={handleSubmit}>
                <div className="personalInfoDiv">
                    <div className="firstName labelDiv personInputDiv">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="lastName labelDiv personInputDiv">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="address labelDiv personInputDiv">
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                </div>
                <div className="buttonDiv InfoButton">
                    <button type="submit">{isSaved ? "Saved" : "Save"}</button>
                </div>
            </form>
        </div>
    );
}

export default PersonalInfo;

PersonalInfo.propTypes = {
    data: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
}