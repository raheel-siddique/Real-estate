import React, { useEffect } from "react";
import ConfirmPassword from "../../../commoncomponents/ConfirmPassword";
import PasswordField from "../../../commoncomponents/PasswordField";
import { Formik } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "../../../../services/auth";
const changePasswordSchema = Yup.object({
  password: Yup.string().required("password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
});
toast.configure();
const ChangePasswordForm = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const { search } = useLocation();
  const { token } = queryString.parse(search);
  const history = useHistory();
  if (!token) {
    history.replace(
      "/forget-password-error?message=The Token isn't provided or is Invalid. Please Try again"
    );
  }

  const [resetPassword, resetPasswordResponse] = useResetPasswordMutation();

  const handleSubmit = async (values, { resetForm }) => {
    if (values.confirmPassword !== values.password) {
      toast.error("Passwords doesn't match");
      return;
    }
    await resetPassword({ token, password: values.password });
    resetForm();
  };

  useEffect(() => {
    if (resetPasswordResponse.isSuccess) {
      const data = resetPasswordResponse.data;
      toast.success(data.Message);
      history.replace("/login");
    }
    // eslint-disable-next-line
  }, [resetPasswordResponse.isSuccess]);

  useEffect(() => {
    if (resetPasswordResponse.isError) {
      const error = resetPasswordResponse.error;
      toast.error(error.data.errors[0].title);
    }
    // eslint-disable-next-line
  }, [resetPasswordResponse.isError]);

  return (
    <div className="ltn__login-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">Change Password</h1>
              <p>
                Thats'okay it happens! Click on the button <br />
                below to reset your password
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <Formik
                validationSchema={changePasswordSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <form
                    className="ltn__form-box contact-form-box"
                    onSubmit={formik.handleSubmit}
                  >
                    <PasswordField formik={formik} />
                    <ConfirmPassword formik={formik} />
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="submit"
                      >
                        CHANGE
                      </button>
                    </div>
                  </form>
                )}
              </Formik>

              <div className="by-agree text-center">
                <p>By creating an account, you agree to our:</p>
                <p>
                  <a href="/terms">TERMS OF CONDITIONS </a> &nbsp; &nbsp; |
                  &nbsp; &nbsp;<a href="/privacy-policy"> PRIVACY POLICY</a>
                </p>
                <div className="go-to-btn mt-50">
                  <a href="login.html">ALREADY HAVE AN ACCOUNT ?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
