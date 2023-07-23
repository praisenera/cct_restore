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
                <span>
                  {profile?.lastName}, {profile?.firstName}
                </span>
              </h3>
              <p className="pt-3">
                Birthdate: <span className="ps-3">{profile?.birthdate}</span>
              </p>
              <p>
                Address: <span className="ps-4">{profile?.address}</span>
              </p>
              <p>
                Email: <span className="ps-5">{profile?.email}</span>
              </p>
              <p>
                Course:{" "}
                <span style={{ marginLeft: "10px" }} className="ps-4">
                  {profile?.course}
                </span>
              </p>
              <p>
                Year Level: <span className="ps-3">{profile?.yearLevel}</span>
              </p>
              <p>
                Contact Number:{" "}
                <span className="ps-2">{profile?.mobileNum}</span>
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Profile;
