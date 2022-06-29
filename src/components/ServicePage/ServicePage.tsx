import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import ServiceCard from "./ServiceCard.tsx";
import "./ServicePage.css";

const ServicePage = () => {
    return(
        <Container className="service-cards">
            <Row>
                <Col><ServiceCard icon="fas fa-laptop" title="Webdesign" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                <Col><ServiceCard icon="fas fa-cloud" title="Cloudservices" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "purple"/></Col>
                <Col><ServiceCard icon="fas fa-mobile" title="Appdesign" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
            </Row>
            <Row>
                <Col><ServiceCard icon="fas fa-gamepad" title="Gaming" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                <Col><ServiceCard icon="fas fa-grip-lines" title="SEO optimization" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
                <Col><ServiceCard icon="fas fa-robot" title="Machine Learning" description="We create beautiful and responsive Websites. For your company, your shop, or even just for you." color = "lightblue"/></Col>
            </Row>
        </Container>
    );
}

export default ServicePage;