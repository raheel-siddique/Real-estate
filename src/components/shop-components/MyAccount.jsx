import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../global-components/navbar";
import Footer_v1 from "../global-components/footer";
import { toast } from "react-toastify";
import Dashboard from "./Dashboard";
import Order from "./Order";
import AccountDetail from "./AccountDetails";
import IdentityVerify from "./IdentityVerify";
import Wallet from "./Wallet";
import { useDispatch, useSelector } from "react-redux";
import { setLogoutUser } from "../pages/auth/user/userSlice";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";

toast.configure();
const token = localStorage.getItem("access-token");

const MyAccount = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.userValue);
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/");
    }
  });

  // const currentUser = useGetCurrentUserQuery();
  const logoutUser = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    dispatch(setLogoutUser());
    // history.push("/");
    toast.info("You have signed out successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <Navbar />
      {/* <PageHeader pageTitle="My Account" /> */}
      <div className="liton__wishlist-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* PRODUCT TAB AREA START */}
              <div className="ltn__product-tab-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="ltn__tab-menu-list mb-50">
                        <div className="nav">
                          <a
                            className="active show"
                            data-bs-toggle="tab"
                            href="#liton_tab_1_1"
                          >
                            Dashboard <i className="fas fa-home" />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_1_2">
                            Orders <i className="fas fa-file-alt" />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_1_3">
                            Account Details <i className="fas fa-user" />
                          </a>
                          <a data-bs-toggle="tab" href="#liton_tab_1_4">
                            Identity Verification
                            <i className="fas fa-address-card" />
                          </a>
                          {/* <a data-bs-toggle="tab" href="#liton_tab_1_5">
                            Email Verification <i className="fas fa-at" />
                          </a> */}
                          <a data-bs-toggle="tab" href="#liton_tab_1_8">
                            Smart Crowd Wallet
                            <CalendarViewWeekIcon style={{ fontSize: 20 }} />
                          </a>
                          <Link className="go-top" to="/" onClick={logoutUser}>
                            Logout <i className="fas fa-sign-out-alt" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="tab-content">
                        {/* Dashboard */}
                        <Dashboard currentUser={currentUser} />
                        {/* order */}

                        <Order />
                        {/* acccount details */}

                        <AccountDetail currentUser={currentUser} />
                        <IdentityVerify currentUser={currentUser} />

                        <Wallet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* PRODUCT TAB AREA END */}
            </div>
          </div>
        </div>
      </div>
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};

export default MyAccount;
