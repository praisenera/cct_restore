import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
  return (
    <div className="sidebar"
      style={{ display: "flex", height: "100vh", overflow: "scroll initial",color: "rgb(255, 255, 255)", background: "rgb(51,51,51)" }}
    >

       <Nav.Link>
          <Link
            to="#"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <i class="bi bi-house-door-fill">Student Portal</i>
          </Link>
          </Nav.Link>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Nav.Link>
              <Link to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem>
                  <i className="bi bi-person-fill">Profile</i>
                </CDBSidebarMenuItem>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/schedules" className="activeClicked">
                <CDBSidebarMenuItem disabled>
                  <i className="bi bi-table">Schedule</i>
                </CDBSidebarMenuItem>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/grades" className="activeClicked">
                <CDBSidebarMenuItem disabled>
                  <i className="bi bi-bookmark-fill">Grades</i>
                </CDBSidebarMenuItem>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/announcement" className="activeClicked">
                <CDBSidebarMenuItem disabled>
                  <i className="bi bi-globe-americas">Announcement</i>
                </CDBSidebarMenuItem>
              </Link>
            </Nav.Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
