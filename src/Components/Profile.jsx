import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { auth, db } from "../config/firebaseconfig";
import { collection, getDocs, query, where } from "firebase/firestore";
function Profile() {
  const [profile, setProfile] = useState({});
  const [x, setX] = useState("");

  const studentsRef = collection(db, "students");

  const getProfile = async () => {
    try {
      const a = auth?.currentUser?.uid;
      const q = query(studentsRef, where("userId", "==", a));
      const b = await getDocs(q);
      let c;
      b.forEach((doc) => {
        c = doc.data();
        console.log(c);
      });
      setProfile(c);
      // .filter((doc) => doc.userId == auth.currentUser.uid);
      // setShipment(filteredData);gwt
    } catch (err) {
      if (auth.currentUser) {
        alert("cannot access firebase server");
      }
      console.error(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, [x]);

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
        <Container style={{ marginLeft: "250px", paddingTop: "50px" }}>
          <Row>
            <h1>Student Profile</h1>
            <h5 className="pt-3">
              Status:{" "}
              {profile?.status ? profile.status : "Waiting for approval...."}
            </h5>
          </Row>
          <Row className="pt-4 ps-5">
            <div className="col-lg-6">
              <h3>
                Name of Student:{profile?.lastName},{profile?.firstName}
              </h3>
              <p className="pt-3">Birthdate: </p>
              <p>Address: </p>
              <p>Email: </p>
              <p>Course:</p>
              <p>Year Level: </p>
              <p>Contact Number:</p>
            </div>
            <div className="col-lg-6 pt-4">
              <p className="pt-3">Section: N/A </p>
              <p>Adviser: N/A</p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Profile;
