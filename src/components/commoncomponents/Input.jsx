import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const { disabled, label, name, formik, ...rest } = props;
  return (
    <>
      <div className="input-item input-item-name ltn__custom-icon">
        <Field id={name} name={name} {...rest} disabled={disabled} />
      </div>
      <div className="text-danger" style={{ position: "relative", bottom: 30 }}>
        <ErrorMessage name={name} />
      </div>
    </>
  );
}

export default Input;
