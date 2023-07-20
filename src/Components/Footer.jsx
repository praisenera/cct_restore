import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="col-lg-12 bg-dark text-light">
        <Container className="row p-5">
          <div className="col-lg-5">
            <h3>Chrsitian College of Tanauan</h3>
            <p>
              <i>"Striving for Excellence!</i>
            </p>
            {/* <span>
              <i>"Striving for Excellence"</i>
            </span> */}
            <h5>Contact us</h5>
            <p>Telephone No. (043) 778-54-68</p>
            <p>Fax No. (043) 778-54-69</p>
            <h5>Location</h5>
            <p>J. V. Pagaspas St.,Poblacion,Tanauan City</p>
          </div>
          <div className="col-lg-7">
            <img
              src={require("../img/logo.jpg")}
              alt="logo"
              style={{ marginLeft: "400px", paddingLeft: "150px" }}
            />
          </div>
          <div classsName="social">
            <Link to="https://www.facebook.com/profile.php?id=100068687022264">
              <img
                src={require("../img/fb.png")}
                alt="fb"
                style={{ width: "70px" }}
                className="ps-3"
              />
            </Link>
            <Link to="#">
              <img
                src={require("../img/insta.png")}
                alt="insta"
                style={{ width: "70px" }}
                className="ps-3"
              />
            </Link>
            <Link to="https://www.google.com/maps/place/Christian+College+of+Tanauan/@14.0896001,121.1479972,15z/data=!4m6!3m5!1s0x33bd6fe4ae8e10f1:0xdf4bb97f30ff3030!8m2!3d14.0896001!4d121.1479972!16s%2Fg%2F11jcy7jvk9?hl=en&entry=ttu">
              <img
                src={require("../img/maps.png")}
                alt="maps"
                style={{ width: "70px" }}
                className="ps-3"
              />
            </Link>
          </div>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
