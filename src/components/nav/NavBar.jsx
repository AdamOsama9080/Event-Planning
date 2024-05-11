import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../logo/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import colors from "../../colors";
import ToggleLanguageButton from "../SignForm/ToggleLanguageButton";
import { authContextProvider } from "../../contexts/AuthProvider";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { isLogined, setIsLogind } = useContext(authContextProvider);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  if (currentPath === "/sign-in" || currentPath === "/sign-up") {
    return null;
  }

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <Logo></Logo>
        </Navbar.Brand>

        {isLogined &&
          (JSON.parse(localStorage.getItem("user")).role === "user" ? (
            <Nav className="m-auto">
              <Nav.Link as={Link} to={"/"}>
                {t("navbar.home")}
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="m-auto">
              <Nav.Link
                as={Link}
                to={"/organizer/dashboard"}
                style={{
                  color: colors.whiteColor,
                  backgroundColor: colors.primaryColor,
                  borderRadius: "8px",
                }}
              >
                {t("navbar.dashboard")}
              </Nav.Link>
            </Nav>
          ))}
        <Nav className="ml-auto">
          {!isLogined && (
            <Link
              to="/signin"
              className="btn btn-light mx-2"
              style={{ width: i18n.language === "ar" ? "160px" : null }}
            >
              {t("navbar.login")}
            </Link>
          )}
          {!isLogined && (
            <Link
              to="/signup"
              className="btn"
              style={{
                backgroundColor: colors.primaryColor,
                color: colors.whiteColor,
              }}
            >
              {t("navbar.signup")}
            </Link>
          )}
          {isLogined && (
            <button
              className="btn btn-light mx-2"
              onClick={() => {
                localStorage.removeItem("user");
                setIsLogind(false);
                navigate("/signin");
              }}
            >
              {t("navbar.logout")}
            </button>
          )}
          <ToggleLanguageButton />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
