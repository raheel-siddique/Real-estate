import React from "react";
import clsx from "clsx";

const OrderNotes = ({ formik }) => {
  return (
    <>
      <div className="input-item input-item-textarea ltn__custom-icon">
        <textarea
          name="ltn__message"
          placeholder="Notes about your order, e.g. special notes for delivery."
          {...formik.getFieldProps("orderNotes")}
          className={clsx(
            "",
            {
              "is-invalid":
                formik.touched.orderNotes && formik.errors.orderNotes,
            },
            {
              "is-valid":
                formik.touched.orderNotes && !formik.errors.orderNotes,
            }
          )}
        />
        {formik.touched.orderNotes && formik.errors.orderNotes && (
          <div
            className="fv-plugins-message-container"
            style={{ position: "relative", bottom: 30 }}
          >
            <div className="fv-help-block text-danger">
              <span role="alert">{formik.errors.orderNotes}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default OrderNotes;
