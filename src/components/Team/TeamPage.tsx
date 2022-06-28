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

    const [loading, setLoading] = useState([false, false, false, false, false]);
    const [allLoaded, setAllLoaded] = useState(false);

    const loaded = (num : number) =>{
        if(num === loading.length-1){
            setLoading([true, true, true, true, true]);
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
                <h5 className="team-header"> Meet our team</h5>
                <h1 className="team-description"> Coming together is a beginning <br/> Keeping together is a progress <br/> Wroking together is success</h1>
                <Container className="team-container">
                    <Row className="card-row">
                        <Col><Worker loaded={loaded} loadIndex={0} title="CEO"/></Col>
                        <Col><Worker loaded={loaded} loadIndex={1} title="Senior frontend engineer"/></Col>
                        <Col><Worker loaded={loaded} loadIndex={2} title="Senior backend engineer"/></Col>                   
                        <Col><Worker loaded={loaded} loadIndex={3} title="Senior designer"/></Col>
                        <Col><Worker loaded={loaded} loadIndex={4} title="Senior HR"/></Col>   
                    </Row>              
                </Container>
            </div>
        </>
    )
}

export default TeamPage;