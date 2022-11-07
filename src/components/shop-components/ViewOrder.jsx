import React from "react";
import Footer_v1 from "../global-components/footer";
import Navbar from "../global-components/navbar";
import OrderViewContent from "./OrderViewContent";

const ViewOrder = () => {
  return (
    <>
      <Navbar />
      <OrderViewContent />
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default ViewOrder;
