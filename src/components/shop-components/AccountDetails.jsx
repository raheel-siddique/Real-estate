import React from "react";

const AccountDetail = ({ currentUser }) => {
  return (
    <>
      <div className="tab-pane fade" id="liton_tab_1_3">
        <div className="ltn__myaccount-tab-content-inner">
          <h4>Account Details</h4>
          <h6 className="mt-5">Info</h6>
          <div className="row">
            <p className="text-capitalize">
              <span>
                <strong>First Name: </strong>
              </span>
              {/* {user.firstname} */}
              {currentUser?.data?.firstname}
            </p>
          </div>
          <div className="row">
            <p className="text-capitalize">
              <span>
                <strong>Last Name: </strong>
              </span>
              {/* {user.lastname} */}
              {currentUser?.data?.lastname}
            </p>
          </div>
          <div className="row">
            <p>
              <span>
                <strong>Email Address: </strong>
              </span>
              {/* {user.email} */}
              {currentUser?.data?.email}
            </p>
          </div>
          <div className="row">
            <p>
              <span>
                <strong>Resident of US: </strong>
              </span>
              {/* {user.usUsCitizen ? "Yes" : "No"} */}
              {currentUser?.data.usUsCitizen ? "yes" : "No"}
            </p>
          </div>

          <h6 className="mt-3">Verification</h6>
          <div className="row">
            <p>
              <span>
                <strong>Identity: </strong>
              </span>

              {currentUser?.data?.status === 'approved' ? (
                <i>Verified</i>
              ) : (
                <i>UnVerified</i>
              )}
            </p>
          </div>
          <div className="row">
            <p>
              <span>
                <strong>Email: </strong>
              </span>
              {currentUser?.data?.active ? <i>Verified</i> : <i>UnVerified</i>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AccountDetail;
