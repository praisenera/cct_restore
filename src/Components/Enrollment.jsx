import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseconfig";

function EnrollmentForm(props) {
  const students = props?.students?.filter((x) => !x.course);
  const now = new Date().toISOString().split("T")[0];

  const [selected, setSelected] = useState("");
  const [selectedstudent, setSelectedstudent] = useState({});
  const [bdate, setbdate] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [yearlevel, setYearlevel] = useState("");
  const [homead, setHomeAd] = useState("");
  const [mobilenum, setMobileNum] = useState("");
  const [tel, setTelNum] = useState("");
  const [course, setCourse] = useState("");

  const [spin, setSpin] = useState("");

  const select = (event) => {
    setSelected(event.target.value);
    setSelectedstudent(
      students.find((student) => student.email == event.target.value)
    );
    console.log(selectedstudent);
  };

  const submitx = async (e) => {
    e.preventDefault();
    setSpin(" ");
    console.log("updating doc");
    const xDoc = doc(db, "students", selectedstudent.id);
    try {
      await updateDoc(xDoc, {
        bdate: bdate,
        age: age,
        gender: gender,
        yearlevel: yearlevel,
        homead: homead,
        mobilenum: mobilenum,
        tel: tel,
        course: course,
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
      <Container>
        <div className="content">
          {/* {bdate}
        {gender}
        {yearlevel}
        {homead}
        {mobilenum}
        {tel}
        {course}
        {selectedstudent.id} */}
          <Form>
            <h1 className="pt-5 ps-2">Student Enrollment Form</h1>
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

            <div className="form_body">
              <h3>Student Information</h3>
              <h3>
                {/* Student Information: {selectedstudent.lastName}
              
              {selectedstudent?.firstName} */}
              </h3>
              <div className="first_name">
                <label>First Name: </label>
                <input
                  className="form__input"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  style={{ marginLeft: "100px" }}
                  // value={selectedstudent.firstName}
                  // disabled
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
                  // value={selectedstudent.lastName}
                  // disabled
                />
              </div>
              <div className="birthdate">
                <label>Birhtdate: </label>
                <input
                  type="date"
                  id="birthdate"
                  style={{ marginLeft: "113px", width: "205px" }}
                  // max={now}
                  // value={bdate}
                  // onChange={(date) => setbdate(date.target.value)}
                />
              </div>
              <div className="gender">
                <label>Gender: </label>
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  style={{ marginLeft: "130px" }}
                  // onChange={(e) => setGender(e.target.value)}
                />
                <label>Male</label>
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  // onChange={(e) => setGender(e.target.value)}
                />
                <label>Female</label>
                <input
                  type="radio"
                  value="other"
                  name="gender"
                  // onChange={(e) => setGender(e.target.value)}
                />
                <label>Other</label>
              </div>
              <div className="year_level">
                <label>Year Level:</label>
                <input
                  type="number"
                  id="year_level"
                  style={{ marginLeft: "105px" }}
                  // onChange={(e) => setYearlevel(e.target.value)}
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

                  // onChange={(e) => setHomeAd(e.target.value)}
                />
              </div>
              <div className="mobile_num">
                <label>Mobile Number: </label>
                <input
                  type="number"
                  id="mobile_num"
                  style={{ marginLeft: "63px" }}
                  // onChange={(e) => setMobileNum(e.target.value)}
                />
              </div>
              <div className="tel_num">
                <label>Telephone Number: </label>
                <input
                  type="number"
                  id="mobile_num"
                  placeholder="ex (02)-12345674"
                  style={{ marginLeft: "32px" }}

                  // onChange={(e) => setTelNum(e.target.value)}
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

                  // disabled={true}
                  // value={selected}
                />
              </div>
              <div className="course">
                <label>Specified Course: </label>
                <select
                  className="course"
                  style={{ width: "200px", marginLeft: "50px" }}
                  // onChange={(e) => setCourse(e.target.value)}
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
                  <option value="BSEDUC">
                    Bachelor of Elementary Education
                  </option>
                  <option value="BSEDUC">
                    Bachelor of Secondary Education
                  </option>
                </select>
              </div>

              <div className="row">
                <h3>Parents Information</h3>
                <div className="mothers_name">
                  <label className="mother_name">Mothers Name: </label>
                  <input
                    type="text"
                    name="mother"
                    id="mother"
                    placeholder="Mothers Name"
                    style={{ marginLeft: "65px" }}
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
                  />
                </div>
                <div className="fathers_name">
                  <label className="father_name">Fathers Name: </label>
                  <input
                    type="text"
                    name="father"
                    id="father"
                    placeholder="Fathers Name"
                    style={{ marginLeft: "70px" }}
                  />
                </div>
                <div className="con_pop">
                  <label className="father_name">Contact Number: </label>
                  <input
                    type="text"
                    name="contact_pop"
                    id="con_pop"
                    placeholder="09123456789"
                    style={{ marginLeft: "47px" }}
                  />
                </div>
                <div className="guardian">
                  <label className="father_name">Guardins Name: </label>
                  <input
                    type="text"
                    name="guardian"
                    id="guardian"
                    placeholder="Guardians Name"
                    style={{ marginLeft: "55px" }}
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
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className="file">
                  <h3>Files for Upload</h3>
                  <div className="form_137">
                    <label className="form_137">Form 137: </label>
                    <input
                      type="file"
                      name="form_137"
                      style={{ marginLeft: "120px" }}
                    />
                  </div>
                  <div className="form_138">
                    <label className="form_138">Form 138: </label>
                    <input
                      type="file"
                      name="138"
                      style={{ marginLeft: "120px" }}
                    />
                  </div>
                  <div className="picture">
                    <label className="picture">2x2 picture: </label>
                    <input
                      type="file"
                      name="picture"
                      style={{ marginLeft: "105px" }}
                    />
                  </div>
                  <div className="psa">
                    <label className="psa">PSA (Birth Certificate): </label>
                    <input type="file" name="psa" />
                  </div>
                  <div className="good_moral">
                    <label className="good_moral">Good Moral: </label>

                    <input
                      type="file"
                      name="good_moral"
                      style={{ marginLeft: "100px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </Container>
    </>
  );
}
export default EnrollmentForm;
