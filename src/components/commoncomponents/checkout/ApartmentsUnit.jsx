import React from "react";
import clsx from "clsx";

const ApartmentUnits = ({ formik }) => {
  return (
    <>
      <div className="input-item input-item-phone ">
        <input
          placeholder="Apartment, suite, unit etc. (optional)"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("units")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.units && formik.errors.units,
            },
            {
              "is-valid": formik.touched.units && !formik.errors.units,
            }
          )}
        />
        {formik.touched.units && formik.errors.units && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors.units}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default ApartmentUnits;
