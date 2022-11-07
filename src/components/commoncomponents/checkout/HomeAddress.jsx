import React from "react";
import clsx from "clsx";

const HomeAddress = ({ formik }) => {
  return (
    <>
      <div className="input-item input-item-phone ">
        <input
          placeholder="House number and street name"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("homeAddress")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid":
                formik.touched.homeAddress && formik.errors.homeAddress,
            },
            {
              "is-valid":
                formik.touched.homeAddress && !formik.errors.homeAddress,
            }
          )}
        />
        {formik.touched.homeAddress && formik.errors.homeAddress && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors.homeAddress}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default HomeAddress;
