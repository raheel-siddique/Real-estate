import React from "react";
import Footer from "../../../global-components/footer";
import Navbar from "../../../global-components/navbar";
import ForgetPasswordForm from "./ForgetPasswordForm";

const ForgetPassword = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />
      <ForgetPasswordForm />
      {

      }
      <Footer />
    </>
  );
};

export default ForgetPassword;
