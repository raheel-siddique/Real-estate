import React from "react";
import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import FaqContent from "./FaqContent";

const Faq = () => {
  return (
    <>
      <Navbar />
      {/* <PageHeader pageTitle="FAQ" /> */}
      <FaqContent />
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default Faq;
