import React from "react";
import clsx from "clsx";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const ConfirmPassword = ({ formik }) => {
  const [passwordShow, setPasswordShow] = React.useState(false);
  return (
    <>
      <div style={{ position: "relative" }}>
        <input
          placeholder="confirm password"
          type={passwordShow ? "text" : "password"}
          autoComplete="off"
          {...formik.getFieldProps("confirmPassword")}
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

      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <div
          className="fv-plugins-message-container"
          style={{ position: "relative", bottom: 30 }}
        >
          <div className="fv-help-block text-danger">
            <span role="alert">{formik.errors.confirmPassword}</span>
          </div>
        </div>
      )}
    </>
  );
};
export default ConfirmPassword;
