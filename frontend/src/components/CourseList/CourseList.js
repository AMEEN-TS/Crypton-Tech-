
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CourseList.scss";

function CourseList() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/course/list").then((response) => {
      console.log(response, "response");
      setDatas(response.data.data);
    });
  }, []);
  return (
    <>
      <div className="grid">
        <span>
          <strong>Course Name</strong>
        </span>
        <span>
          <strong>Start Date</strong>
        </span>
        <span>
          <strong>Lesson Completed</strong>
        </span>
        <span>
          <strong>Duration</strong>
        </span>
        {datas?.map((data) => {
          return (
            <>
              <span className="coursename">
                <div className="image">
                  <img src={data.image} alt={data.image} />
                </div>
                <div className="course-area">
                  <span>{data.courseName}</span>
                  <span className="lessons">{data.lessons} Lessons</span>
                </div>
              </span>
              <span>{data.startDate}</span>
              <span>{data.lessonCompleted}</span>
              <span>{data.duration}</span>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CourseList;