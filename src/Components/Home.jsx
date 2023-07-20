import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Container fluid style={{ position: "relative", marginTop: "100px" }}>
        <div className="row">
          <img src={require("../img/hero.PNG")} alt="hero" />
          <Link
            to="/register"
            className="btn btn-primary"
            style={{
              position: "absolute",
              marginTop: "450px",
              marginLeft: "550px",
              width: "200px",
              fonSize: "20px",
              paddingLeft: "10px",
            }}
          >
            Enroll Now!
          </Link>
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
    </>
  );
}
export default Home;
