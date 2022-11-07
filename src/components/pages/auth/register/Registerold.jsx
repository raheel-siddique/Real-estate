import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css";
import Footer_v1 from "../../../global-components/footer";
import Navbar from "../../../global-components/navbar";

toast.configure();
const Register = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  // const dispatch = useDispatch();
  const history = useHistory();
  const [createUser, { data, isSuccess, isError, error, isLoading }] =
    useAddUserMutation();
  let [email, setEmail] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [isUSCitizen, setIsUSCitizen] = useState(false);
  let [agreeTermsAndConditions, setAgreeTermsAndConditions] = useState(false);
  let [submitClicked, setSubmitClicked] = useState(false);
  let [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
  let [errors, setErrors] = useState({});
  // toast.configure();
  const handleChange = (event, setter) => {
    if (
      event.target.type === "text" ||
      event.target.type === "email" ||
      event.target.type === "password"
    ) {
      setSubmitClicked(false);
      setter(event.target.value);
    } else if (event.target.type === "checkbox") {
      setSubmitClicked(false);
      setter((prev) => !prev);
    }
  };

  const displayErrors = () => {
    let errorsLength = 0;

    if (firstName.length === 0) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, firstName: "First Name is required." };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, firstName: "" };
      });
    }
    if (lastName.length === 0) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, lastName: "Last Name is required." };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, lastName: "" };
      });
    }
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
    if (password.length < 8) {
      errorsLength += 1;
      setErrors((prev) => {
        return { ...prev, password: "Password must be 8 characters at least." };
      });
    } else {
      setErrors((prev) => {
        return { ...prev, password: "" };
      });
    }
    if (password !== confirmPassword) {
      errorsLength += 1;
      setErrors((prev) => {
        return {
          ...prev,
          confirmPassword: "Confirmed password does not match.",
        };
      });
    } else if (!confirmPassword) {
      setErrors((prev) => {
        return {
          ...prev,
          confirmPassword: "Confirmed password Is Required.",
        };
      });
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          confirmPassword: "",
        };
      });
    }
    if (!agreeTermsAndConditions) {
      errorsLength += 1;
      setErrors((prev) => {
        return {
          ...prev,
          agreeTermsAndConditions:
            "To register you will have to agree with our terms and conditions.",
        };
      });
    } else {
      setErrors((prev) => {
        return {
          ...prev,
          agreeTermsAndConditions: "",
        };
      });
    }

    return errorsLength;
  };

  const newFunct = () => {
    var errormy = displayErrors();
    if (!errormy) {
      createUser({
        email: email,
        firstName: firstName,
        lastName: lastName,
        isUsCitizen: isUSCitizen,
        password: password,
      });
    }
  };
  if (isSuccess) {
    history.push("/login");
    toast.success("User Registered Successfully");
  }
  // if (isError) {
  // }
  return (
    <>
      <Navbar />

      <div className="ltn__login-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Register <br />
                  Your Account
                </h1>
                <p>
                  Create an account to buy fractionalized Crowd. <br />
                  property on Smart.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="account-login-inner">
                <div className="ltn__form-box contact-form-box">
                  {submitClicked && errors.firstName && (
                    <p
                      style={{ color: "red", position: "relative", top: 30 }}
                      className="error-message"
                    >
                      {errors.firstName}
                    </p>
                  )}
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name*"
                    onChange={(event) => handleChange(event, setFirstName)}
                    // onBlur={displayErrors}
                  />

                  {submitClicked && errors.lastName && (
                    <p
                      className="error-message"
                      style={{ color: "red", position: "relative", top: 30 }}
                    >
                      {errors.lastName}
                    </p>
                  )}
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name*"
                    onChange={(event) => handleChange(event, setLastName)}
                  />

                  {submitClicked && errors.email && (
                    <p
                      className="error-message"
                      style={{ color: "red", position: "relative", top: 30 }}
                    >
                      {errors.email}
                    </p>
                  )}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    onChange={(event) => handleChange(event, setEmail)}
                  />

                  {submitClicked && errors.password && (
                    <p
                      className="error-message"
                      style={{ color: "red", position: "relative", top: 30 }}
                    >
                      {errors.password}
                    </p>
                  )}
                  <input
                    className="password-input forpassword"
                    type="password"
                    name="password"
                    placeholder="Password*"
                    onChange={(event) => handleChange(event, setPassword)}
                  />

                  {submitClicked && errors.confirmPassword && (
                    <p
                      className="error-message"
                      style={{ color: "red", position: "relative", top: 30 }}
                    >
                      {errors.confirmPassword}
                    </p>
                  )}
                  <input
                    className="password-input forpassword"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password*"
                    onChange={(event) =>
                      handleChange(event, setConfirmPassword)
                    }
                  />

                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      defaultValue
                      onChange={(event) => handleChange(event, setIsUSCitizen)}
                    />{" "}
                    &nbsp; Are you a resident of US or its territories?
                  </label>

                  {submitClicked && errors.agreeTermsAndConditions && (
                    <p
                      className="error-message"
                      style={{ color: "red", position: "relative", top: 30 }}
                    >
                      {errors.agreeTermsAndConditions}
                    </p>
                  )}
                  <label className="checkbox-inline">
                    <input
                      type="checkbox"
                      defaultValue
                      onChange={(event) =>
                        handleChange(event, setAgreeTermsAndConditions)
                      }
                    />{" "}
                    &nbsp; By clicking "create account", I consent to the
                    privacy policy.
                  </label>

                  <div className="btn-wrapper">
                    {firstName &&
                    lastName &&
                    password &&
                    confirmPassword &&
                    email ? (
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={(e) => {
                          setSubmitClicked((prev) => true);
                          newFunct();

                          // handleFormSubmit();
                        }}
                      >
                        {/* CREATE ACCOUNT */}
                        {isLoading ? (
                          <>
                            <div
                              className="spinner-border spinner-border-sm"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                            <div
                              className="spinner-grow spinner-grow-sm"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          </>
                        ) : (
                          "Create Account"
                        )}
                      </button>
                    ) : (
                      <button
                        disabled
                        className="theme-btn-1 btn reverse-color btn-block "
                        onClick={(e) => {
                          setSubmitClicked((prev) => true);
                        }}
                      >
                        CREATE ACCOUNT
                      </button>
                    )}
                  </div>
                </div>
                {isError && (
                  <div class="alert alert-danger" role="alert">
                    {error
                      ? error?.data?.errors[0].title
                      : "check You Network Connection"}
                  </div>
                )}
                {/* {error?.data?.errors[0].title} */}

                <div className="by-agree text-center">
                  <p>By creating an account, you agree to our:</p>
                  <p>
                    <a href="#">
                      TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                      POLICY
                    </a>
                  </p>
                  <div className="go-to-btn mt-50">
                    <a href="/login">ALREADY HAVE AN ACCOUNT ?</a>
                    <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {registrationSuccess && <Navigate to="/" />} */}
        </div>
      </div>
      <Footer_v1 />
    </>
  );
};

export default Register;
