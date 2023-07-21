import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../config/firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function EnrollmentForm(props) {
  // const [selectedstudent, setSelectedstudent] = useState({});
  const [mother_name, setMotherName] = useState("");
  const [con_mom, setConMother] = useState("");
  const [father_name, setFatherName] = useState("");
  const [con_pops, setConFather] = useState("");
  const [guardian_name, setGuardianName] = useState("");
  const [con_guard, setConGuard] = useState("");

  const [spin, setSpin] = useState("");
  const studentsCollectionRef = collection(db, "students");
  const submitx = async (e) => {
    e.preventDefault();
    setSpin(" ");
    console.log("updating doc");
    const xDoc = doc(db, "students", "students.id");
    try {
      await updateDoc(xDoc, {
        mother_name: mother_name,
        con_mom: con_mom,
        father_name: father_name,
        con_pops: con_pops,
        guradian_name: guardian_name,
        con_guard: con_guard,
      });
      await props.getstudents();
      // setCount(count + 1);
    } catch (err) {
      console.log(err);
    }
    setSpin("");
  };
  const handleSubmit = async (e) => {
    setSpin(" ");
    e.preventDefault();
    if (
      props.password === props.confirmPassword &&
      mother_name &&
      con_mom &&
      father_name &&
      con_pops &&
      guardian_name &&
      con_guard
    ) {
      try {
        await createUserWithEmailAndPassword(auth, props.email, props.password);
        await addDoc(studentsCollectionRef, {
          firstName: props.firstName,
          lastName: props.lastName,
          birthdate: props.birthdate,
          gender: props.gender,
          yearLevel: props.yearLevel,
          address: props.address,
          mobileNum: props.mobileNum,
          telNum: props.telNum,
          course: props.course,
          email: props.email,
          mother_name: mother_name,
          con_mom: con_mom,
          father_name: father_name,
          con_pops: con_pops,
          guradian_name: guardian_name,
          con_guard: con_guard,
          userId: auth?.currentUser?.uid,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      if (props.password != props.confirmPassword) {
        alert("password not same");
      } else {
        alert("please input required fields or put N/A");
      }
    }
    setSpin("");
  };

  return (
    <>
      <Form style={{ marginTop: 0 }}>
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
                checked={props.gender == "male"}
                disabled={props.gender != "male"}
              />
              <label>Male</label>
              <input
                type="radio"
                value={props.gender}
                id="gender"
                name="gender"
                checked={props.gender == "female"}
                disabled={props.gender != "female"}
              />
              <label>Female</label>
              <input
                type="radio"
                value={props.gender}
                id="gender"
                name="gender"
                checked={props.gender == "other"}
                disabled={props.gender != "other"}
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
                disabled
              >
                <option value="">Select ..</option>
                <option selected={props.course == "BSBA"}>
                  BS in Business Administration{" "}
                </option>
                <option selected={props.course == "BSA"}>
                  BS in Accountancy{" "}
                </option>
                <option selected={props.course == "BSMA"}>
                  BS in Management Accounting{" "}
                </option>
                <option selected={props.course == "BSHRDM"}>
                  BS in Human Resource Development Management
                </option>
                <option selected={props.course == "Tourism"}>
                  BS in Tourism{" "}
                </option>
                <option selected={props.course == "BSIT"}>
                  BS in Information Technology
                </option>
                <option selected={props.course == "BSCE"}>
                  BS in Civil Engineering
                </option>
                <option selected={props.course == "BSCpE"}>
                  BS in Computer Engineering
                </option>
                <option selected={props.course == "BSEE"}>
                  BS in Electrical Engineering
                </option>
                <option selected={props.course == "BSME"}>
                  BS in Mechanical Engineering
                </option>
                <option selected={props.course == "BSCRIM"}>
                  BS in Criminology
                </option>
                <option selected={props.course == "BSEDUC"}>
                  Bachelor of Elementary Education
                </option>
                <option selected={props.course == "BSEDUC2"}>
                  Bachelor of Secondary Education
                </option>
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

        <div className="text-center">
          {spin ? (
            <></>
          ) : (
            <button
              onClick={handleSubmit}
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
