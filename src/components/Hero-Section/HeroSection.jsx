import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import heroImg from "../../assets/hero-img1.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Dive into interactive lessons, practice with native speakers,<br/> 
                and enjoy a personalized learning journey tailored just for you.<br />
                Join our community of enthusiastic learners and start your path<br/>
                to fluency today!
              </p>
              {/* Update the Link to navigate to the Lessons page */}
              <Link to="/lessons" className="btn btn-info">Get started</Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
