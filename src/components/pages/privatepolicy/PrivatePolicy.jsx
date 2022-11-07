import React from "react";
import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import ContentPrivatePolicy from "./ContentPrivatePolicy";

const PrivatePolicy = () => {
  return (
    <>
      <Navbar />
      <ContentPrivatePolicy />
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default PrivatePolicy;
