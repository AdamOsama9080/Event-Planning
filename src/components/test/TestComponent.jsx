import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Message from '../Message/Message';
import Profile from '../Profile/Profile';
import Organizer from '../Oraginzer/Organizer';
// import CreateEventForm from '../CreateEventForm/CreateEventForm';
import CreateEventForm from '../CreateEventForm';
import GeoLocation from '../GeoLocation/GeoLocation';

export default function TestComponent() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="messages" element={<Message />} />
          <Route path="profile" element={<Profile />} />
        </Routes> */}
        {/* <Dashboard/> */}
        {/* <Organizer></Organizer> */}
        {/* <GeoLocation></GeoLocation> */}
        <GeoLocation latitude={29.952654} longitude={30.921919} />

        {/* <CreateEventForm></CreateEventForm> */}
      </BrowserRouter>
      {/* <Geolocation></Geolocation> */}
      {/* <Organizer></Organizer> */}
    </>
  );
}
