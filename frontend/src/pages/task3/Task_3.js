import React from "react";
import './style.scss';
import CourseList from "../../components/CourseList/CourseList";
export default function Task_3() {
  return (
    <div >
      <div>
        <div className="courses-head">
          <div>
            <h2>My Courses</h2>
          </div>
          <span>View All</span>
        </div>
        <div >
          <CourseList />
        </div>
      </div>
    </div>
  );
}