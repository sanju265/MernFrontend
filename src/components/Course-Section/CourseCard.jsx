import React from "react";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { imgUrl, title, rating } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details d-flex justify-content-between align-items-center">
        <h6 className="course__title mb-4">{title}</h6>

        <p className="rating d-flex align-items-center gap-1">
          <i className="ri-star-fill"></i> {rating}K
        </p>

        <p className="enroll d-flex align-items-center gap-1">
          {title === "Lessons" ? (
            <Link to="/lessons" className="btn btn-info">
              Get started
            </Link>
          ) : title === "Quiz" ? (
            <Link to="/quiz" className="btn btn-info">
              Get started
            </Link>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
