import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mit from "../../Assets/Projects/mit.png";
import template from "../../Assets/Projects/output.jpeg";
import todo from "../../Assets/Projects/Todo.png";
import temp from "../../Assets/Projects/temp.jpeg";
import food from "../../Assets/Projects/food.jpg";

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
              imgPath={todo}
              isBlog={false}
              title="To-Do List"
              description="A ToDo List app with CRUD functionality, enabling users to create, read, update, and delete tasks. It integrates seamlessly with an API for data management, offering an intuitive interface for efficient task tracking and organization."
              ghLink="https://github.com/yuvis13/TaskTodo.git"
              demoLink="https://task-todo-hazel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food-Bridge"
              description="A food bridge connects surplus food to those in need, minimizing waste and combating hunger. It efficiently redistributes excess food from producers and retailers to charities and communities, ensuring equitable access to nutritious meals for all."
              ghLink="https://github.com/yuvis13/EIE-Final.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={template}
              isBlog={false}
              title="Template-Flexbox"
              description="This template uses Flexbox in HTML and CSS to create a responsive, flexible layout. It features a header, main content area, and footer, ensuring seamless alignment and distribution of elements for various screen sizes, enhancing user experience and design consistency."
              ghLink="https://github.com/yuvis13/TEMPLATE.git"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mit}
              isBlog={false}
              title="Smart Shopping Cart"
              description=" Smart Shopping Cart, developed using MIT App Inventor, streamlines shopping with real-time item tracking, automatic billing, and personalized recommendations. It enhances user convenience by integrating QR code scanning, budget management, and shopping list features, revolutionizing the traditional shopping experience with innovative technology."
            />
              </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temp}
              isBlog={false}
              title="Automatic Temperature Detector"
              description="The Automatic Temperature Detector utilizes sensor technology to monitor and display real-time temperature data. Integrated with alarm functionality, it alerts users to abnormal temperature levels, enabling swift intervention. This device ensures safety and efficiency in various environments, from medical facilities to industrial settings."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
