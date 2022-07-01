import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { motion} from "framer-motion";
import { useState } from "react";


const Navbar = () => {


    const getLinkStyles = ({isActive} : any ) => {
        console.log(isActive)
        return{ color: "rgb(14, 14, 14)", 
            textDecoration: isActive?"underline":"none",
            textDecorationColor: isActive?"orange":"rgb(14,14,14)"
            };
    }

    return(
        <nav className="navbar-container">
            <svg className="svg-wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,149.3C672,181,768,203,864,197.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <input type="checkbox" aria-label="Toggle menu" />
            <span></span>
            <span></span>
            <span></span>
            <div className="title">
                    <Link to="/" style={{color: "black"}}>
                        <h1>Trinaux</h1>
                    </Link>
                    <img className="logo" src="trinaux-logo.png" alt="logo" width="30px" height="30px"></img>            
            </div>
            <div className="links">
                <ul>
                </ul>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={getLinkStyles}
                        > 
                          Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            style={getLinkStyles}
                        > 
                          About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/team"
                            style={getLinkStyles}
                        >           
                            Team 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/services"
                            style={getLinkStyles}
                        > 
                          Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            style={getLinkStyles}
                        > 
                          Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;