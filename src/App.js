import "./App.css";
import OffcanvasExample from "./NavComponent";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import AdminDashboard from "./Components/AdminDashboard";
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
          path="/enrollmentform"
          element={
            <>
              <EnrollmentForm />
            </>
          }
        />
        <Route
          path="/admindashboard"
          element={
            <>
              <AdminDashboard />
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
