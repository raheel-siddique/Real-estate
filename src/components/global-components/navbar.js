import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useGetCartItemsQuery } from "../../services/addtocart";
import { setLogoutUser } from "../pages/auth/user/userSlice";
import { toast } from "react-toastify";

// const token = localStorage.getItem("access-token");
toast.configure();
const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.userValue);

  const reponseOfgetCartItems = useGetCartItemsQuery(currentUser?.data?.id);
  // const [getSumOfQuantity, setGetSumOfQuantity] = useState([]);
  // useEffect(() => {
  //   if (reponseOfgetCartItems.isSuccess) {
  //     setGetSumOfQuantity(reponseOfgetCartItems);
  //   }
  // }, [reponseOfgetCartItems]);

  const isAuthunticated = currentUser?.data?.id;

  const logoutUser = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    dispatch(setLogoutUser());
    // window.location.reload(false);
    // history.push("/");
    toast.success("You have signed out successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div>
        <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
          <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="ltn__top-bar-menu">
                    <ul>
                      <li>
                        {!currentUser && (
                          <Link to="/register">
                            Register your account with Smart Crowd to own
                            tokenized property
                          </Link>
                        )}
                        {currentUser && (
                          <Link to="/marketplace">
                            Now You Can Add Token With Your Properties
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="site-logo-wrap">
                    <div className="site-logo go-top">
                      <Link to="/">
                        <img
                          style={{ width: 200 }}
                          className="img-fluid"
                          src={publicUrl + "assets/img/logo-smart-crowd.png"}
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="get-support clearfix d-none">
                      <div className="get-support-icon">
                        <i className="icon-call" />
                      </div>
                      <div className="get-support-info">
                        <h6>Get Support</h6>
                        <h4>
                          <a href="tel:+123456789">123-456-789-10</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col header-menu-column">
                  <div className="header-menu d-none d-xl-block">
                    <nav>
                      <div className="ltn__main-menu go-top">
                        <ul>
                          <li className="">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="">
                            <Link to="/marketplace">Marketplace</Link>
                          </li>
                          {/* <li className="">
                            <Link to="/team">Team</Link>
                          </li> */}
                          <li className="">
                            <Link to="/faq">FAQs</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
                  {/* header-search-1 */}

                  {/* user-menu */}
                  <div className="ltn__drop-menu user-menu">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="icon-user" />
                        </Link>
                        <ul className="go-top">
                          {!isAuthunticated && (
                            <>
                              <Link to="/login">
                                <li>
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Sign in
                                </li>
                              </Link>
                              <Link to="/register">
                                <li>
                                  <i
                                    className="fa fa-key"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Register
                                </li>
                              </Link>
                            </>
                          )}
                          {isAuthunticated && (
                            <>
                              <Link to="/myAccount">
                                <li>
                                  <i
                                    className="fa fa-user"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  My Account
                                </li>
                              </Link>
                              <Link
                                className="go-top"
                                to="/"
                                onClick={logoutUser}
                              >
                                <li>
                                  <i className="fas fa-sign-out-alt" /> Logout
                                </li>
                              </Link>
                            </>
                          )}
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* mini-cart */}
                  {currentUser ? (
                    <div className="mini-cart-icon">
                      <Link to="/cart">
                        <i className="icon-shopping-cart"></i>
                        {reponseOfgetCartItems.isLoading && (
                          <sup>
                            {isAuthunticated && (
                              <>
                                <div
                                  className="spinner-border spinner-border-sm"
                                  role="status"
                                >
                                  <span className="sr-only">Loading...</span>
                                </div>
                              </>
                            )}
                          </sup>
                        )}
                        <sup>
                          {isAuthunticated
                            ? reponseOfgetCartItems?.data?.data?.CartItems?.reduce(
                                (acc, curr) => {
                                  return acc + curr.units;
                                },
                                0
                              )
                            : 0}
                        </sup>
                      </Link>{" "}
                    </div>
                  ) : (
                    <></>
                  )}

                  {/* mini-cart */}
                  {/* Mobile Menu Button */}
                  <div className="mobile-menu-toggle d-xl-none">
                    <a
                      href="#ltn__utilize-mobile-menu"
                      className="ltn__utilize-toggle"
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        />
                        <path d="M300,320 L540,320" id="middle" />
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          id="ltn__utilize-mobile-menu"
          className="ltn__utilize ltn__utilize-mobile-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <Link to="/">
                  <img
                    src={publicUrl + "assets/img/logo-smart-crowd.png"}
                    alt="Logo"
                  />
                </Link>
              </div>
              <button className="ltn__utilize-close">×</button>
            </div>
            {/* <div className="ltn__utilize-menu-search-form">
              <form action={"#"}>
                <input type="text" placeholder="Search..." />
                <button>
                  <i className="fas fa-search" />
                </button>
              </form>
            </div> */}
            <div className="ltn__utilize-menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <Link to="/marketplace">Marketplace</Link>
                </li>
                {/* <li>
                  <Link to="/">Team</Link>
                </li> */}
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
              <ul>
                {/* {currentUser && (
                  <li>
                    <Link to="/my-account" title="My Account">
                      <span className="utilize-btn-icon">
                        <i className="far fa-user" />
                      </span>
                      My Account
                    </Link>
                  </li>
                )} */}

                {/* <li>
                  <Link to="/wishlist" title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="far fa-heart" />
                      <sup>3</sup>
                    </span>
                    Wishlist
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="/cart">
                    <i className="icon-shopping-cart"></i>

                    <sup>
                      {isAuthunticated
                        ? reponseOfgetCartItems?.data?.data?.CartItems?.map(
                            (items) => {
                              return items.units;
                            }
                          ).reduce((acc, curr) => {
                            return acc + curr;
                          }, 0)
                        : 0}
                    </sup>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* Utilize Cart Menu Start */}
        <div
          id="ltn__utilize-cart-menu"
          className="ltn__utilize ltn__utilize-cart-menu"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <span className="ltn__utilize-menu-title">Cart</span>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img go-top">
                  <Link to="/product-details">
                    <img
                      src={publicUrl + "assets/img/product/1.png"}
                      alt="Product"
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    <Link to="/product-details">Wheel Bearing Retainer</Link>
                  </h6>
                  <span className="mini-cart-quantity">1 x $65.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img go-top">
                  <Link to="/product-details">
                    <img
                      src={publicUrl + "assets/img/product/2.png"}
                      alt="Product"
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    <Link to="/product-details">Brake Conversion Kit</Link>
                  </h6>
                  <span className="mini-cart-quantity">1 x $85.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img go-top">
                  <Link to="/product-details">
                    <img
                      src={publicUrl + "assets/img/product/3.png"}
                      alt="Product"
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    <Link to="/product-details">OE Replica Wheels</Link>
                  </h6>
                  <span className="mini-cart-quantity">1 x $92.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-img go-top">
                  <Link to="/product-details">
                    <img
                      src={publicUrl + "assets/img/product/4.png"}
                      alt="Product"
                    />
                  </Link>
                  <span className="mini-cart-item-delete">
                    <i className="icon-cancel" />
                  </span>
                </div>
                <div className="mini-cart-info go-top">
                  <h6>
                    <Link to="/product-details">Shock Mount Insulator</Link>
                  </h6>
                  <span className="mini-cart-quantity">1 x $68.00</span>
                </div>
              </div>
            </div>
            <div className="mini-cart-footer">
              <div className="mini-cart-sub-total">
                <h5>
                  Subtotal: <span>$310.00</span>
                </h5>
              </div>
              <div className="btn-wrapper go-top">
                <Link to="/cart" className="theme-btn-1 btn btn-effect-1">
                  View Cart
                </Link>
                <Link to="/cart" className="theme-btn-2 btn btn-effect-2">
                  Checkout
                </Link>
              </div>
              <p>Free Shipping on All Orders Over $100!</p>
            </div>
          </div>
        </div>
        {/* Utilize Cart Menu End */}
      </div>
    </>
  );
};

export default Navbar;
