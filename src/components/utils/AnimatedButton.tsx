import React from "react";
import "./AnimatedButton.css";
import {Link} from "react-router-dom";

interface btnSizes {
    size: "large" | "medium" | "small";
}

type Props = {
    link: string
}

const AnimatedButton = ({link}:Props) =>{
    return(
        <Link className="btn-link" to={link}><span className="btn-text">Click me</span></Link>
    );
};

export default AnimatedButton;