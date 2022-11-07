import React from "react";
import clsx from "clsx";

const CompanyName = ({ formik }) => {
  return (
    <>
      <div className="input-item input-item-phone ">
        <input
          placeholder="Company Name"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("companyName")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid":
                formik.touched.companyName && formik.errors.companyName,
            },
            {
              "is-valid":
                formik.touched.companyName && !formik.errors.companyName,
            }
          )}
        />
        {formik.touched.companyName && formik.errors.companyName && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors.companyName}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CompanyName;
