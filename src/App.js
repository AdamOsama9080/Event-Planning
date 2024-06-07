import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/Footer";
import CreateEvent from "./pages/CreateEvent";
import ColledgeEvents from "./pages/ColledgeEvents";
import AllEvents from "./pages/AllEvents";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/404/NotFound";
import AuthProvider from "./contexts/AuthProvider";
import Organizer from "./components/Oraginzer/Organizer";
import Sign from "./pages/Sign";
import HomePage from "./components/HomePage";
import SearchContextProvider from "./contexts/SearchContext";
import EventsContextProvider from "./contexts/EventContext";
import About from "./components/About";
import Terms_Conditions from "./components/Terms_Conditions";
import HomeEvent from "./pages/HomeEvent";
import HomeCollege from "./pages/HomeCollege";
import Dashboard from "./components/Dashboard/Dashboard";
import Message from "./components/Message/Message";
import Card from "./components/Card/card";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <SearchContextProvider>
            <EventsContextProvider>
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="signin" element={<SignIn></SignIn>} />
                <Route path="signup" element={<SignUp></SignUp>} />
                <Route path="sign-in" element={<Sign signType="in" />} />
                <Route path="sign-up" element={<Sign signType="up" />} />
                <Route path="create-event" element={<CreateEvent />} />
                <Route path="home-event" element={<HomeEvent />} />
                <Route path="home-college" element={<HomeCollege />} />
                <Route
                  path="colledge-events"
                  element={<ColledgeEvents></ColledgeEvents>}
                />
                <Route path="organizer" element={<Organizer />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="event" element={<Card />} />
                  <Route path="message" element={<Message />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/terms" element={<Terms_Conditions />}></Route>
                <Route path="allevents" element={<AllEvents></AllEvents>} />
                <Route path="*" element={<NotFound></NotFound>} />
              </Routes>
              <Footer />
            </EventsContextProvider>
          </SearchContextProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
