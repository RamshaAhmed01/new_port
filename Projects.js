import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carrental from "../../Assets/Projects/carrental.png";
import todo from "../../Assets/Projects/todo.jpj";
import weather from "../../Assets/Projects/weather.png";
import chatify from "../../Assets/Projects/chatify.png";
import quiz from "../../Assets/Projects/Quiz.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TodoApp"
              description="No worries now just note it down for future assignments and birthdays"
              ghLink="https://github.com/RamshaAhmed01/achievement1.git"
              demoLink="https://serene-pony-c54a8b.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="Weather updates available here just one click away.Make sure to check it before planning any trip"
              ghLink="https://github.com/RamshaAhmed01/weather.git"
              demoLink="https://weatherforecast-mauve.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quizes For All"
              description="Quizes enhances our mind and allow us to check our IQ level.It motivates us to do more and more"
              ghLink="https://github.com/RamshaAhmed01/Quiz-App.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carrental}
              isBlog={false}
              title="Best Car Deals"
              description="Deals in luxury Cars for Travelling courier an much more"
              ghLink="https://github.com/shahana925/Mid-term-project/tree/master"
              demoLink="https://carrental-qhjovysaq-ramshaahmed01s-projects.vercel.app/home"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
