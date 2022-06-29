import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                    <div className="image-split-btn">
                        <Link to={hasButton}><span>Click me</span></Link>
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