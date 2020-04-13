import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component {
    constructor(){
        super()
        this.state = {
            online:false,
        };
    }
    render (){

    return (
        <div className="Contact">
            <img src={this.props.avatar} alt="avatar" className="avatar" />
            <div>
                <h4 className="name">{this.props.name}</h4>
                <div className="status" onClick={event => {
                    const newStatus = !this.state.online;
                    this.setState ({online: newStatus});
                }}>
                    <div className={this.state.online? "status-online" : "status-offline"}></div>
                    <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}
}




export default Contact;
Contact.propTypes = {
        image: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.string.isRequired,
  };