import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/course1.jpeg";
import courseImg2 from "../../assets/course2.jpeg";
//import courseImg3 from "../../assets/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Lessons",
    //lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Quiz",
    //lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-cente flex-column">
              <div className="course__top__left text-center ">
                <h2>Learning pathways</h2>
                <p>
                Each pathway is crafted to guide you step-by-step, 
                ensuring a comprehensive understanding of essential topics, 
                from basic vocabulary to advanced grammar. <br/>
                Whether you’re a beginner or looking to polish your skills,
                 our Learning Pathways provide the roadmap to fluency.
                  Start your path today!
                </p>
              </div>

              
            </div>
          </Col>
          </Row>
          <Row className="justify-content-center">
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" className="mx-auto">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;