import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const endPoints = {
  user: ["/allevents", "/", "/colledge-events"],
  organizer: ["/colledge-events", "/", "/create-event"],
};

export const authContextProvider = createContext();

const AuthProvider = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  const [isLogined, setIsLogind] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role && endPoints[user.role]) {
      if (endPoints[user.role].includes(location.pathname)) {
        setIsLogind(true);
      } else {
        localStorage.removeItem("user");
        navigate("/signin");
      }
    } else {
      navigate("/signin");
    }
  }, [location, navigate]);

  return (
    <authContextProvider.Provider value={{ isLogined, setIsLogind }}>
      {children}
    </authContextProvider.Provider>
  );
};

export default AuthProvider;
