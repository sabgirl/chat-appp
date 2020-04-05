import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


const Contact = ({ avatar, name, status }) => {
    return (
        <div className="Contact">
            <img src={avatar} alt="avatar" className="avatar" />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    {status ? <div className="status-online"></div> : <div className="status-offline"></div>}
                    {status ? <div className="status-text">Online</div> : <div className="status-text">Offline</div>}
                </div>
            </div>
        </div>
    )
};






export default Contact;
Contact.propTypes = {
        image: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.string.isRequired,
  };