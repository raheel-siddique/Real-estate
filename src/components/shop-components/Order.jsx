import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetCartItemsQuery } from "../../services/addtocart";
import { useGetCheckoutItemsQuery } from "../../services/checkout";
import OrderContent from "./OrderContent";
import OrderPagination from "./OrderPagination";

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);

  const getAllOrders = useGetCheckoutItemsQuery();
  const [orders, setOrders] = useState([]);
  const currentUser = useSelector((state) => state.user.userValue);
  const reponseOfgetCartItems = useGetCartItemsQuery(currentUser?.data?.id);

  useEffect(() => {
    setOrders(getAllOrders?.data?.orders);
    // eslint-disable-next-line
  }, [getAllOrders.isSuccess]);

  useEffect(() => {
    // eslint-disable-next-line
  }, [reponseOfgetCartItems?.data?.data?.CartItems]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = orders?.rows?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <>
      <div className="tab-pane fade" id="liton_tab_1_2">
        <div className="ltn__myaccount-tab-content-inner">
          <OrderContent orders={currentPost} />
          <OrderPagination
            postPerPage={postPerPage}
            totalPost={orders?.rows?.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};
export default Order;
