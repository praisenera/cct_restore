import React from "react";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <>
      <Container>
        <div className="about col-lg-12 ">
          <div className="row p-4">
            <h1>
              <i>About the School</i>
            </h1>
            <hr style={{ color: "white" }} />
            <div className="col-lg-6">
              <p>
                Christian College of Tanauan (CCT) is a private, non-sectarian
                school in Batangas. It was founded in 2003 and currently
                provides the complete basic education program and a higher
                education program. Its Senior High School (SHS) department has
                the Academic and the Technical-Vocational-Livelihood (TVL)
                tracks available. The college department, on the other hand,
                offers undergraduate courses in Accountancy, Business, Teacher
                Education, Industrial Engineering, Customs Administration,
                Criminology, and Information Technology. CCT and its programs
                are duly acknowledged by the Department of Education (DepEd) and
                the Commission on Higher Education (CHED).
              </p>
            </div>
            <div className="col-lg-4 ms-4">
              <img
                src={require("../img/school.jpg")}
                alt="school"
                style={{ width: "400px" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
