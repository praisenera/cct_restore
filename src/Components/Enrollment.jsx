import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

function EnrollmentForm(props) {
  const students = props?.students?.filter((x) => !x.course);
  const now = new Date().toISOString().split("T")[0];

  // const [selectedstudent, setSelectedstudent] = useState({});
  const [mother_name, setMotherName] = useState("");
  const [con_mom, setConMother] = useState("");
  const [father_name, setFatherName] = useState("");
  const [con_pops, setConFather] = useState("");
  const [guardian_name, setGuardianName] = useState("");
  const [con_guard, setConGuard] = useState("");

  const [spin, setSpin] = useState("");

  // const select = (event) => {
  //   setSelectedstudent(
  //     students.find((student) => student.id == event.target.value)
  //   );
  //   console.log(selectedstudent);
  // };

  const submitx = async (e) => {
    e.preventDefault();
    setSpin(" ");
    console.log("updating doc");
    const xDoc = doc(db, "students", students.id);
    try {
      await updateDoc(xDoc, {
        mother_name: mother_name,
        con_mom: con_mom,
        father_name: father_name,
        con_pops: con_pops,
        guradian_name: guardian_name,
        con_guard: con_guard,
        // bdate: bdate,
        // age: age,
        // gender: gender,
        // year_level: year_level,
        // adressd: address,
        // mobile_um: mobile_num,
        // tel_num: tel_num,
        // course: course,
      });
      await props.getstudents();
      // setCount(count + 1);
    } catch (err) {
      console.log(err);
    }
    setSpin("");
  };

  return (
    <>
      {/* {bdate}
        {gender}
        {yearlevel}
        {homead}
        {mobilenum}
        {tel}
        {course}
        {selectedstudent.id} */}
      <Form>
        {/* <h2>Select a student</h2> */}
        {/* <Form.Select aria-label="Default select example" onChange={select}>
          <option selected disabled>
            none
          </option>
          {students?.map((student) => (
            <option value={student.email} key={student.email}>
              {student.email}
            </option>
          ))}
        </Form.Select> */}
        <Row>
          <Col>
            <div className="first_name">
              <label>First Name: </label>
              <input
                className="form__input"
                type="text"
                id="firstName"
                placeholder="First Name"
                style={{ marginLeft: "100px" }}
                value={props.firstName}
                disabled
              />
            </div>

            <div className="last_name">
              <label>Last Name:</label>
              <input
                className="form__input"
                type="text"
                id="lastName"
                placeholder="Last Name"
                style={{ marginLeft: "100px" }}
                value={props.lastName}
                disabled
              />
            </div>
            <div className="birthdate">
              <label>Birhtdate: </label>
              <input
                type="date"
                id="birthdate"
                style={{ marginLeft: "113px", width: "205px" }}
                value={props.birthdate}
                disabled
              />
            </div>
            <div className="gender">
              <label>Gender: </label>
              <input
                type="radio"
                name="gender"
                id="gender"
                style={{ marginLeft: "130px" }}
                value={props.gender}
                disabled
              />
              <label>Male</label>
              <input
                type="radio"
                value={props.gender}
                id="gender"
                name="gender"
                disabled
              />
              <label>Female</label>
              <input
                type="radio"
                value={props.gender}
                id="gender"
                name="gender"
                disabled
              />
              <label>Other</label>
            </div>
            <div className="year_level">
              <label>Year Level:</label>
              <input
                type="number"
                min="1"
                max="5"
                id="yearLevel"
                style={{ marginLeft: "105px" }}
                value={props.yearLevel}
                disabled
              />
            </div>
            <div className="address">
              <label>Address: </label>
              <input
                type="text"
                id="address"
                width="200px"
                placeholder="ex. Sitio Malitlit San Miguel Sto.Tomas"
                style={{ marginLeft: "120px" }}
                value={props.address}
                disabled
              />
            </div>
            <div className="mobile_num">
              <label>Mobile Number: </label>
              <input
                type="number"
                id="mobileNum"
                placeholder="ex.09123456789"
                style={{ marginLeft: "63px" }}
                value={props.mobileNum}
                disabled
              />
            </div>
            <div className="tel_num">
              <label>Telephone Number: </label>
              <input
                type="number"
                id="telNum"
                placeholder="ex.(02)-12345674"
                style={{ marginLeft: "32px" }}
                value={props.telNum}
                disabled
              />
            </div>
            <div className="email">
              <label>Email Address: </label>
              <input
                type="email"
                id="email"
                width="100px"
                placeholder="ex. juan@gmail.com"
                style={{ marginLeft: "70px" }}
                value={props.email}
                disabled
              />
            </div>
            <div className="course">
              <label>Specified Course: </label>
              <select
                className="course"
                id="course"
                style={{ width: "200px", marginLeft: "50px" }}
                value={props.course}
                disabled
              >
                <option value="">Select ..</option>
                <option value="BSBA">BS in Business Administration </option>
                <option value="BSA">BS in Accountancy </option>
                <option value="BSMA">BS in Management Accounting </option>
                <option value="BSHRDM">
                  BS in Human Resource Development Management
                </option>
                <option value="Tourism">BS in Tourism </option>
                <option value="BSIT">BS in Information Technology</option>
                <option value="BSCE">BS in Civil Engineering</option>
                <option value="BSCpE">BS in Computer Engineering</option>
                <option value="BSEE">BS in Electrical Engineering</option>
                <option value="BSME">BS in Mechanical Engineering</option>
                <option value="BSCRIM">BS in Criminology</option>
                <option value="BSEDUC">Bachelor of Elementary Education</option>
                <option value="BSEDUC">Bachelor of Secondary Education</option>
              </select>
            </div>
          </Col>

          <Col>
            <h3>Parents Information</h3>
            <div className="mothers_name">
              <label className="mother_name">Mothers Name: </label>
              <input
                type="text"
                name="mother"
                id="mother_name"
                placeholder="Mothers Name"
                style={{ marginLeft: "65px" }}
                onChange={(e) => setMotherName(e.target.value)}
              />
            </div>
            <div className="con_mom">
              <label className="mother_name">Contact Number: </label>
              <input
                type="text"
                name="contact_mom"
                id="con_mom"
                placeholder="ex. 09123456789"
                style={{ marginLeft: "47px" }}
                onChange={(e) => setConMother(e.target.value)}
              />
            </div>
            <div className="fathers_name">
              <label className="father_name">Fathers Name: </label>
              <input
                type="text"
                name="father"
                id="father_name"
                placeholder="Fathers Name"
                style={{ marginLeft: "70px" }}
                onChange={(e) => setFatherName(e.target.value)}
              />
            </div>
            <div className="con_pop">
              <label className="father_name">Contact Number: </label>
              <input
                type="text"
                name="contact_pop"
                id="con_pops"
                placeholder="09123456789"
                style={{ marginLeft: "47px" }}
                onChange={(e) => setConFather(e.target.value)}
              />
            </div>
            <div className="guardian">
              <label className="father_name">Guardins Name: </label>
              <input
                type="text"
                name="guardian"
                id="guardian_name"
                placeholder="Guardians Name"
                style={{ marginLeft: "55px" }}
                onChange={(e) => setGuardianName(e.target.value)}
              />
            </div>
            <div className="con_guard">
              <label className="gurad_con">Contact Number: </label>
              <input
                type="text"
                name="contact_guard"
                id="con_guard"
                placeholder="09123456789"
                style={{ marginLeft: "47px" }}
                onChange={(e) => setConGuard(e.target.value)}
              />
            </div>
          </Col>
        </Row>

        {/* <h3>Files for Upload</h3>
                  <div className="form_137">
                    <label className="form_137">Form 137: </label>
                    <input
                      type="file"
                      name="form_137"
                      style={{ marginLeft: "100px" }}
                    />
                  </div>
                  <div className="form_138">
                    <label className="form_138">Form 138: </label>
                    <input
                      type="file"
                      name="138"
                      style={{ marginLeft: "100px" }}
                    />
                  </div>
                  <div className="picture">
                    <label className="picture">2x2 picture: </label>
                    <input
                      type="file"
                      name="picture"
                      style={{ marginLeft: "83px" }}
                    />
                  </div>
                  <div className="psa">
                    <label className="psa">PSA: </label>
                    <input
                      type="file"
                      name="psa"
                      style={{ marginLeft: "140px" }}
                    />
                  </div>
                  <div className="good_moral">
                    <label className="good_moral">Good Moral: </label>

                    <input
                      type="file"
                      name="good_moral"
                      style={{ marginLeft: "77px" }}
                    />
                  </div> */}

        <div className="text-center">
          {spin ? (
            <></>
          ) : (
            <button
              onClick={submitx}
              className="btn btn-success"
              style={{ marginBottom: "30px", marginTop: "50px" }}
            >
              Submit
            </button>
          )}
        </div>
      </Form>
    </>
  );
}
export default EnrollmentForm;
