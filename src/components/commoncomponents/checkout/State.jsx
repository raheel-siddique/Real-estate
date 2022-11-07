import React from "react";
import clsx from "clsx";

const State = ({ formik }) => {
  return (
    <>
      <div className="input-item input-item-phone ">
        <input
          placeholder="State"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("state")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.state && formik.errors.state,
            },
            {
              "is-valid": formik.touched.state && !formik.errors.state,
            }
          )}
        />
        {formik.touched.state && formik.errors.state && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors.state}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default State;
