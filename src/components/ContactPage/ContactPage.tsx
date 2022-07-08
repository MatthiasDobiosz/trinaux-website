import React from "react";
import ContactMap from "./ContactMap";
import "./ContactPage.css";
import InputForm from "./InputForm";

const ContactPage = () => {
    return(
        <div>
            <h1 className="contact-page-header"> Contact Us! </h1>
            <div className="contact-page-container">  
                <div className="map-container">
                    <ContactMap />
                </div>            
                <div className="inputForm-container">
                    <InputForm/>
                </div>
        </div>
       </div>
        
    );
}

export default ContactPage;