import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Our innovative approach ensures rapid progress in mastering the language through efficient, bite-sized lessons designed for busy schedules. ",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: " With our round-the-clock support, you're never alone on your journey. Experience the peace of mind that comes with knowing help is always just a click away!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: " Upon completing specified levels, you'll receive official certificates recognizing your achievements and proficiency.Enhances your resume and boost your confidence.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;