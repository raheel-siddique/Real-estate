import React from "react";
import clsx from "clsx";

const Zip = ({ formik }) => {
  return (
    <>
      <div className="input-item input-item-phone ">
        <input
          placeholder="Zip"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("zip")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.zip && formik.errors.zip,
            },
            {
              "is-valid": formik.touched.zip && !formik.errors.zip,
            }
          )}
        />
        {formik.touched.zip && formik.errors.zip && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors.zip}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Zip;
