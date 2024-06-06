import React, { useContext, useState } from "react";
import colors from "../../colors";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authContextProvider } from "../../contexts/AuthProvider";
import { jwtDecode } from "jwt-decode";
// import colors from "../../colors";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const validation = {
    email: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
    password: /.{8,}/,
  };
  const { isLogined, setIsLogind } = useContext(authContextProvider);
  const navigate = useNavigate();
  const [isExist, setIsExist] = useState(false);
  const [emailOrPassword, setEmailOrPassword] = useState(false);
  
  const handleOnChange = (eve) => {
    const { name, value } = eve.target;
    setUser((oldUser) => ({ ...oldUser, [name]: value }));
  };

  const handleOnSubmit = (eve) => {
    eve.preventDefault();

    axios.get("https://json-server-event-planning-tool.onrender.com/users").then((res) => {
      let usr = res.data.find((u) => u.email === user.email);
      if (usr) {
        if (usr.password === user.password) {
          localStorage.setItem("user", JSON.stringify(usr));
          setIsLogind(true);
          navigate("/");
        } else {
          setEmailOrPassword(true);
        }
      } else {
        setEmailOrPassword(true);
      }
    });
  };

  return (
    <section className="vh-80">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            {/* <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: "#709085" }}></i>
              {/* <span className="h1 fw-bold mb-0">Logo</span> 
            </div> */}

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: '23rem' }} onSubmit={handleOnSubmit}>
                <h2 className="fw-normal mb-3 pb-3 fw-bold" >Log in</h2>
                <div className="form-outline mb-4">
                  <input type="email" id="form2Example18" className={`form-control form-control-lg ${user.email.length && (validation.email.test(user.email) ? 'is-valid' : 'is-invalid')}`} name="email" onChange={handleOnChange} value={user.email} />
                  <label className="form-label" htmlFor="form2Example18">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form2Example28" className={`form-control form-control-lg ${user.password.length && (validation.password.test(user.password) ? 'is-valid' : 'is-invalid')}`} name="password" onChange={handleOnChange} value={user.password} />
                  <label className="form-label" htmlFor="form2Example28">Password</label>
                </div>

                <div className="pt-1 mb-4">
                <button className="w-75 text-center p-2 text-white fw-bold rounded cursor-pointer" type="submit" style={{ backgroundColor: colors.primaryColor }} disabled={!validation.email.test(user.email) || !validation.password.test(user.password)}>Login</button>
                </div>
                <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>
              </form>

              
            </div>
              <div className="col-6 w-75">
              <GoogleLogin
                clientId="YOUR_CLIENT_ID_HERE"
                buttonText="Sign in with Google"
                onSuccess={(response) => {
                  const { name, email } = jwtDecode(response.credential);
                  localStorage.setItem(
                    "user",
                    JSON.stringify({ name, email, role: "user" })
                  );
                  setIsLogind(true);
                  navigate("/");
                }}
                onFailure={() => {
                  console.log("Google sign-in failed");
                }}
                className="btn btn-danger btn-lg btn-block w-100"
              />
              </div>
          </div>

          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
