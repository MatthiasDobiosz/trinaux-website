import React from "react";
import ContactMap from "./ContactMap";
import "./ContactPage.css";

const ContactPage = () => {
    return(
        <div className="contact-page-container">  
            <div className="map-container">
                <ContactMap />
            </div>            
            <div className="inputForm-container">
            </div>
       </div>
        
    );
}

export default ContactPage;