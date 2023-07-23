import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Container fluid style={{ marginTop: "100px", paddingBottom: "100px" }}>
        <div className="col-lg-12">
          <div
            className="row"
            style={{
              paddingBottom: "100px",
              background: "rgb(48,179,215)",
              background:
                "linear-gradient(90deg, rgba(48,179,215,1) 0%, rgba(25,160,203,1) 39%, rgba(60,96,223,0.9192051820728291) 78%)",
            }}
          >
            <div
              className="col-lg-12 text-center pt-5"
              style={{ lineHeight: "0px", paddingBottom: "0px" }}
            >
              <div className="col-lg-6">
                <h1
                  style={{
                    lineHeight: "0px",
                    color: "white",
                    fontSize: "50px",
                    paddingTop: "50px",
                  }}
                >
                  SOARING
                </h1>
                <h1 style={{ fontFamily: "Arial", fontSize: "100px" }}>
                  <b>HIGH</b>
                </h1>
                <p
                  style={{
                    fontSize: "40px",
                    marginLeft: "200px",
                    color: "white",
                  }}
                >
                  towards
                </p>
                <h1 style={{ fontSize: "80px", color: "#F2D545" }}>
                  <b>EXCELLENCE</b>
                </h1>
              </div>
            </div>
            <h1
              style={{
                color: "black",
                textAlign: "center",
                width: "1000px",
                padding: "20px",
                marginLeft: "150px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Courgette', cursive",
                  fontSize: "70px",
                }}
              >
                Welcome{" "}
              </span>{" "}
              to Christian College of Tanauan!
            </h1>
            <h5
              style={{
                fontFamily: "'Courgette', cursive",
                fontSize: "40px",
                textAlign: "center",
                color: "black",
              }}
            >
              "School of Character, School of Excellence"
            </h5>
          </div>
        </div>
      </Container>
      <Container fluid className="bg-light pt-5 pb-5">
        <div className="row text-center">
          <h1 className="">
            <b>School Department</b>
          </h1>
          <Carousel className="pt-5 text-center">
            <Carousel.Item>
              <img
                src={require("../img/home/slide1.png")}
                alt="slide2"
                style={{ width: "500px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../img/home/slide2.png")}
                alt="slide2"
                style={{ width: "500px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../img/home/slide3.png")}
                alt="slide3"
                style={{ width: "500px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../img/home/slide4.png")}
                alt="slide4"
                style={{ width: "500px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../img/home/slide5.png")}
                alt="slide4"
                style={{ width: "500px" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>

      <div
        className="container-fluid bg-light mt-5 mb-5"
        style={{ marginTop: "100px" }}
      >
        <div className="row text-center pb-5">
          <h1 className="pt-5 pb-3 text-center">
            <b>Course Offered</b>
          </h1>
          <hr />
          <p
            className="pt-3"
            style={{ lineHeight: "30px", textIndent: "50px" }}
          >
            The school program offerings are recognized by the country's
            Commission on Higher Education.These are designed to provide
            opportunities for students to discover their potentials and enhance
            their technical and creative skills in a vibrant academic
            environment.
          </p>
          <p style={{ lineHeight: "30px", textIndent: "50px" }}>
            Each program offering is anchored on pragmatic, relevant, and
            socially responsive curricula that train students to be globally
            competitive by embracing transdiciplinary, social intelligence, new
            media literacy, design mindset, and physical and virtual
            collaboration. The school believes that these skills are required in
            the emerging professional and social environments.
          </p>
          <div className="col-lg-6 pt-5">
            <h3>
              <i>BS in Business Accountancy</i>
            </h3>
            <img
              src={require("../img/course/bsba.jpg")}
              alt="bsba"
              style={{ width: "400px" }}
            />
          </div>
          <div className="col-lg-6 pt-5">
            <h3>
              <i>BS in Accountancy</i>
            </h3>
            <img
              src={require("../img/course/bsa.png")}
              alt="bsa"
              style={{ width: "400px", height: "270px" }}
            />
          </div>
        </div>
        <div className="row text-center pb-5">
          <div className="col-lg-6">
            <h3>
              <i>BS in Tourisn</i>
            </h3>
            <img
              src={require("../img/course/tourism.PNG")}
              alt="tourism"
              style={{ width: "400px", height: "270px" }}
            />
          </div>
          <div className="col-lg-6">
            <h3>
              <i>BS in Human Resources Development Management</i>
            </h3>
            <img
              src={require("../img/course/bshrdm.jpg")}
              alt="bshrdm"
              style={{ width: "400px" }}
            />
          </div>
        </div>
      </div>

      <Container fluid className="text-center bg-light mb-5">
        <h1 className="pt-5 text-center">
          <b>Sports and Events</b>
        </h1>
        <Carousel className="pt-5">
          <Carousel.Item>
            <img
              src={require("../img/buwan.gif")}
              alt="buwan"
              style={{ width: "800px" }}
            />
            <Carousel.Caption>
              <div
                className="bg-dark text-light p-2 text-center"
                style={{ width: "500px", marginLeft: "200px" }}
              >
                <h3>Buwan ng Wika 2019</h3>
                <p>
                  <i>Celebrating Buwan ng Wika 2019.</i>
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../img/concert.jpg")}
              alt="concert"
              style={{ width: "800px" }}
            />
            <Carousel.Caption className="text-center">
              <div
                className="bg-dark text-light p-2"
                style={{ width: "500px", marginLeft: "200px" }}
              >
                <h3>Worship Concert 2017</h3>

                <p>
                  <i>Experiencing the presence of God.</i>
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../img/vb.gif")}
              alt="vb"
              style={{ width: "800px" }}
            />
            <Carousel.Caption>
              <div
                className="bg-dark text-light p-2 text-center"
                style={{ width: "500px", marginLeft: "200px" }}
              >
                <h3>Volleyball Champion</h3>
                <p>
                  <i>White Doves Fly High!</i>
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container style={{ paddingTop: "50px" }}>
        <Row className="text-center col-lg-12">
          <h1>
            <b>School Facilities</b>
          </h1>
          <img src={require("../img/home/school1.jpg")} alt="school" />
        </Row>
      </Container>
      <Container fluid className="text-center mb-5">
        <Row className="text-center">
          <img
            src={require("../img/home/library.jpg")}
            alt="library"
            style={{ width: "280px", marginLeft: "85px", position: "relative" }}
            className="pe-0"
          />
          <h5
            style={{
              position: "absolute",
              marginTop: "250px",
              width: "200px",
              marginLeft: "100px",
            }}
            className="bg-dark text-light p-3"
          >
            Library
          </h5>
          <img
            src={require("../img/home/theatre.jpg")}
            alt="theatre"
            style={{ width: "275px", position: "relative" }}
            className="pe-0 ps-0"
          />
          <h5
            style={{
              position: "absolute",
              marginTop: "250px",
              width: "200px",
              marginLeft: "370px",
            }}
            className="bg-dark text-light p-3"
          >
            Theatre
          </h5>
          <img
            src={require("../img/home/hallway.jpg")}
            alt="hallway"
            style={{ width: "275px", position: "relative" }}
            className="pe-0 ps-0"
          />
          <h5
            style={{
              position: "absolute",
              marginTop: "250px",
              width: "200px",
              marginLeft: "645px",
            }}
            className="bg-dark text-light p-3"
          >
            Hallway
          </h5>
          <img
            src={require("../img/home/registrar.jpg")}
            alt="registrar"
            style={{ width: "275px", position: "relative" }}
            className="pe-0 ps-0"
          />
          <h5
            style={{
              position: "absolute",
              marginTop: "250px",
              width: "200px",
              marginLeft: "920px",
            }}
            className="bg-dark text-light p-3"
          >
            Registrar
          </h5>
        </Row>
      </Container>
    </>
  );
}
export default Home;
