import React from "react";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function Profile() {
  return (
    <>
      <div className="col-lg-3">
        <Sidebar />
      </div>
      <div className="col-lg-9">
        <div className="row-logo pt-3">
          <img
            src={require("../img/logo.jpg")}
            alt="logo"
            style={{ width: "80px", marginLeft: "1200px" }}
          />
        </div>
        <Container style={{ marginLeft: "250px", paddingTop: "25px" }}>
          <Row>
            <h1>Student Portal</h1>
            <h5 className="pt-3">Status: Waiting for approval....</h5>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Profile;
