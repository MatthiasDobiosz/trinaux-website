import React, { useState } from "react";
import "./AnimatedSlider.css";
import { motion, AnimatePresence } from "framer-motion"; 
import { wrap } from "popmotion";

const variants = {
    enter: (direction: number) => {
        return{
            x: direction > 0 ? 100 : -100,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return{
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        };
    }
}

const AnimatedSlider = (props:{pictures: string[], titles: string[]}) => {

    const [[page, direction], setPage] = useState([0,0]);

    const imageIndex = wrap(0, props.pictures.length, page);

    const incrementIndex = (newDirection:number) =>{
        setPage([page+newDirection, newDirection]);
    }

    return(
        <div className="slider-container">
            <motion.div className="prev"
            whileHover={{backgroundColor: "orange"}}
            onClick={() => incrementIndex(-1)}
            >
                <i className="fas fa-chevron-left"></i>
            </motion.div>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    className="slider-image"
                    src={props.pictures[imageIndex]}
                    variants={variants}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x:{type: "spring", stiffness:300, damping: 30},
                        opacity: { duration: 0.2}
                    }}
                />
            </AnimatePresence>
            <AnimatePresence>
                <motion.div 
                className="image-title"
                key={page}
                variants={variants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x:{type: "spring", stiffness:300, damping: 30},
                    opacity: { duration: 0.2}
                }}
                >
                    {props.titles[imageIndex]}
                </motion.div>
            </AnimatePresence>
            <motion.div className="next"
            whileHover={{fill: "orange", transition:{duration: 1}}}
            onClick={() => incrementIndex(1)}
            >
                <i className="fas fa-chevron-right">
            </i></motion.div>
        </div>
    )

}


export default AnimatedSlider;
