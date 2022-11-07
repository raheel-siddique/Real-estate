import React from "react";
import clsx from "clsx";

const FirstNameField = ({ formik }) => {
  return (
    <>
      <input
        id="ownname"
        placeholder="Name"
        type="text"
        autoComplete="off"
        {...formik.getFieldProps("firstName")}
        className={clsx(
          "form-control form-control-lg form-control-solid",
          {
            "is-invalid": formik.touched.firstName && formik.errors.firstName,
          },
          {
            "is-valid": formik.touched.firstName && !formik.errors.firstName,
          }
        )}
      />
      {formik.touched.firstName && formik.errors.firstName && (
        <div
          className="fv-plugins-message-container"
          style={{ position: "relative", bottom: 30 }}
        >
          <div className="fv-help-block text-danger">
            <span role="alert">{formik.errors.firstName}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstNameField;
