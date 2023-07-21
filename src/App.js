import "./App.css";
import OffcanvasExample from "./NavComponent";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Registration from "./Components/Registration";
import Admission from "./Components/Admission";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import EnrollmentForm from "./Components/Enrollment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loginx } from "./LoginCompo";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/profile"
          element={
            <>
              <OffcanvasExample />
              <Profile />
            </>
          }
        />
        <Route
          path="/enrollmentform"
          element={
            <>
              <EnrollmentForm />
            </>
          }
        />
        <Route
          path="/admission"
          element={
            <>
              <OffcanvasExample />
              <Admission />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <OffcanvasExample />
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <OffcanvasExample />
              <Registration />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <OffcanvasExample />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/cct_restore"
          element={
            <>
              <OffcanvasExample />
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <OffcanvasExample />
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
