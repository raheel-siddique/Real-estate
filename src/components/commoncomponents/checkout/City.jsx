import React from "react";
import clsx from "clsx";

const City = ({ formik }) => {
  return (
    <>
      <div className="input-item input-item-phone ">
        <input
          placeholder="City"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("city")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.city && formik.errors.city,
            },
            {
              "is-valid": formik.touched.city && !formik.errors.city,
            }
          )}
        />
        {formik.touched.city && formik.errors.city && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors.city}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default City;
