import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yuvasri </span>
            from <span className="purple"> Tamilnadu, India.</span>
            <br />
            I am a creative and enthusiastic Designer! I am passionate about designing products by implementing all my creative and innovative design skills that provide solution to user needs. I am having well versed knowledge and experience in User research, Wireframing, Prototyping, User testing etc. I can deliver a highly interactive and appealing product with my creative skills.
            <br />
            <br />
            Apart from designing and coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Internet Surfing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
