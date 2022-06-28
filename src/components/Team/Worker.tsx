import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { getPeople } from "../../services/getPeople";
import { motion } from "framer-motion";
import "./Worker.css";


const setEmail = (email:string) : string => {
    return email.replace("@example", "@trinaux");
}

const cardVariants = {
    hidden: (rotation: number) => {
        return{
            rotateY: rotation
        };
    },
    animate: (rotation: number) => {
        return{
            rotateY: [rotation, 360],
            transition: {duration:1}
        };
    },
    exit: {
        rotateY: 360
    }
}

const Worker = (props:{loaded: Function, loadIndex: number, title : string}) => {

    const [workerData, setWorkerData] = useState({picture:{large: ""}, name:{first: "", last:""}, email: ""});
    const [side, setSide] = useState("profile");
    const [rotation, setRotation] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [frontSide, setFrontSide] = useState(true);
    const shouldSet = useRef(true);


    useEffect(() => {
        if(shouldSet.current){
            shouldSet.current = false;
            getPeople().then(response =>{       
            setWorkerData(response.results[0]);
            props.loaded(props.loadIndex);
            })
        }
    }, [])

    const clickHandlerProfile = () =>{
        setRotation(180);

        setTimeout(() => {
            setSide(side==="About"?"profile":"About");
        }, 500)
        
        setTimeout(() => {
            setRotation(360)
        }, 1000)
    }

    const clickHandlerAbout = () => {
        setRotation(180);

        setTimeout(() => {
            setSide(side === "profile"?"About":"profile");
        }, 500)
        setTimeout(() => {
            setRotation(360)
        }, 1000)
    }

    return(
        <div className="worker-container">
            { workerData.picture.large!=="" && 
              <motion.div 
              custom={rotation}
              className="worker-card"
              variants={cardVariants}
              initial="hidden"
              animate="animate"
              exit="exit"
              > 
                <span className="card-links">
                    <span 
                    className={side==="profile"?"selected":""} 
                    onClick={() => clickHandlerProfile()}
                    >
                        Profile
                    </span>
                    <span 
                    className={side==="About"?"selected":""}
                    onClick={() => clickHandlerAbout()}
                    >
                        About
                    </span>
                </span>
                {
                    side === "profile"
                    ?
                    <> 
                    <div className="card-top">
                        <img className="worker-image" src={workerData.picture.large} alt="worker"/>
                        <h5>{workerData.name.first} {workerData.name.last}</h5>
                    </div>
                    <span>{props.title}</span>
                    <span className="email">{setEmail(workerData.email)}</span>
                    </> 
                    :[  
                        <>
                            <h2 style={{color:"white", marginTop: "20px"}}>{workerData.name.first}</h2>
                            <p style={{color: "black", marginTop:"50px"}}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </>
                    ]
                }
              </motion.div>
            }
        </div>
    );
}

export default Worker;