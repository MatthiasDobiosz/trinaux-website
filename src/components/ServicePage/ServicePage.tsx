import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
// @ts-ignore
import ServiceCard from "./ServiceCard.tsx";
import "./ServicePage.css";

const ServicePage = () => {
    return(
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
                    <Col><ServiceCard icon="fas fa-gamepad" title="Gaming" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                    <Col><ServiceCard icon="fas fa-grip-lines" title="SEO optimization" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                    <Col><ServiceCard icon="fas fa-robot" title="Machine Learning" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default ServicePage;