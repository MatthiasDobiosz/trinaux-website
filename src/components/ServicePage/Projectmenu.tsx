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
        <Container className="project-menu" style={{minWidth: "90vw"}}>
            <Row className={`${selectedProject===0?"closed":(selectedProject===1?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="/example-project-img.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={1} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    projectSpecifics={{title: "Projekt Enterprise", idea:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", approach:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", results:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}}
                    />
                </Col>
            </Row>
            <Row className={`${selectedProject===0?"closed":(selectedProject===2?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="/project-2.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={2} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    projectSpecifics={{title: "Projekt Enterprise", idea:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", approach:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", results:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}
                    />
                </Col>
            </Row>
            <Row className={`${selectedProject===0?"closed":(selectedProject===3?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="/project-3.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={3} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    projectSpecifics={{title: "Projekt Enterprise", idea:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", approach:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", results:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}
                    />
                </Col>
            </Row>
            <Row className={`${selectedProject===0?"closed":(selectedProject===4?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="/project-4.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={4} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    projectSpecifics={{title: "Projekt Enterprise", idea:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", approach:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", results:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}
                    />
                </Col>
            </Row>
            <Row className={`${selectedProject===0?"closed":(selectedProject===5?"open":"inactive")}`}>
                <Col>
                    <Projectwidget 
                    projectimage="/project-5.jpg" 
                    projectName="Beispielprojekt" 
                    projectId={5} 
                    toggleSelectedProject={toggleSelectedProject}
                    currentSelected={selectedProject}
                    projectSpecifics={{title: "Project nosuprise", idea:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", approach:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", results:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}
                    />
                </Col>
            </Row>
        </Container>

    );
}

export default Projectmenu;