import React from "react";
import { Field, ErrorMessage } from "formik";

function Textarea(props) {
  const { label, name, formik, ...rest } = props;
  return (
    <>
      <div className="input-item input-item-textarea ltn__custom-icon">
        <Field as="textarea" id={name} name={name} {...rest} />
      </div>
      <div className="text-danger" style={{ position: "relative", bottom: 30 }}>
        <ErrorMessage name={name} />
      </div>
    </>
  );
}

export default Textarea;
