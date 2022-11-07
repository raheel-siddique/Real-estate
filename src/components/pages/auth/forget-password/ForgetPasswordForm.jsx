import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useForgetPasswordMutation } from "../../../../services/auth";
import EmailField from "../../../commoncomponents/EmailField";
import { toast } from "react-toastify";

toast.configure();

const forgetPasswordSchema = Yup.object({
  emailAddress: Yup.string().email("Wrong Email").required("Email is required"),
});

const ForgetPasswordForm = () => {
  const [forgetPassword, forgetPasswordResponse] = useForgetPasswordMutation();
  const handleSubmit = async (values, { resetForm }) => {
    const token = localStorage.getItem("access-token");
    await forgetPassword({ email: values.emailAddress, token });
    resetForm();
  };

  useEffect(() => {
    if (forgetPasswordResponse.isSuccess) {
      const data = forgetPasswordResponse.data;
      toast.success(data.Message);
    }
    // eslint-disable-next-line
  }, [forgetPasswordResponse.isSuccess]);

  useEffect(() => {
    if (forgetPasswordResponse.isError) {
      const error = forgetPasswordResponse.error;
      toast.error(error.data.errors[0].title);
    }
    // eslint-disable-next-line
  }, [forgetPasswordResponse.isError]);

  return (
    <div className="ltn__login-area pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 className="section-title">Forget Password</h1>
              <p>
                Enter the email associated with your account. <br />
                we will send an email with instructions <br />
                to reset your passowrd
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-login-inner">
              <Formik
                initialValues={{ emailAddress: "" }}
                onSubmit={handleSubmit}
                validationSchema={forgetPasswordSchema}
              >
                {(formik) => (
                  <form
                    className="ltn__form-box contact-form-box"
                    onSubmit={formik.handleSubmit}
                  >
                    <EmailField formik={formik} />
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="submit"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                )}
              </Formik>

              <div className="by-agree text-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
