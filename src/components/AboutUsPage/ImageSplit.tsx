import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import AnimatedButton from "../utils/AnimatedButton";
import "./ImageSplit.css";

type Props = {
    title: string,
    description: string,
    picture: string,
    reverse: boolean,
    hasButton?: string
}

const ImageSplit = ({title, description, picture, reverse, hasButton} : Props) => {

    return(
        <div className={`image-split-container ${reverse?"reverse":""}`}>
            <div className="text-container">
                <h1 className="split-text-title"> { title }</h1>
                <div className="split-text-description"> { description } </div>
                {hasButton !== undefined &&
                    <div className="split-btn-container">
                        <AnimatedButton  link={hasButton}/>
                    </div>
                }
            </div>
            <div className="image-Container">
                <Image className="split-Image" src={picture} alt={`${title}-split`}/>
            </div>
        </div>
    );
}

export default ImageSplit;