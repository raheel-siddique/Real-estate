import React from "react";
import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import Navbar from "../../../global-components/navbar";
import CallToActionV1 from "../../../section-components/call-to-action-v1";
import Footer from "../../../global-components/footer";

function ForgetPasswordErrorMain() {
  const { search } = useLocation();
  const { message = "" } = queryString.parse(search);
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="ltn__404-area ltn__404-area-1 mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-404-inner text-center">
              <div className="error-img mb-30">
                <img
                  src={publicUrl + "assets/img/others/error-1.png"}
                  alt="#"
                />
              </div>
              <h1 className="error-404-title d-none">500</h1>
              <h2>An Error Occurred</h2>
              <h3>{message}</h3>
              <p>
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <div className="btn-wrapper go-top">
                <Link to="/" className="btn btn-transparent">
                  <i className="fas fa-long-arrow-alt-left" /> BACK TO HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ForgetPasswordError = () => {
  return (
    <div>
      <Navbar />
      <ForgetPasswordErrorMain />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default ForgetPasswordError;
