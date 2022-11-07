import React from "react";
// import { useLocation } from "react-router-dom";
import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import "./Cart.css";

const OrderConfirm = () => {
  // const { state } = useLocation()
  // console.log({ state })
  // const values = state.data.data
  // const singleOrder = [];

  // const orderTotal = useMemo(() => {
  //   return values.transactions.reduce((total, item)  => {

  //   }, 0)
  // }, [values.transactions])
  return (
    <>
      <Navbar />
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
      <div className="container table-responsive mt-5 mb-5">
        <table class="table ">
          <thead>
            <tr>
              <td style={{ backgroundColor: "white", border: "0px solid red" }}>
                Order #:
              </td>
              <td style={{ backgroundColor: "white", border: "0px solid red" }}>
                Date:
              </td>
              <td style={{ backgroundColor: "white", border: "0px solid red" }}>
                Email:
              </td>
              <td style={{ backgroundColor: "white", border: "0px solid red" }}>
                Total:
              </td>
              <td style={{ backgroundColor: "white", border: "0px solid red" }}>
                Payment:
              </td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "white" }}>
              <th
                style={{ backgroundColor: "white", border: "0px solid red" }}
                scope="row"
              >
                123
              </th>
              <th style={{ backgroundColor: "white", border: "0px solid red" }}>
                14,Feb 17
              </th>
              <th style={{ backgroundColor: "white", border: "0px solid red" }}>
                siddiquiraheel216@gmail.com
              </th>
              <th style={{ backgroundColor: "white", border: "0px solid red" }}>
                $10000
              </th>
              <th style={{ backgroundColor: "white", border: "0px solid red" }}>
                Check Payment
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
                backgroundColor: "lightgray",
                color: "white",
                border: "0px solid red",
              }}
            >
              <th style={{ border: "0px solid white" }}></th>
              <th style={{ border: "0px solid white" }} scope="col">
                Products
              </th>
              <th style={{ border: "0px solid white" }} scope="col">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "white" }} className="">
              <th></th>
              <td>
                <tr style={{ backgroundColor: "white" }} className="">
                  <th className="">
                    <ul>
                      <li className="">
                        inaequo
                        <strong>× 2</strong>
                      </li>
                      <li className="">
                        Bahria
                        <strong>× 6</strong>
                      </li>
                    </ul>
                  </th>
                </tr>
              </td>
              <td>
                {/* <th scope="row">{values?.orderId}</th> */}
                <tr style={{ backgroundColor: "white" }}>
                  <th>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <li>
                        1,000
                        {/* <strong>× {myItmes?.order_tokens}</strong> */}
                      </li>
                      <li>
                        2,000
                        {/* <strong>× {myItmes?.order_tokens}</strong> */}
                      </li>
                    </ul>
                  </th>
                </tr>
              </td>
            </tr>

            <tr style={{ backgroundColor: "white" }} className="">
              <th></th>
              <th scope="col">Total</th>
              <th scope="col"> $20,000</th>
            </tr>
            <tr style={{ backgroundColor: "white" }}>
              <th></th>
              <th scope="col">Payment Method:</th>
              <th scope="col"> Check</th>
            </tr>
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
            <li className="muted">Raheel</li>
            <li>Karachi</li>

            <li>Pakistan</li>

            <li>pak</li>

            <li>012-2748930203</li>
            <li>siddiquieraheel210@gmail.com</li>
          </ul>
        </div>
      </div>
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};

export default OrderConfirm;
