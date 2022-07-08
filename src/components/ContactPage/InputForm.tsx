import React from "react";
import "./InputForm.css";

const InputForm = () => {
    return(
        <div className="Input-Form">
            <h2 className="Input-header">Schreibe uns ganz einfach eine Mail <br/> oder ruf uns an!</h2>
            <form className="email-form">
                <div className="form-first"> 
                    <label htmlFor="fname">First Name:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label htmlFor="lname">Last Name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="text" id="email" name="email"/>
                </div>
                <div className="form-second">
                    <label htmlFor="etext">Ýour Text:</label><br/>
                    <input type="text" id="etext" name="etext"/>
                </div>
                <div className="form-third">                
                    <input className="submit-btn" type="submit" value="Send Email!"/>               
                </div>
            </form>
        </div>
    );
}

export default InputForm;