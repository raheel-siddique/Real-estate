import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  return (
    <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top">
      <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
        {/* ltn__slide-item */}
        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
          <div className="ltn__slide-item-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="slide-item-info">
                    <div className="slide-item-info-inner">
                      <div className="slide-video mb-50 d-none">
                        <a
                          className="ltn__video-icon-2 ltn__video-icon-2-border"
                          href="https://www.youtube.com/embed/tlThdr3O5Qo"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-play" />
                        </a>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                        }}
                      >
                        <div>
                          <img
                            src="./logo_Design 2.png"
                            alt="logi"
                            width="30"
                            height="30"
                          />
                        </div>
                        <div style={{ marginTop: 5, marginLeft: 10 }}>
                          <h6 className="slide-sub-title white-color--- animated">
                            Smart Crowd
                          </h6>
                        </div>
                      </div>
                      <h1 className="slide-title animated text-capitalize ">
                        Fractional real
                        <br /> estate investing
                      </h1>
                      <div className="slide-brief animated">
                        <p>
                          For the first time, investors around the globe can buy
                          into the US real estate market through
                          fully-compliant, fractional, tokenized ownership.
                          Powered by blockchain.
                        </p>
                      </div>
                      <div className="btn-wrapper animated ">
                        <Link
                          to="/marketplace"
                          className="theme-btn-1 btn btn-effect-1"
                          style={{
                            backgroundColor: "#6610f2",
                            // borderRadius: 30,
                          }}
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slide-item-img"
                    // style={{ position: "relative", bottom: 20 }}
                  >
                    <img
                      alt="banner"
                      src={
                        process.env.REACT_APP_PUBLIC_URL +
                        "assets/img/banner/identity.png"
                      }
                      className="img-fluid banner-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ltn__slide-item */}

        {/*  */}
      </div>
    </div>
  );
};

export default Banner;
