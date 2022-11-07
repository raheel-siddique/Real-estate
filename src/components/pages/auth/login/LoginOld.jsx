import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Footer_v1 from "../../../global-components/footer";
import Navbar from "../../../global-components/navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../user/userSlice";
import Home from "../../home/Home";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [errors, setErrors] = useState({});
  const [requestError, setRequestError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  useEffect(() => {
    {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  let publicUrl = process.env.PUBLIC_URL + "/";

  const handleChange = (event, setter) => {
    if (event.target.type === "email" || event.target.type === "password") {
      setSubmitClicked(false);
      setter(event.target.value);
    } else if (event.target.type === "checkbox") {
      setSubmitClicked(false);
      setter((prev) => !prev);
    }
  };

  const displayErrors = () => {
    let errorsLength = 0;

    if (!/\S+@\S+\.\S+/.test(email)) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, email: "Email is required." };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, email: "" };
      });
    }
    if (!password) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, password: "Password Is Required." };
      });
    } else if (password.length < 8) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, password: "Password must be 8 characters at least." };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, password: "" };
      });
    }

    return errorsLength;
  };
  toast.configure();
  const handleLoginSubmit = async (e) => {
    // e.preventDefault();
    let errorsLength = displayErrors();

    if (errorsLength === 0) {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_BASE_URL}/api/auth/login`,
        data: {
          email,
          password,
        },
      })
        .then((response) => {
          let accessToken = response?.data?.included[0].attributes.token;
          let refreshToken = response?.data?.included[1].attributes.token;

          localStorage.setItem("access-token", accessToken);
          localStorage.setItem("refresh-token", refreshToken);
          dispatch(getCurrentUser(response.data));
          setLoginSuccess(true);
          Promise.resolve(response);
          if (response.status === 200 || response.status < 300);
          history.push("/");
          toast.success("you have signed in successfully");

          window.location.reload(false);
        })

        .catch((error) => {
          setRequestError(error.response.data.errors[0].title);
          toast.error(error.response.data.errors[0].title);

          Promise.reject(error);
        });
    }
  };
  // const handleLoginSubmit = () => {
  //   // toast("Wow so easy!");
  //   const errorOfAllFields = displayErrors();
  //   if (!errorOfAllFields) {
  //     loginUser({
  //       email,
  //       password,
  //     });
  //   }
  //   setRequestError(resposneInfo.error.response.data.errors[0].title);
  // };
  // function getDataLogin() {
  // if (resposneInfo.isSuccess) {
  //   history.push("/");

  //   toast.success("you have signed in successfully");

  //   window.location.reload(false);
  // }
  // }
  // getDataLogin();

  // const accessToken = resposneInfo?.data?.included[0].attributes.token;
  // const refreshToken = resposneInfo?.data?.included[1].attributes.token;

  // localStorage.setItem("access-token", accessToken);
  // localStorage.setItem("refresh-token", refreshToken);

  return (
    <div>
      <Navbar />

      {/* {resposneInfo.isSuccess && toast.success("wow")} */}

      {/* <PageHeader headertitle="Sign In" subheader="sign in" /> */}
      {loginSuccess === false && (
        <div className="ltn__login-area pb-65 pt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Sign In <br />
                    To Your Account
                  </h1>
                  <p>
                    Sign in to your account to buy fractionalized property on{" "}
                    <br />
                    Smart Crowd.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="account-login-inner">
                  <div className="ltn__form-box contact-form-box">
                    {submitClicked && errors.email && (
                      <p
                        className="error-message"
                        style={{
                          color: "red",
                          position: "relative",
                          top: 30,
                        }}
                      >
                        {errors.email}
                      </p>
                    )}

                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      onChange={(event) => {
                        handleChange(event, setEmail);
                      }}
                    />

                    {submitClicked && errors.password && (
                      <p
                        className="error-message"
                        style={{
                          color: "red",
                          position: "relative",
                          top: 30,
                        }}
                      >
                        {errors.password}
                      </p>
                    )}
                    <input
                      className="password-input forpassword"
                      type="password"
                      name="password"
                      placeholder="Password*"
                      onChange={(event) => {
                        handleChange(event, setPassword);
                      }}
                    />

                    {/* {submitClicked && requestError && (
                    <p
                      className="error-message"
                      style={{ color: "red", position: "relative", top: 30 }}
                    >
                      {requestError}
                    </p>
                  )} */}
                    <div className="btn-wrapper mt-0">
                      {email && password && loginSuccess === false ? (
                        <button
                          className="theme-btn-1 btn btn-block"
                          type="submit"
                          onClick={(e) => {
                            setSubmitClicked((prev) => true);
                            handleLoginSubmit();
                          }}
                        >
                          SIGN IN
                        </button>
                      ) : (
                        <button
                          disabled
                          className="theme-btn-1 btn btn-block"
                          type="submit"
                        >
                          SIGN IN
                        </button>
                      )}
                      {/* {loginSuccess === true && <button>Loading</button>} */}
                    </div>
                    <div className="go-to-btn mt-20">
                      <a href="#">
                        <small>FORGOTTEN YOUR PASSWORD?</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="account-create email-center pt-50">
                  <h4>DON'T HAVE AN ACCOUNT?</h4>
                  <p>
                    Add items to your wishlistget personalised recommendations{" "}
                    <br />
                    check out more quickly track your orders register
                  </p>
                  <div className="btn-wrapper go-top">
                    <Link to="/register" className="theme-btn-1 btn black-btn">
                      CREATE ACCOUNT
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* {loginSuccess && <Navigate to="/" />} */}
          </div>
        </div>
      )}

      {/* <Footer /> */}
      <Footer_v1 />
    </div>
  );
};

export default Login;
