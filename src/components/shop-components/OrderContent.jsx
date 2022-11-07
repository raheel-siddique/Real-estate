import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const OrderContent = ({ orders }) => {
  return (
    <>
      <div className="table-responsive">
        {orders?.length ? (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>

                        <td>{order?.id}</td>
                        <td>{order?.createdAt.slice(0, 10)}</td>
                        <td>{order?.status}</td>
                        <td>
                          <strong>
                            $
                            {parseFloat(
                              order?.Transactions[0]?.subTotal
                            ).toFixed(4)}
                          </strong>
                        </td>
                        <td>
                          <Link to={`/view-order/${order.id}`}>View</Link>
                          {order?.status === "Processed" ? (
                            <>
                              <span> |</span>
                              <a
                                href={`https://commerce.coinbase.com/charges/${order?.coinbaseId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Pay Now
                              </a>
                            </>
                          ) : (
                            <></>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <div className="ltn__myaccount-tab-content-inner">
              <p>You don't have any orders yet.</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default OrderContent;
