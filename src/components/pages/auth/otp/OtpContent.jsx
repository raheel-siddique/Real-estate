import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// import OtpInput from "react-otp-input";
import FormikControl from "../../../commoncomponents/FormikControl";
import { useVerifyOtpMutation } from "../../../../services/auth";
import { toast } from "react-toastify";
import queryString from "query-string";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
const initialValues = {
  otp: "",
};
const forgetPasswordSchema = Yup.object({
  otp: Yup.string().required("otp is required"),
});

const OtpContent = () => {
  const { search } = useLocation();
  const { token } = queryString.parse(search);
  const history = useHistory();
  useEffect(() => {
    if (!token) {
      toast.error("You are visiting an invalid link");
      history.replace("/");
    }
    //eslint-disable-next-line
  }, []);

  const [verifyOtp, verifyOtpResponse] = useVerifyOtpMutation();

  const handleSubmit = async (values) => {
    await verifyOtp({ otp: values.otp, token });
  };

  useEffect(() => {
    if (verifyOtpResponse.isSuccess) {
      toast.success(verifyOtpResponse.data.Message);
      history.replace("/login");
    }
    //eslint-disable-next-line
  }, [verifyOtpResponse.isSuccess]);

  useEffect(() => {
    if (verifyOtpResponse.isError) {
      toast.error(verifyOtpResponse.error.data.errors[0].title);
    }
    //eslint-disable-next-line
  }, [verifyOtpResponse.isError]);

  return (
    <>
      <div className="ltn__login-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">OTP Verification</h1>
                <p>
                  Enter 6 digit OTP code here which is sent on your provided
                  email address then your account will be activated
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="account-login-inner">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={forgetPasswordSchema}
                >
                  {(formik) => (
                    <Form
                      className="ltn__form-box contact-form-box"
                      onSubmit={formik.handleSubmit}
                    >
                      <div className="col-lg-12">
                        <div className="input-item input-item-phone">
                          <FormikControl
                            control="input"
                            type="text"
                            name="otp"
                            formik={formik}
                            placeholder="Enter 6 digit code"
                          />
                        </div>
                      </div>
                      <div className="btn-wrapper text-center">
                        <button
                          className="theme-btn-1 btn reverse-color btn-block"
                          type="submit"
                        >
                          Verify Otp
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>

                {/* <div className="by-agree text-center">
                  <p>By creating an account, you agree to our:</p>
                  <p>
                    <a href="/#">
                      TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp; PRIVACY
                      POLICY
                    </a>
                  </p>
                  <div className="go-to-btn mt-50">
                    <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpContent;
