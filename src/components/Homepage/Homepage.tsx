import React, { useEffect } from "react";
import { useState } from "react";
import './Homepage.css';
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
// @ts-ignore
import AnimatedSlider from "../AnimatedSlider/AnimatedSlider.tsx";

const descriptions = ["Designers", "Innovators", "Thinkers", "Trinaux"];
const colorArray = ["blue", "yellow", "rgb(226, 15, 191)", "orange"];
const imageArray = ["meeting.jpg", "ourteam.jpg", "advise.jpg"];
const imageDescriptionsTitle = ["Wir finden gemeinsam Lösungen", "Wir sind ein junges und motiviertes Team", "Lassen sie sich von uns Beraten"];

const variants = {
    enter: {
        y: -100,
        opacity: 0
    },
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1
    },
    exit: {
        y: 100,
        opacity: 0
    }
};

const Homepage = () => {

    const [currentIndex, setCurrentIndex]= useState(0);

    const page = wrap(0, descriptions.length, currentIndex);

    useEffect(() => {
        const tick = setInterval(() => {
            setCurrentIndex((currentIndex) => currentIndex+1);
        }, 2000);

        return () => {
            clearInterval(tick);
        }
    },[])
    

    return(
            <div className="Homepage-container"> 
            <svg style={{position: "absolute", top:"60%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,32L48,32C96,32,192,32,288,53.3C384,75,480,117,576,149.3C672,181,768,203,864,197.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <AnimatedSlider className="slider" pictures={imageArray} titles={imageDescriptionsTitle}/>
                <div className="Home-text">
                    <h1 className="explore-title">The Nr. 1 Software-Provider</h1>
                    <p className="explore-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                    <button className="explore-btn">Button</button>
                </div>
            </div>
            

    );
};

export default Homepage;

/*
<div className="title-container">
                    <h1 className="home-title"><div className="title-start">We are</div>
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <motion.div 
                        key={currentIndex} 
                        style={{color: colorArray[page]}}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            y:{type: "spring", stiffness:300, damping: 30},
                            opacity: { duration: 0.2}
                        }}
                        >
                            {descriptions[page]}
                        </motion.div>
                    </AnimatePresence>
                    </h1>
                </div>*/