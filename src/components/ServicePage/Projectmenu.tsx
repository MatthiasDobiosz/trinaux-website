import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projectmenu.css";
import Projectwidget from "./Projectwidget";

const Projectmenu = () => {

    const [selectedProject, setSelectedProject] = useState(0);

    const toggleSelectedProject = (projectid : number) => {
        setSelectedProject(selectedProject===projectid?0:projectid);
    }

    return(
        <Container className="project-menu">
            <Row className={`${selectedProject===0?"closed":(selectedProject===1?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="/example-project-img.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={1} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    />
                </Col>
            </Row>
            <Row className={`${selectedProject===0?"closed":(selectedProject===2?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="example-project-img.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={2} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    />
                </Col>
            </Row>
            <Row className={`${selectedProject===0?"closed":(selectedProject===3?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="example-project-img.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={3} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    />
                </Col>
            </Row>
            <Row className={`${selectedProject===0?"closed":(selectedProject===4?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="example-project-img.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={4} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    />
                </Col>
            </Row>
            <Row className={`${selectedProject===0?"closed":(selectedProject===5?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="example-project-img.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={5} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    />
                </Col>
            </Row>
        </Container>

    );
}

export default Projectmenu;