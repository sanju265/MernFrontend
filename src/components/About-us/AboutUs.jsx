import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              Founded by a team of language enthusiasts and education experts, 
              our mission is to help you unlock the power of Spanish and connect 
              with the rich cultures and vibrant communities that speak it. 
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={75} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Registered Users</p>
                    
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={45} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Daily Visitors</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={200} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Lessons Completed</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={150} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;