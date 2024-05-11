import React, { useState } from "react";
import colors from "../../colors";
import FormControlInput from "../FormControlInput/FormControlInput";
import googleLogo from "../../imgs/GoogleLogo.svg";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import "./SignForm.css";
import ToggleLanguageButton from "./ToggleLanguageButton";
import CustomButton from "../CustomButton";
import { GoogleLogin } from "@react-oauth/google";

export default function SignForm({ signType }) {
  const [t, i18n] = useTranslation();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Here you can add the logic to handle form submission, including API calls, validation, etc.
  };

  return (
    <div
      className="container col-10 col-md-7 d-flex flex-column justify-content-between"
      style={{ height: signType === "in" ? "64vh" : "78vh" }}
    >
      <ToggleLanguageButton />
      <h4 className="title mx-auto">
        Event <span style={{ color: colors.primaryColor }}>Hive</span>
      </h4>
      <h2
        className="title mx-auto"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        {signType === "in" ? t("signIn.signIn") : t("signIn.signUp")}{" "}
        {t("signIn.toEventHive")}
      </h2>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-md-8 d-flex flex-column justify-content-between">
          <FormControlInput
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            key={uuid()}
            label={t("signIn.yourEmail")}
            placeholder={t("signIn.enterEmail")}
            type="text"
            name="email"
            value={form.email}
            handleOnChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <FormControlInput
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            key={uuid()}
            label={t("signIn.password")}
            placeholder={t("signIn.enterPassword")}
            type="password"
            name="password"
            value={form.password}
            handleOnChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <button
            className="btn btn-primary btn-block d-block mx-auto col-5 mt-5"
            style={{
              backgroundColor: colors.primaryColor,
              border: "none",
              height: "40px",
            }}
            disabled={!form.email || !form.password}
          >
            {signType === "in" ? t("signIn.signIn") : t("signIn.signUp")}
          </button>
        </div>
      </form>
      <p className="text-center" style={{ color: "grey", margin: "0" }}>
        {t("messages.or")}
      </p>
      <button
        style={{
          backgroundColor: "white",
          height: "46px",
          fontWeight: "600",
          border: `1px solid #E0E0E9`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "300px",
          margin: "20px 0",
        }}
      >
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            // Handle successful Google login
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </button>
    </div>
  );
}
