import React, { useEffect, useState } from "react";
import { useGetCheckoutItemsQuery } from "../../../services/checkout";
import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import "./Cart.css";

const OrderConfirm = () => {
  const confirmOrder = useGetCheckoutItemsQuery();
  const [singleOrder, setSingleOrder] = useState([]);

  useEffect(() => {
    setSingleOrder(confirmOrder?.data);
  }, [confirmOrder.data]);


  return (
    <>
      <Navbar />
      {singleOrder
        ?.slice(singleOrder.length - 1, singleOrder.length)
        .map((values, index) => {
          return (
            <>
              <div className="container mt-5 ">
                <div className="row">
                  <div>
                    <h1 className="text-capitalize">Checkout</h1>
                    <p className="text-capitalize lead">
                      thank you! Your order Has Been Dispatched.
                    </p>
                  </div>
                </div>
              </div>
              <div className="shoping-cart-table table-responsive mb-5">
                <table className="table">
                  <tbody>
                    <tr>
                      <div className="container mr-5">
                        <div className="row">
                          {/* <div className="col-lg-1">
                          <td className="cart-product-image"></td>
                        </div> */}
                          <div className="col-lg-2">
                            <th className="cart-product-image lead">
                              Order Number
                              <br />
                              <span className="fw-bold">{values?.orderId}</span>
                            </th>
                          </div>
                          <div className="col-lg-2">
                            <th className="cart-product-info text-capitalize lead">
                              Date
                              <br />
                              <span className="fw-bold">{values?.theDate}</span>
                            </th>
                          </div>
                          <div className="col-lg-3">
                            <th className="cart-product-price lead">
                              Email
                              <br />
                              <span className="fw-bold"> {values?.email}</span>
                            </th>
                          </div>
                          <div className="col-lg-2">
                            <th className="cart-product-quantity lead">
                              Total
                              <br />
                              <strong>${values?.order_total}</strong>
                            </th>
                          </div>
                          <div className="col-lg-2">
                            <th className="cart-product-subtotal fw-light lead">
                              Payment Method
                              <br />
                              <span className="fw-bold">
                                {values?.payment_method}
                              </span>
                            </th>
                          </div>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="container mt-5">
                <div className="row">
                  <div>
                    <p
                      className="text-capitalize lead"
                      style={{ fontSize: 18 }}
                    >
                      Pay With cash upon delivery
                    </p>
                  </div>
                </div>
              </div>
              <div className="shoping-cart-table table-responsive mb-5">
                <table className="table">
                  <tbody>
                    <div className="container mb-5">
                      <div className="row mt-5">
                        <tr>
                          <div className="col-lg-12 text-center bg-light">
                            <th className="cart-product-image text-center">
                              <h3
                                className="text-center"
                                style={{ textAlign: "center", margin: 15 }}
                              >
                                <span className="text-center">
                                  Order Details
                                </span>
                              </h3>
                            </th>
                          </div>
                        </tr>

                        <tr>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <div className="col-lg-9 text-center">
                              <th className="cart-product-image">
                                <span
                                  className=""
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  Product
                                </span>
                              </th>
                            </div>
                            <div className="col-lg-3">
                              <th className="cart-product-image">
                                <span
                                  className=""
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  Total
                                </span>
                              </th>
                            </div>
                          </div>
                        </tr>
                        <tr>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <div className="col-lg-9">
                              <th className="cart-product-image">
                                <div
                                  className="shoping-cart-total productsclass"
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  <>
                                    {values?.item?.map((myItmes) => {
                                      return (
                                        <>
                                          <tr>
                                            <td>
                                              {myItmes?.order_item}{" "}
                                              <strong>
                                                × {myItmes?.order_tokens}
                                              </strong>
                                            </td>
                                          </tr>
                                        </>
                                      );
                                    })}
                                  </>
                                </div>
                              </th>
                            </div>
                            <div className="col-lg-3">
                              <th className="cart-product-image">
                                <span
                                  className=""
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  <ul style={{ listStyleType: "none" }}>
                                    {values?.item?.map((myItmes) => {
                                      return (
                                        <>
                                          <tr>
                                            <td>
                                              {myItmes?.item_amount}{" "}
                                              {/* <strong>
                                                × {myItmes?.order_tokens}
                                              </strong> */}
                                            </td>
                                          </tr>
                                        </>
                                      );
                                    })}
                                  </ul>
                                </span>
                              </th>
                            </div>
                          </div>
                        </tr>

                        <tr>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <div className="col-lg-9">
                              <th className="cart-product-image">
                                <div
                                  className="shoping-cart-total productsclass"
                                  //   style={{ backgroundColor: "white" }}
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  <>
                                    <tr>
                                      <td>Subtotal:</td>
                                    </tr>
                                  </>
                                </div>
                              </th>
                            </div>
                            <div className="col-lg-3">
                              <th className="cart-product-image">
                                <span
                                  className=""
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  <strong>
                                    {" "}
                                    ${values?.order_total}
                                    {/* {getValueOfTotalPrice
                                      ?.reduce((acc, curr) => {
                                        return acc + curr;
                                      }, 0)
                                      .toLocaleString(navigator.language, {
                                        minimumFractionDigits: 0,
                                      })} */}
                                  </strong>
                                </span>
                              </th>
                            </div>
                          </div>
                        </tr>

                        <tr>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <div className="col-lg-9">
                              <th className="cart-product-image">
                                <div
                                  className="shoping-cart-total productsclass"
                                  //   style={{ backgroundColor: "white" }}
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  <>
                                    <tr>
                                      <td>Payment Method:</td>
                                    </tr>
                                  </>
                                </div>
                              </th>
                            </div>
                            <div className="col-lg-3">
                              <th className="cart-product-image">
                                <span
                                  className=""
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  {values?.payment_method}
                                </span>
                              </th>
                            </div>
                          </div>
                        </tr>

                        <tr>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <div className="col-lg-9">
                              <th className="cart-product-image">
                                <div
                                  className="shoping-cart-total productsclass"
                                  //   style={{ backgroundColor: "white" }}
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  <>
                                    <tr>
                                      <td>Total:</td>
                                    </tr>
                                  </>
                                </div>
                              </th>
                            </div>
                            <div className="col-lg-3">
                              <th className="cart-product-image">
                                <span
                                  className=""
                                  style={{ textAlign: "center", margin: 15 }}
                                >
                                  <strong>
                                    {" "}
                                    ${values?.order_total}
                                    {/* {getValueOfTotalPrice
                                      ?.reduce((acc, curr) => {
                                        return acc + curr;
                                      }, 0)
                                      .toLocaleString(navigator.language, {
                                        minimumFractionDigits: 0,
                                      })} */}
                                  </strong>
                                </span>
                              </th>
                            </div>
                          </div>
                        </tr>
                      </div>
                    </div>
                  </tbody>
                </table>
              </div>
              <div className="container maincontainerforadddress mb-5">
                <div className="row maindivs">
                  <div className="col-lg-12">
                    <h3 className="" style={{ margin: 15 }}>
                      <span className="">Billing Address</span>
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <ul className="listadrerssdetails">
                    <li className="muted">{values?.first_name}</li>
                    <li>{values?.city}</li>

                    <li>{values?.country}</li>

                    <li>{values?.state}</li>

                    <li>{values?.contact}</li>
                    <li>{values?.email}</li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default OrderConfirm;
