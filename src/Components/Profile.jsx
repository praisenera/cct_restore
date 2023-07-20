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
      <div className="col-lg-6">
        <Container style={{ marginLeft: "250px", paddingTop: "50px" }}>
          <Row>
            <h1>Student Portal</h1>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Profile;
