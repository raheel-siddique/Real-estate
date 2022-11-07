import React from "react";
import clsx from "clsx";
// import { useFormikContext } from "formik";

const CompanyAddress = ({ formik }) => {
  return (
    <>
      <div className="input-item input-item-phone ">
        <input
          placeholder="Company address (optional)"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("companyAddress")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid":
                formik.touched.companyAddress && formik.errors.companyAddress,
            },
            {
              "is-valid":
                formik.touched.companyAddress && !formik.errors.companyAddress,
            }
          )}
        />
        {formik.touched.companyAddress && formik.errors.companyAddress && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors.companyAddress}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CompanyAddress;
