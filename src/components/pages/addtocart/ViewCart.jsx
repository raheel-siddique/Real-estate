import React, { useEffect } from "react";
import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import Cart from "./Cart";

const ViewCart = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  
  return (
    <>
      <Navbar />
      {/* <PageHeader pageTitle="Cart" /> */}
      <Cart />
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default ViewCart;
