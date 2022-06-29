import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { motion} from "framer-motion";

const Navbar = () => {


    const MotionLink = motion(Link);

    return(
        <nav className="navbar-container">
            <input type="checkbox" aria-label="Toggle menu" />
            <span></span>
            <span></span>
            <span></span>
            <div className="title">
                <h3>Trinaux</h3>
                <img className="logo" src="trinaux-logo.png" alt="logo" width="30px" height="30px"></img>
            </div>
            <div className="links">
                <ul>
                </ul>
                <ul>
                    <li>
                        <MotionLink 
                            to="/"
                            whileHover={{textDecoration: "underline", color:"orange"}}
                            initial={{ color: "rgb(14, 14, 14)"}}
                        > 
                          Home
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink 
                            to="/about"
                            whileHover={{textDecoration: "underline", color:"orange"}}
                            initial={{ color: "rgb(14, 14, 14)"}}
                        > 
                          About Us
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink 
                            to="/team"
                            whileHover={{textDecoration: "underline", color:"orange"}}
                            initial={{ color: "rgb(14, 14, 14)"}}
                        >           
                            Team 
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink 
                            to="/services"
                            whileHover={{textDecoration: "underline", color:"orange"}}
                            initial={{ color: "rgb(14, 14, 14)"}}
                        > 
                          Services
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink 
                            to="/contact"
                            whileHover={{textDecoration: "underline", color:"orange"}}
                            initial={{ color: "rgb(14, 14, 14)"}}
                        > 
                          Contact
                        </MotionLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;