import React, { useEffect } from "react";
import { useState } from "react";
import './Homepage.css';
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
// @ts-ignore
import AnimatedSlider from "../AnimatedSlider/AnimatedSlider.tsx";

const descriptions = ["Designers", "Innovators", "Thinkers", "Trinaux"];
const colorArray = ["blue", "yellow", "green", "orange"];
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
            <div className="blank-container">
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
                </div>
                <AnimatedSlider className="slider" pictures={imageArray} titles={imageDescriptionsTitle}/>
            </div>
            

    );
};

export default Homepage;