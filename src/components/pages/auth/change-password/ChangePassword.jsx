import React from "react";

import Footer from "../../../global-components/footer";
import Navbar from "../../../global-components/navbar";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePassword = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />
      <ChangePasswordForm />
      <Footer />
    </>
  );
};

export default ChangePassword;
