import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function Admission() {
  return (
    <>
      <Container className="mb-5" style={{ marginTop: "120px" }}>
        <Row>
          <h1 className="bg-success p-3 text-light">
            Documentary Requirements
          </h1>
          <h2 className="pt-3">For Upcoming Freshmen Students</h2>
          <h4 className="pt-4">
            <b>Walk-in Application</b>
          </h4>
          <ul>
            <li>Bring 2x2 picture with white or plain background.</li>
            <li>Photo copy po PSA Birth Certificate. </li>
            <li>Grade 12 Form 138</li>
            <li>Certificate of Good Moral</li>
          </ul>
        </Row>
        <Row>
          <h4 className="pt-4">
            <b>For Transferee</b>
          </h4>
          <ul>
            <li>Bring 2x2 picture with white or plain background.</li>
            <li>Photo copy po PSA Birth Certificate. </li>
            <li>Certificate of Transfer Credential and Copy of Grades</li>
            <li>Certificate of Good Moral from last school attended.</li>
            <li>Certificate of Residency.</li>
          </ul>
        </Row>
        <Row>
          <p>Submit all requirements to the:</p>
          <p>
            <b>OFFICE OF THE REGISTAR</b>
          </p>
        </Row>
        <Link to="/register" className="btn btn-success mt-4">
          Click Here for Online College Admission
        </Link>
        <Row className="mt-5">
          <p>
            For questions or inquiries, please contact the OFFICE OF THE
            REGISTRAR.
          </p>
          <p>Telephone No.: (043) 778-54-68</p>
        </Row>
      </Container>
    </>
  );
}
export default Admission;
