import React from "react";
import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import ContentTerms from "./ContentTerms";

const TermsCondition = () => {
  return (
    <>
      <Navbar />
      {/* <br /> */}
      <ContentTerms />
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default TermsCondition;
