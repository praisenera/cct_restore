import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="background" style={{ alignItems: "center" }}>
          <div classNmae="home">
            <h3
              className="heading"
              style={{
                fontSize: "80px",
                paddingBottom: "50px",
                paddingTop: "50px",
              }}
            >
              <i>"School of Character, School of Excellence"</i>
            </h3>
          </div>
          <button type="submit" className="btn btn-primary mb-4 p-2">
            Enroll now!
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
