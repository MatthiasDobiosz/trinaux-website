import React, {MutableRefObject, useRef} from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Projectmenu from "./Projectmenu";
// @ts-ignore
import ServiceCard from "./ServiceCard.tsx";
import "./ServicePage.css";

const ServicePage = () => {

    const projectsRef = useRef() as MutableRefObject<HTMLDivElement>;

    const scrollDown = () => {
        projectsRef.current.scrollIntoView();
    }

    return(
        <>
            <div className="services-container">
                <div className="service-image-container">
                    <Image src="services_code.jpg"/>
                    <h1 className="service_image_overlay"> Our Services : </h1>
                </div>
                <Container className="service-cards">
                    <Row className="row-1">
                        <Col><ServiceCard icon="fas fa-laptop" title="Webdesign" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                        <Col><ServiceCard icon="fas fa-cloud" title="Cloudservices" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "purple"/></Col>
                        <Col><ServiceCard icon="fas fa-mobile" title="Appdesign" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                    </Row>
                    <Row className="row-2">
                        <div className="projects-btn-container">
                            <button className="projects-btn" onClick={scrollDown}><span className="projects-btn-text">See our Projects</span></button>
                        </div>                  
                    </Row>
                    <Row className="row-3">
                        <Col><ServiceCard icon="fas fa-gamepad" title="Gaming" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                        <Col><ServiceCard icon="fas fa-grip-lines" title="SEO optimization" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                        <Col><ServiceCard icon="fas fa-robot" title="Machine Learning" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                    </Row>
                </Container>
            </div>
            <div className="projects-area" ref={projectsRef}>
                <Projectmenu/>
            </div>
        </>
    );
}

export default ServicePage;