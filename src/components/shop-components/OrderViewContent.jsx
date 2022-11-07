import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useGetSingleCheckoutItemsQuery } from "../../services/checkout";
// import Footer_v1 from "../global-components/footer";
// import Navbar from "../global-components/navbar";

const OrderViewContent = () => {
  const { id } = useParams();
  const singleOrderGet = useGetSingleCheckoutItemsQuery(id);
  const [singleOrder, setSingleOrder] = useState({});

  useEffect(() => {
    setSingleOrder(singleOrderGet?.data);
  }, [singleOrderGet.data, singleOrderGet.isSuccess]);

  return (
    <>
      <div style={{ backgroundColor: "rgb(255, 253, 253)" }}>
        <div className="container mt-5">
          <div className="row">
            <div>
              <h1 className="text-capitalize">Checkout</h1>
              <p className="lead ">
                {
                  singleOrder?.order && Object.keys(singleOrder?.order).length
                  ? 'Thank you for order! Your order details are here:'
                  : `Currently you don't have any orders!`
                }
              </p>
            </div>
          </div>
        </div>

        {
          singleOrder?.order && Object.keys(singleOrder?.order).length
          ? <>
            <div className="container table-responsive mt-5 mb-5">
              <table class="table ">
                <thead>
                  <tr>
                    <td
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                    >
                      Order #:
                    </td>
                    <td
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                    >
                      Date/Time:
                    </td>
                    <td
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                    >
                      Email:
                    </td>
                    <td
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                    >
                      Total (USD):
                    </td>
                    <td
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                    >
                      Status:
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "white" }}>
                    <th
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                      scope="row"
                    >
                      {singleOrder?.order?.Transactions[0]?.orderId}
                    </th>
                    <th
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                    >
                      {(new Date(singleOrder?.order?.createdAt)).toLocaleString()}
                    </th>
                    <th
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                    >
                      {singleOrder?.order?.emailAddress}
                    </th>
                    <th
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                    >
                      {parseFloat(singleOrder?.order?.Transactions[0]?.subTotal).toFixed(4)}
                    </th>
                    <th
                      style={{ backgroundColor: "white", border: "0px solid red" }}
                    >
                      {singleOrder?.order?.status}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="container table-responsive mt-50 mb-5">
              <h4 className="text-center">Order Details</h4>
              <table class="table">
                <thead className="bg-light">
                  <tr
                    style={{
                      backgroundColor: "rgb(241, 239, 239)",
                      color: "black",
                      border: "0px solid red",
                    }}
                  >
                    <th style={{ border: "0px solid white" }}></th>
                    <th style={{ border: "0px solid white" }} scope="col">#</th>
                    <th style={{ border: "0px solid white" }} scope="col">
                      Products
                    </th>
                    <th style={{ border: "0px solid white" }} scope="col">Units</th>
                    <th style={{ border: "0px solid white" }} scope="col">Price (USD)</th>
                    <th style={{ border: "0px solid white" }} scope="col">
                      Total (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "white" }} className="">
                    <th></th>
                    <td>1</td>
                    <td>
                      {/* <tr style={{ backgroundColor: "white" }} className="">
                        <th className="">
                        <ul>
                            <li className=""> */}
                              {singleOrder?.order?.Transactions[0]?.Property?.name}
                            {/* </li> */}
                            {/* <li className="">
                              Bahria
                              <strong>× 6</strong>
                            </li> */}
                          {/* </ul> */}
                        {/* </th>
                      </tr> */}
                    </td>
                    <td>{singleOrder?.order?.Transactions[0]?.units}</td>
                    <td>{(parseFloat(singleOrder?.order?.Transactions[0]?.subTotal)/singleOrder?.order?.Transactions[0]?.units).toFixed(4)}</td>
                    <td>
                      {/* <th scope="row">{values?.orderId}</th> */}
                      {/* <tr style={{ backgroundColor: "white" }}>
                        <th> */}
                          {/* <ul
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <li> */}
                              {parseFloat(singleOrder?.order?.Transactions[0]?.subTotal).toFixed(4)}

                              {/* <strong>× {myItmes?.order_tokens}</strong> */}
                            {/* </li>
                          </ul> */}
                        {/* </th>
                      </tr> */}
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: "white" }} className="">
                    <th></th>
                    <th scope="col" colSpan={4}>Total</th>
                    <th scope="col">
                      {parseFloat(singleOrder?.order?.Transactions[0]?.subTotal).toFixed(4)}
                    </th>
                  </tr>
                  <tr style={{ backgroundColor: "white" }}>
                    <th></th>
                    <th scope="col" colSpan={4}>Payment Method:</th>
                    <th scope="col"> Coin base commerce</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
          : <></>
        }
        

        {/* <div className="container maincontainerforadddress mb-5">
          <div className="row maindivs">
            <div className="col-lg-12">
              <h3 className="" style={{ paddingTop: 15 }}>
                <span className="">Billing Address</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <ul className="listadrerssdetails">
              <li className="muted text-capitalize">
                {singleOrder?.order?.firstName}
              </li>
              <li>{singleOrder?.order?.city}</li>

              <li>{singleOrder?.order?.country}</li>

              <li>{singleOrder?.order?.state}</li>

              <li>{singleOrder?.order?.phoneNumber}</li>
              <li>{singleOrder?.order?.emailAddress}</li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default OrderViewContent;
