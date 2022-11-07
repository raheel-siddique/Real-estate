import React from "react";
import clsx from "clsx";
// import { PasswordOutlined } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const PasswordField = ({ formik }) => {
  const [passwordShow, setPasswordShow] = React.useState(false);

  return (
    <>
      <div style={{ position: "relative" }}>
        <input
          id="input-password"
          placeholder="password"
          type={!passwordShow ? "password" : "text"}
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className={clsx("form-control form-control-lg form-control-solid")}
          style={{ letterSpacing: 0 }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            cursor: "pointer",
            paddingRight: 15,
          }}
          onClick={() => setPasswordShow((prevShow) => !prevShow)}
        >
          {!passwordShow ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </div>
      </div>
      {formik.touched.password && formik.errors.password && (
        <div
          className="fv-plugins-message-container"
          style={{ position: "relative", bottom: 30 }}
        >
          <div className="fv-help-block text-danger">
            <span role="alert">{formik.errors.password}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default PasswordField;
