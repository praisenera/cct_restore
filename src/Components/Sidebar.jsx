import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div
        className="sidebar"
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Home
            </a>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="#" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Schedule</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="#" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Grades</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="#" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">
                  Announcement
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </>
  );
};

export default Sidebar;
