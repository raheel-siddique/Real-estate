import React from "react";
import clsx from "clsx";

const LastNameField = ({ formik }) => {
  return (
    <>
      <input
        id="input-last-name"
        placeholder="Last Name"
        type="text"
        autoComplete="off"
        {...formik.getFieldProps("lastName")}
        className={clsx(
          "form-control form-control-lg form-control-solid",
          {
            "is-invalid": formik.touched.lastName && formik.errors.lastName,
          },
          {
            "is-valid": formik.touched.lastName && !formik.errors.lastName,
          }
        )}
      />
      {formik.touched.lastName && formik.errors.lastName && (
        <div
          className="fv-plugins-message-container"
          style={{ position: "relative", bottom: 30 }}
        >
          <div className="fv-help-block text-danger">
            <span role="alert">{formik.errors.lastName}</span>
          </div>
        </div>
      )}
    </>
  );
};
export default LastNameField;
