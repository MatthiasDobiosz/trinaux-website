import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { motion} from "framer-motion";

const Navbar = () => {


    const MotionLink = motion(Link);

    return(
        <nav className="navbar-container">
            <div className="title">
                Trinaux
                <img className="logo" src="trinaux-logo.png" alt="logo" width="30px" height="30px"></img>
            </div>
            <div className="links">
            <MotionLink 
                to="/"
                whileHover={{textDecoration: "underline", color:"orange"}}
                > 
                Home 
            </MotionLink>
            <MotionLink 
                to="/about"
                whileHover={{textDecoration: "underline", color:"orange"}}
                initial={{ y: 0}}
                > 
                About Us 
            </MotionLink>
            <MotionLink 
                to="/team"
                whileHover={{textDecoration: "underline", color:"orange"}}
                >           
                Team 
            </MotionLink>
            <MotionLink 
                to="/services"
                whileHover={{textDecoration: "underline", color:"orange"}}
                > 
                Services 
            </MotionLink>
            <MotionLink 
                to="/contact"
                whileHover={{textDecoration: "underline", color:"orange"}}
                > 
                Contact 
            </MotionLink>
            </div>
        </nav>
    );
};

export default Navbar;