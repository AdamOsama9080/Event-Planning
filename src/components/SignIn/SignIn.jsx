import React, { useContext, useState } from "react";
import colors from "../../colors";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authContextProvider } from "../../contexts/AuthProvider";
import { jwtDecode } from "jwt-decode";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const validation = {
    email: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
    password: /.{8,}/,
  };
  const { isLogined, setIsLogind } = useContext(authContextProvider);
  const naviagate = useNavigate();
  const [isExist, setIsExist] = useState(false);
  const [emailOrPassword, setEmailOrPassword] = useState(false);
  const handleOnChange = (eve) => {
    const { name, value } = eve.target;
    console.log(name);
    console.log(value);
    setUser((oldu) => ({ ...oldu, [name]: value }));
    console.log(user);
  };

  const handleOnSubmit = (eve) => {
    eve.preventDefault();

    axios.get("http://localhost:2000/users").then((res) => {
      let usr = res.data.find((u) => u.email === user.email);
      if (usr) {
        if (usr.password === user.password) {
          localStorage.setItem("user", JSON.stringify(usr));
          setIsLogind(true);
          naviagate("/");
        } else {
          setEmailOrPassword(true);
        }
      } else {
        setEmailOrPassword(true);
      }
    });
  };
  return (
    <div className="container">
      {isExist && <div className="alert alert-danger">this email is exist</div>}
      {emailOrPassword && (
        <div className="alert alert-danger">email or password</div>
      )}
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className={
              "form-control " +
              (user.email.length &&
                (validation.email.test(user.email)
                  ? "is-valid "
                  : "is-invalid "))
            }
            id="email"
            name="email"
            onChange={handleOnChange}
            value={user.email}
          ></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            className={
              "form-control " +
              (user.password.length &&
                (validation.password.test(user.password)
                  ? "is-valid "
                  : "is-invalid "))
            }
            id="password"
            name="password"
            onChange={handleOnChange}
            value={user.password}
          ></input>
        </div>

        <button
          className="btn my-2"
          style={{
            backgroundColor: colors.primaryColor,
            color: colors.whiteColor,
          }}
          disabled={
            !(
              validation.email.test(user.email) &&
              validation.password.test(user.password)
            )
          }
        >
          SignIn
        </button>
      </form>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const { name, email } = jwtDecode(credentialResponse.credential);
          localStorage.setItem(
            "user",
            JSON.stringify({ name, email, role: "user" })
          );
          setIsLogind(true);
          naviagate("/");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      ></GoogleLogin>
    </div>
  );
};

export default SignIn;
