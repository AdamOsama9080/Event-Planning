import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white text-center">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link
          to="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span
            className="fs-5 d-none d-sm-inline fw-bold text-cener p-2"
            style={{ color: "rgba(120, 72, 244, 1)" }}
          >
            Event Hive
          </span>
        </Link>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100 "
          id="menu"
        >
          <li className="nav-item w-100">
            <Link
              to="dashboard"
              className={`nav-link align-middle p-2 text-start mb-1   ${
                activeLink === "Dashboard" ? "active" : ""
              }`}
              style={{
                color: activeLink === "Dashboard" ? "white" : "black",
                backgroundColor:
                  activeLink === "Dashboard" ? "rgba(120, 72, 244, 1)" : "",
                width: "100%",
              }}
              onClick={() => handleLinkClick("Dashboard")}
            >
              <i className="fs-5 bi-speedometer2"></i>{" "}
              <span className="fw-bold ms-1 d-none d-sm-inline">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link
              to="event"
              className={`nav-link align-middle p-2 text-start mb-1 ${
                activeLink === "Events" ? "active" : ""
              }`}
              style={{
                color: activeLink === "Events" ? "white" : "black",
                backgroundColor:
                  activeLink === "Events" ? "rgba(120, 72, 244, 1)" : "",
                width: "100%",
              }}
              onClick={() => handleLinkClick("Events")}
            >
              <i className="fs-5 bi-calendar2-event"></i>{" "}
              <span className="fw-bold ms-1 d-none d-sm-inline">Events</span>
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link
              to="message"
              className={`nav-link align-middle p-2 text-start mb-1 ${
                activeLink === "Messages" ? "active" : ""
              }`}
              style={{
                color: activeLink === "Messages" ? "white" : "black",
                backgroundColor:
                  activeLink === "Messages" ? "rgba(120, 72, 244, 1)" : "",
                width: "100%",
              }}
              onClick={() => handleLinkClick("Messages")}
            >
              <i className="fs-5 bi-envelope"></i>{" "}
              <span className="fw-bold ms-1 d-none d-sm-inline">Messages</span>
            </Link>
          </li>
          <li className="nav-item w-100">
            <Link
              to="profile"
              className={`nav-link align-middle p-2 text-start mb-1 ${
                activeLink === "Profile" ? "active" : ""
              }`}
              style={{
                color: activeLink === "Profile" ? "white" : "black",
                backgroundColor:
                  activeLink === "Profile" ? "rgba(120, 72, 244, 1)" : "",
                width: "100%",
              }}
              onClick={() => handleLinkClick("Profile")}
            >
              <i className="fs-5 bi-person"></i>{" "}
              <span className="fw-bold ms-1 d-none d-sm-inline">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
