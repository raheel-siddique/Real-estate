import React from "react";
import Footer_v1 from "../../../global-components/footer";
import Navbar from "../../../global-components/navbar";
import OtpContent from "./OtpContent";
import "./Otp.css";

const EmailVerification = () => {
  return (
    <>
      <Navbar />
      <OtpContent />
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default EmailVerification;
