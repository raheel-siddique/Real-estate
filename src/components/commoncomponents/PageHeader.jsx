import React from "react";
import { Link } from "react-router-dom";
import "./page-header.css";

const PageHeader = ({ pageTitle }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div
        style={{ height: 400 }}
        className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image ownmg"
        data-bs-bg={
          publicUrl +
          "assets/img/sell-house-buy-house-house-model-hand-blue-background-payment-real-estate-banner-theme-sell-house-buy-222099584.jpg"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner">
                <h1 className="page-title" style={{ color: "white" }}>
                  {pageTitle}
                </h1>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li style={{ color: "black" }}>
                      <Link to="/">
                        <span className="ltn__secondary-color">
                          <i className="fas fa-home" />
                        </span>{" "}
                        Home
                      </Link>
                    </li>

                    <li style={{ color: "white" }}>{pageTitle}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageHeader;
