import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { getPeople } from "../../services/getPeople";
import "./Worker.css";

const Worker = (props:{loaded: Function, loadIndex: number}) => {

    const [workerData, setWorkerData] = useState({picture:{large: ""}, name:{first: "", last:""}});

    const shouldSet = useRef(true);


    useEffect(() => {
        if(shouldSet.current){
            shouldSet.current = false;
            getPeople().then(response =>{       
            setWorkerData(response.results[0]);
            console.log(response.results[0]);
            props.loaded(props.loadIndex);
            })
        }
    }, [])

    return(
        <div className="worker-container">
            { workerData.picture.large!=="" && 
              <div className="worker-card"> 
                <img className="worker-image" src={workerData.picture.large} alt="worker"/>
                <h5>{workerData.name.first} {workerData.name.last}</h5>
                <p>Senior engineer</p>
              </div>
            }
        </div>
    );
}

export default Worker;