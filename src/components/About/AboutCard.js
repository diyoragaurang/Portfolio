import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gaurang Diyora </span>
            from <span className="purple"> Bhavnagar, Gujarat, India.</span>
            <br />
            Hello! I'm a passionate and enthusiastic IT graduate with a strong interest in front-end development and web technologies.
            <br/> 
            Recently, I completed a 3-month internship at Sparrow Softech, where I gained hands-on experience in real-world software development projects, improving my skills in HTML, CSS, JavaScript, and React.js.
 </p>
          <br/>
💡 Key Highlights:
          <ul>
            <li className="about-activity">
              <ImPointRight /> 💻 Strong foundation in web development
            </li>
            <li className="about-activity">
              <ImPointRight />🛠️ Hands-on internship experience with real-world projects
            </li>
            <li className="about-activity">
              <ImPointRight />🚀 Eager to learn new technologies and take on challenges
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gaurang</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
