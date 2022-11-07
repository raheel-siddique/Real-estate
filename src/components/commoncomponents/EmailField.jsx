import React from "react";
import clsx from "clsx";

const EmailField = ({ formik }) => {
  return (
    <>
      <input
        placeholder="email"
        id="input-email"
        type="email"
        autoComplete="off"
        {...formik.getFieldProps("emailAddress")}
        className={clsx(
          "form-control form-control-lg form-control-solid",
          {
            "is-invalid":
              formik.touched.emailAddress && formik.errors.emailAddress,
          },
          {
            "is-valid":
              formik.touched.emailAddress && !formik.errors.emailAddress,
          }
        )}
      />
      {formik.touched.emailAddress && formik.errors.emailAddress && (
        <div
          className="fv-plugins-message-container"
          style={{ position: "relative", bottom: 30 }}
        >
          <div className="fv-help-block text-danger">
            <span role="alert">{formik.errors.emailAddress}</span>
          </div>
        </div>
      )}
    </>
  );
};
export default EmailField;
