import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import EnrollmentForm from "./Enrollment";
import { Button, Modal, Spinner } from "react-bootstrap";
import { auth, db, storage } from "../config/firebaseconfig";
import { addDoc, collection } from "firebase/firestore";
import { useEffect } from "react";

function Registration(props) {
  const students = props?.students?.filter((x) => !x.course);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState(null);
  const [address, setAddress] = useState(null);
  const [yearLevel, setYearLevel] = useState(null);
  const [mobileNum, setMobileNum] = useState(null);
  const [telNum, setTelNum] = useState(null);
  const [course, setCourse] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [spinner, setSpinner] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id == "firstName") {
      setFirstName(value);
    }
    if (id == "lastName") {
      setLastName(value);
    }
    if (id == "birthdate") {
      setBirthdate(value);
    }
    if (id == "gender") {
      setGender(value);
    }
    if (id == "address") {
      setAddress(value);
    }
    if (id == "yearLevel") {
      setYearLevel(value);
    }
    if (id == "mobileNum") {
      setMobileNum(value);
    }
    if (id == "telNum") {
      setTelNum(value);
    }
    if (id == "course") {
      setCourse(value);
    }
    if (id == "email") {
      setEmail(value);
    }
    if (id == "password") {
      setPassword(value);
    }
    if (id == "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const studentsCollectionRef = collection(db, "students");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpinner(" ");
    console.log(
      firstName,
      lastName,
      birthdate,
      gender,
      address,
      yearLevel,
      mobileNum,
      telNum,
      course,
      email,
      password,
      confirmPassword
    );
    if (password === confirmPassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(studentsCollectionRef, {
          firstName: firstName,
          lastName: lastName,
          birthdate: birthdate,
          gender: gender,
          yearLevel: yearLevel,
          address: address,
          mobileNum: mobileNum,
          telNum: telNum,
          course: course,
          email: email,
          userId: auth?.currentUser?.uid,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("password not same");
    }
    setSpinner("");
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {auth.currentUser ? (
        <></>
      ) : (
        <>
          <div className="pb-3" style={{ marginTop: "100px" }}>
            <div className="form">
              <div className="form-body">
                <h1>Register</h1>
                <div className="username">
                  <label className="form__label" for="firstName">
                    First Name:
                  </label>
                  <input
                    className="form__input"
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    required
                    onChange={handleInputChange}
                    // onChange={(e)=>setFirstName(e.target.value)}
                  />
                </div>
                <div className="lastname">
                  <label className="form__label" for="lastName">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form__input"
                    placeholder="Last Name"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="birthdate">
                  <label>Birhtdate: </label>
                  <input
                    type="date"
                    id="birthdate"
                    className="form__input"
                    placeholder="Bithdate"
                    style={{ marginLeft: "97px", width: "200px" }}
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="gender">
                  <label>Gender: </label>
                  <input
                    type="radio"
                    className="form__input"
                    value="male"
                    name="gender"
                    id="gender"
                    style={{ marginLeft: "110px" }}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label>Male</label>
                  <input
                    type="radio"
                    className="form__input"
                    value="female"
                    name="gender"
                    id="gender"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label>Female</label>
                  <input
                    type="radio"
                    className="form__input"
                    value="other"
                    name="gender"
                    id="gender"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label>Other</label>
                  <br />
                </div>
                <div className="yearLevel">
                  <label className="form_label">Year Level:</label>
                  <input
                    type="number"
                    className="form__input"
                    id="yearLevel"
                    style={{ marginLeft: "90px" }}
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="address">
                  <label className="form_label">Address: </label>
                  <input
                    type="text"
                    className="form__input"
                    id="address"
                    width="200px"
                    style={{ marginLeft: "105px" }}
                    placeholder="ex. Sitio Malitlit Sto.Tomas"
                    required
                    onChange={handleInputChange}
                  />
                  <br />
                </div>
                <div className="mobileNum">
                  <label className="form_label">Mobile Number: </label>
                  <input
                    type="number"
                    className="form__input"
                    id="mobileNum"
                    style={{ marginLeft: "50px" }}
                    placeholder="ex.09123456789"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="telNum">
                  <label className="form_label">Telephone Number: </label>
                  <input
                    type="number"
                    className="form_input"
                    id="telNum"
                    style={{ marginLeft: "18px", width: "205px" }}
                    placeholder="ex.04-12345678"
                    required
                    onChange={handleInputChange}
                  />
                  <br />
                </div>
                <div className="course">
                  <label className="form_label">Specified Course: </label>
                  <select
                    className="course"
                    style={{ width: "205px", marginLeft: "35px" }}
                    required
                    onChange={(e) => setCourse(e.target.value)}
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
                  <br />
                </div>
                <div className="email">
                  <label className="form__label" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form__input"
                    placeholder="Email"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="password">
                  <label className="form__label" for="password">
                    Password
                  </label>
                  <input
                    className="form__input"
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    className="form__input"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div class="footer">
                {spinner ? (
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                ) : (
                  <Button onClick={handleShow}>Register</Button>
                )}
              </div>
            </div>
          </div>

          <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
              <Modal.Title>Student Enrollment Form</Modal.Title>
            </Modal.Header>
            <EnrollmentForm
              firstName={firstName}
              lastName={lastName}
              birthdate={birthdate}
              gender={gender}
              yearLevel={yearLevel}
              address={address}
              mobileNum={mobileNum}
              telNum={telNum}
              email={email}
              course={course}
            />
            {/* <Modal.Footer></Modal.Footer> */}
          </Modal>
        </>
      )}
    </>
  );
}
export default Registration;
