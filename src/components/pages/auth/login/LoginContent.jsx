import React from "react";
import { Link } from "react-router-dom";
import EmailField from "../../../commoncomponents/EmailField";
import PasswordField from "../../../commoncomponents/PasswordField";

const LoginContent = ({ isLoading, formik }) => {
  return (
    <>
      <form
        className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
        noValidate
        id="kt_login_signup_form"
        onSubmit={formik.handleSubmit}
      >
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
                    <EmailField formik={formik} />
                    <PasswordField formik={formik} />
                    <div className="text-center btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        disabled={formik.isSubmitting || !formik.isValid}
                      >
                        {!isLoading && (
                          <span className="indicator-label">Login</span>
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
                    <div className="go-to-btn mt-20">
                      <Link to="/forget-password">
                        FORGOTTEN YOUR PASSWORD?
                      </Link>
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
          </div>
        </div>
      </form>
    </>
  );
};
export default LoginContent;
