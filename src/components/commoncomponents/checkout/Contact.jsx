import React from "react";
import clsx from "clsx";
// import { useFormikContext } from "formik";

const Contact = ({ formik }) => {
  // const formik = useFormikContext()
  return (
    <>
      <div className="input-item input-item-phone ">
        <input
          placeholder="contact Number"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("contact")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.contact && formik.errors.contact,
            },
            {
              "is-valid": formik.touched.contact && !formik.errors.contact,
            }
          )}
        />
        {formik.touched.contact && formik.errors.contact && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors.contact}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Contact;
