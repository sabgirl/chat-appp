import React from 'react';
import './Contact.css';

const Contact = ({ image, name, online }) => {
    return (
        <div className="Contact">
            <img src={image} className="avatar" />
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <div className={`status-${online? 'online' : 'offline'}`}></div>
                    <h5 className="status-text">{online? 'online' : 'offline'}</h5>
                </div>
            </div>
        </div>
    )
};








export default Contact;