import React from "react";
import { motion } from "framer-motion";
import "./LoadingPage.css";


const pathVariantsT = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(209, 8, 8, 0)"
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(209, 8, 8, 1)"
      }
}

const pathVariantsX = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(209, 105, 8, 0)"
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(209, 105, 8, 1)"
      }
}

const LoadingPage = () =>{
    return(
        <div className="Loading-container">
            <motion.svg
                className="T-svg" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 384 512"
                >
                <motion.path 
                variants={pathVariantsT}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 3, ease: "easeInOut" },
                    fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                }}
                d="M384 64.01c0 17.67-14.33 32-32 32h-128v352c0 17.67-14.33 31.99-32 31.99s-32-14.32-32-31.99v-352H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h320C369.7 32.01 384 46.34 384 64.01z"/>
            </motion.svg>
            <motion.svg
                className="x-svg" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 384 512"
                >
                <motion.path 
                variants={pathVariantsX}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 3, ease: "easeInOut" },
                    fill: { duration: 3, ease: [1, 0, 0.8, 1] }
                }}
                d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/>
            </motion.svg>
        
        </div>
    )
}

export default LoadingPage;