import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Message from "../Message/Message";
import Profile from "../Profile/Profile";
import Card from "../Card/card";
export default function Organizer() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/event" element={<Card></Card>} />
          <Route path="/message" element={<Message></Message>} />
          <Route path="/profile" element={<Profile></Profile>} />
        </Routes>
      </div>
    </div>
  );
}
