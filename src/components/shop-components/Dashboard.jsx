import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { setLogoutUser } from "../pages/auth/user/userSlice";
const Dashboard = ({ currentUser }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutUser = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    dispatch(setLogoutUser());
    history.push("/");
    toast.info("You have signed out successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <>
      <div className="tab-pane fade active show" id="liton_tab_1_1">
        <div className="ltn__myaccount-tab-content-inner">
          <p className="text-capitalize">
            Hello <strong>{currentUser?.data?.firstname} </strong>
            <br /> (not
            <strong> {currentUser?.data?.firstname}</strong>?
            <small>
              <button onClick={logoutUser} style={{ cursor: "pointer" }}>
                <i>Log out </i>
              </button>
            </small>
            )
          </p>
          <p>
            From your account dashboard you can view your
            <span> recent orders</span>, manage your
            <span> shipping and billing addresses</span>, and
            <span> edit your password and account details</span>.
          </p>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
