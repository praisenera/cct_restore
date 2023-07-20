import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Profile() {
  return (
    <>
      <Sidebar />
      <Container>
        <div className="row">
          <h1>Profile</h1>
          <p>First Name: </p>
          <p>Last Name: </p>
          <p>Middle Name: </p>
          <p>Birthdate: </p>
          <p>Gender: </p>
          <p>Address: </p>
          <p>Mobile Number: </p>
          <p>Course: </p>
          <p>Middle Name: </p>
          <p>Email: </p>
        </div>
        <div className="row">
          <Link to="/enrollmentform" className="btn btn-primary" style>
            Enroll Now!
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Profile;
