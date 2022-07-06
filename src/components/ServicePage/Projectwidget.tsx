import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useEffect, useRef, useState } from "react";
import "./Projectwidget.css";

interface projectSpecifics{
    title: string,
    idea: string,
    approach: string,
    results: string
}

interface Props{
    projectimage: string;
    projectName: string;
    projectId: number;
    toggleSelectedProject: Function;
    currentSelected: number;
    projectSpecifics: projectSpecifics;
}




const Projectwidget:FC<Props> = ({projectimage, projectName, projectId, toggleSelectedProject, currentSelected, projectSpecifics}) => {


    const isOpen = projectId === currentSelected;


    const styles = {
        container: {
            backgroundImage: `url(${projectimage})`
        }
    }

    const toggleProject = () => {
        toggleSelectedProject(projectId);
    }

    return(
            <AnimatePresence initial={false}>
                {
                    !isOpen &&
                    <div className="project-widget" style={styles.container}>
                    <span className="explore-project-btn" onClick={() => toggleProject()}>{projectName} <svg className="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg></span>
                    </div>
                }
                {
                    isOpen && 
                    <motion.div 
                    initial={{ height: "20%"}}
                    animate={{ height: "100%", transition: { duration: 2}}}
                    exit= {{ height: "20%", transition: {duration: 2}}}
                    className="project-widget-open" 
                    style={styles.container}>
                        <motion.div 
                        initial={{ x: 2000}}
                        animate={{ x: 0, transition: { delay: 2}}} 
                        exit={{x: -2000}}
                        className="close-btn" 
                        onClick={() => toggleProject()}
                        > 
                        <i className="fas fa-arrow-left" id="arrow-left"></i> Back
                        </motion.div>
                        <motion.div 
                        className="project-information-container"
                        initial={{ x: 2000}}
                        animate={{ x: 0, transition: { delay: 2}}}
                        exit={{x: -2000}}
                        >
                            <motion.h1 className="project-info-header">{projectSpecifics.title}</motion.h1>
                            <motion.div className = "project-list-item">
                                 <motion.div className="project-list-header">
                                    <motion.i className="fas fa-lightbulb projecticon"></motion.i>
                                    <motion.h2> The Idea</motion.h2>
                                 </motion.div>
                                 <motion.span>{projectSpecifics.idea}</motion.span>
                            </motion.div>
                            <motion.div className = "project-list-item">
                                 <motion.div className="project-list-header">
                                    <motion.i className="fas fa-lightbulb projecticon"></motion.i>
                                    <motion.h2> The Approach</motion.h2>
                                 </motion.div>
                                 <motion.span>{projectSpecifics.approach}</motion.span>
                            </motion.div>
                            <motion.div className = "project-list-item">
                                 <motion.div className="project-list-header">
                                    <motion.i className="fas fa-lightbulb projecticon"></motion.i>
                                    <motion.h2> Results </motion.h2>
                                 </motion.div>
                                 <motion.span>{projectSpecifics.results}</motion.span>
                            </motion.div>
                        </motion.div>
                        
                    </motion.div>   
                }
            </AnimatePresence>
    );
}

export default Projectwidget;