import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import LoadingPage from "../LoadingPage.tsx";
import "./TeamPage.css";
// @ts-ignore
import Worker from "./Worker.tsx";

const TeamPage = () => {

    const [loading, setLoading] = useState([false, false, false, false, false, false]);
    const [allLoaded, setAllLoaded] = useState(false);

    const loaded = (num : number) =>{
        if(num === loading.length-1){
            setLoading([true, true, true, true, true, true]);
        } 
    }

    useEffect(() => {
        if(loading.every(item => item === true)){
            setTimeout(() => {
                setAllLoaded(true);
            },1000)
        }
    }, [loading]);


    return(
        <>
            {!allLoaded && 
                <LoadingPage/>
            }
            <div className={`workers ${allLoaded?"active":"inactive"}`}>
                <h1 className="team-header"> Get to know our Team!</h1>
                <h3 className="team-description"> We are a unique mix of frontend and backend experts</h3>
                <Container className="team-container">
                    <Worker loaded={loaded} loadIndex={0}/>
                    <Worker loaded={loaded} loadIndex={1}/>
                    <Worker loaded={loaded} loadIndex={2}/>                   
                    <Worker loaded={loaded} loadIndex={3}/>
                    <Worker loaded={loaded} loadIndex={4}/>
                    <Worker loaded={loaded} loadIndex={5}/>                  
                </Container>
            </div>
        </>
    )
}

export default TeamPage;