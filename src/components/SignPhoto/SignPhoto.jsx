import React from "react";
import { useTranslation } from "react-i18next";
import signInbackgroundImg from "../../imgs/SignInBackgroundImage.svg";
import signUpBackgroundImg from "../../imgs/SignUpBackgroundImage.svg";
import { Link } from "react-router-dom";
import "./SignPhoto.css";

const SignPhoto = ({ signType }) => {
  const { t } = useTranslation();

  return (
    <div
      className="container-fluid vh-100"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${
          signType === "in" ? signInbackgroundImg : signUpBackgroundImg
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-10 text-center">
          <h1 className="mb-5" style={{ color: "white" }}>
            {signType === "in"
              ? t("signIn.welcomeBack")
              : t("signIn.helloFriend")}
          </h1>
          <p className="mb-5" style={{ color: "white" }}>
            {t("signIn.keepConnected")}
          </p>
          <button
            style={{ height: "49px" }}
            className="btn btn-secondary sign-photo-btn"
          >
            <Link
              className="d-block w-100"
              style={{ textDecoration: "none", color: "white" }}
              to={`/sign-${signType === "in" ? "up" : "in"}`}
            >
              {t(signType === "in" ? "buttons.signUp" : "buttons.signIn")}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignPhoto;
