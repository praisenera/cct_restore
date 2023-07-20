import React from "react";
import Container from "react-bootstrap/Container";

function About() {
  return (
    <>
      <Container className="bg-dark mb-5" style={{ marginTop: "100px" }}>
        <div className="row col-lg-12 text-light">
          <div className="col-lg-6">
            <h3 className="pt-5 ps-5">
              <i>About the school</i>
            </h3>
            <hr />
            <p
              style={{
                textIndent: "50px",
                paddingLeft: "30px",
                lineHeight: "30px",
              }}
            >
              Christian College of Tanauan (CCT) is a private, non-sectarian
              school in Batangas. It was founded in 2003 and currently provides
              the complete basic education program and a higher education
              program. Its Senior High School (SHS) department has the Academic
              and the Technical-Vocational-Livelihood (TVL) tracks available.
              The college department, on the other hand, offers undergraduate
              courses in Accountancy, Business, Teacher Education, Industrial
              Engineering, Customs Administration, Criminology, and Information
              Technology. CCT and its programs are duly acknowledged by the
              Department of Education (DepEd) and the Commission on Higher
              Education (CHED).
            </p>
          </div>
          <div className="col-lg-6" style={{ paddingTop: "100px" }}>
            <img
              src={require("../img/school.jpg")}
              alt="school"
              style={{ width: "400px", marginLeft: "50px" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 text-center" style={{ marginTop: "50px" }}>
            <img
              src={require("../img/owner.png")}
              alt="owner"
              style={{ marginTop: "40px" }}
            />
          </div>
          <div
            className="col-lg-6 text-light ps-3"
            style={{ marginTop: "50px" }}
          >
            <h2>Dr. Vinson B. Pineda</h2>
            <h5>
              <i>PhD - Dermatology & Venereology</i>
            </h5>
            <hr />
            <p
              style={{
                textIndent: "50px",
                paddingLeft: "20px",
                lineHeight: "30px",
              }}
            >
              Dr. Vinson B. Pineda is a Dermatologist and has an experience of
              48 years in this field. He completed PhD - Dermatology &
              Venereology from UP College of Medicine in 1964. He is a member of
              American Academy of Dermatology (AAD),american society for
              dermatologic surgery,International Society of Topical
              Dermatology,International Society of Dermapathology,Philippine
              Society of Aesthetic Medicine,Dermclinic Inc and Dermatology
              Institute Foundation of the Philippines. Some of the services
              provided by the doctor are: Anti Aging Treatment,Laser
              Resurfacing,Acne / Pimples Treatment,Laser Hair Removal - Face and
              Sun Spots, Age Spots, And Other Pigmented Lesions etc.{" "}
            </p>
          </div>
        </div>
        <Container>
          <div className="row mt-5">
            <div className="col-lg-6 offset-3 text-light text-center">
              <h1>Vision</h1>
              <p style={{ lineHeight: "30px" }}>
                The Christian College of Tanauan envision to become the best
                character heart formation institution, with distinct academic
                programs synonimous to being a "school of character and
                exellence". Moulding and Producing spiritually upright
                professionals, capable of meeting the changing growing demands
                of the local and global society.
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <div className="row">
            <div className="col-lg-6 offset-3 pb-5 text-light text-center">
              <h1>Mission</h1>
              <p style={{ lineHeight: "30px" }}>
                CCT is commited to provide the best value foundation and
                specialized quality educational programs to learners, sustained
                with advanced facilities, safe and conducive learning
                environments with highly competent cademic and non-academic
                personel, focused in achieving holistic development of
                individual.
              </p>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
export default About;
