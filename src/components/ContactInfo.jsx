import { useState } from 'react';
import '../styles/common/NextButton.css';
import '../styles/ContactInfo.css';
import PropTypes from 'prop-types';

function ContactInfo({ data, onSubmit }) {
    const [email, setEmail] = useState(data.email || '');
    const [phone, setPhone] = useState(data.phone || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email, phone });
    };

    return (
        <div className="InformationDiv contactsInfoDiv">
            <form onSubmit={handleSubmit}>
                <div className="contactInfoSet">
                    <div className="labelDiv">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="labelDiv">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                </div>
                <div className="buttonDiv InfoButton">
                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    );
}

export default ContactInfo;

ContactInfo.propTypes = {
    data: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
}
