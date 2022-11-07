import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import PasswordField from "../../../commoncomponents/PasswordField";
import EmailField from "../../../commoncomponents/EmailField";
import FirstNameField from "../../../commoncomponents/FirstNameField";
import LastNameField from "../../../commoncomponents/LastNameField";
import ConfirmPassword from "../../../commoncomponents/ConfirmPassword";

const RegisterContent = ({
  formik,
  handleChange,
  setIsUSCitizen,
  isError,
  error,
  isLoading,
}) => {
  return (
    <>
      <form
        className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
        noValidate
        id="kt_login_signup_form"
        onSubmit={formik.handleSubmit}
      >
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
                    Create an account to buy fractionalized <br />
                    property on Smart Crowd.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="account-login-inner">
                  <div className="ltn__form-box contact-form-box">
                    <FirstNameField formik={formik} />
                    <LastNameField formik={formik} />
                    <EmailField formik={formik} />
                    <PasswordField formik={formik} />

                    <ConfirmPassword formik={formik} />

                    <label className="checkbox-inline">
                      <input
                        type="checkbox"
                        defaultValue
                        onChange={(event) =>
                          handleChange(event, setIsUSCitizen)
                        }
                      />{" "}
                      &nbsp; Are you a resident of US or its territories?
                    </label>

                    <div className="text-center btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        disabled={formik.isSubmitting || !formik.isValid}
                      >
                        {!isLoading && (
                          <span className="indicator-label">Register</span>
                        )}
                        {isLoading && (
                          <span
                            className="indicator-progress"
                            style={{ display: "block" }}
                          >
                            Please wait...
                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                  {isError && (
                    <div class="alert alert-danger" role="alert">
                      {error
                        ? error?.data?.errors[0].title
                        : "check You Network Connection"}
                    </div>
                  )}

                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <a href="/terms">TERMS OF CONDITIONS </a> &nbsp; &nbsp; |
                      &nbsp; &nbsp;{" "}
                      <a href="/privacy-policy"> PRIVACY POLICY</a>
                    </p>
                    <div className="go-to-btn mt-50">
                      <a href="/otp-verification">Email verified ?</a>
                      <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default RegisterContent;
