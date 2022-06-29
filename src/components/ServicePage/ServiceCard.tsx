import React from "react";  
import "./ServiceCard.css";

type Props = {
    icon: string,
    title: string,
    description: string,
    color: string
}

const ServiceCard = ({icon, title, description, color} : Props) => {
    return(
        <div className="service-card-container" >
            <div className="icon-container" style={{backgroundColor: color}}>
                <i className={`${icon}`}></i>
            </div>
            <h5 className="service-card-title">{title}</h5>
            <div className="service-card-description">{description}</div>
        </div>
    );
} 

export default ServiceCard;