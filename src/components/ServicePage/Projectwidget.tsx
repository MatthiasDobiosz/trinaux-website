import { AnimatePresence, motion } from "framer-motion";
import React, { FC } from "react";
import "./Projectwidget.css";

interface Props{
    projectimage: string;
    projectName: string;
    projectId: number;
    toggleSelectedProject: Function;
    currentSelected: number;
}



const Projectwidget:FC<Props> = ({projectimage, projectName, projectId, toggleSelectedProject, currentSelected}) => {

    const isOpen = projectId === currentSelected;

    const styles = {
        container: {
            backgroundImage: `url(${projectimage})`,
        }
    }

    return(
            <AnimatePresence initial={false}>
                {
                    !isOpen &&
                    <div className="project-widget" style={styles.container}>
                    <span onClick={() => toggleSelectedProject(projectId)}>{projectName}</span>
                    </div>
                }
                {
                    isOpen && 
                    <motion.div 
                    initial={{y: -50}}
                    animate={{y: 0}}
                    className="project-widget" 
                    style={styles.container}>
                        <motion.span 
                        onClick={() => toggleSelectedProject(projectId)}
                        >
                            {projectName}
                        </motion.span>
                        <motion.div>
                                test
                        </motion.div>
                    </motion.div>   
                }
            </AnimatePresence>
    );
}

export default Projectwidget;