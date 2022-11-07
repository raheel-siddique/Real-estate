import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Social from "../section-components/social";
import Copyright from "./copyright";
import "./Footer.css";

const Footer_v1 = () => {
  const currentUser = useSelector((state) => state.user.userValue);

  useEffect(() => {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }, []);
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="site-logo-wrap">
                    <div className="site-logo go-top">
                      <Link to="/">
                        <img
                          style={{ width: 200 }}
                          className="img-fluid"
                          src={
                            publicUrl + "assets/img/Smart-crowd-logo-02 (1).png"
                          }
                          alt="Logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <p className="justify-text mt-2">
                    owners can collect revenue from rent, and vote on property
                    decisions.
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        {/* <div className="footer-address-icon">
                          <i className="icon-placeholder" />
                        </div> */}
                        {/* <div className="footer-address-info">
                          <p>Brooklyn, New York, United States</p>
                        </div> */}
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-call" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="tel:+1 (409) 995-3450">+1 (409) 995-3450</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-mail" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="mailto:support@smartcrowd.cc">
                              support@smartcrowd.cc
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <Social />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      {/* <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/blog-grid">Blog</Link>
                      </li>
                      <li>
                        <Link to="/shop">All Products</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li> */}
                      {/* <li>
                        <Link to="/faq">FAQs</Link>
                      </li> */}
                      <li>
                        <Link to="/marketplace">All Properties</Link>
                      </li>
                      {/* <li>
                        <Link to="/contact">Contact us</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      {currentUser && (
                        <li>
                          <Link to="/cart">Cart</Link>
                        </li>
                      )}

                      {/* <li>
                        <Link to="/wishlist">Wish List</Link>
                      </li> */}
                      {/* {!currentUser && (
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                      )} */}
                      {currentUser && (
                        <li>
                          <Link to="/checkout">Checkout</Link>
                        </li>
                      )}

                      <li>
                        <Link to="/terms">Terms &amp; Conditions</Link>
                      </li>
                      {/* <li>
                        <Link to="/shop">Promotional Offers</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Customer Care</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      {!currentUser && (
                        <>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                        </>
                      )}
                      {currentUser && (
                        <li>
                          <Link to="/myAccount">My account</Link>
                        </li>
                      )}

                      {/* <li>
                        <Link to="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link to="/add-listing">Add listing</Link>
                      </li> */}
                      <li>
                        <Link to="/faq">FAQs</Link>
                      </li>
                      {/* <li>
                        <Link to="/contact">Contact us</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          <i className="fas fa-location-arrow" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <h5 className="mt-30">We Accept</h5>

                  <img
                    className="coinbasepic img-fluid img-thumbnail"
                    src={publicUrl + "assets/img/icons/coinbase_logo.png"}
                    alt="Payment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
};
export default Footer_v1;
