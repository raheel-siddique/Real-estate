import React, { useEffect, useState } from "react";
import { updatedDiff } from "deep-object-diff";
import { Link } from "react-router-dom";
import {
  useGetCartItemsQuery,
  useRemoveitemFromCartMutation,
  useUpdateTokenToCartMutation,
} from "../../../services/addtocart";
import Spinner from "../auth/Spinner";
import "./AddToCart.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { getCartItems } from "./cartSlice";

toast.configure();
const Cart = () => {
  const currentUser = useSelector((state) => state.user.userValue);
  const [updateMyToken, resOfUpdateToken] = useUpdateTokenToCartMutation();
  const reponseOfgetCartItems = useGetCartItemsQuery(currentUser?.data?.id);
  const [formValue, setFormValue] = useState([]);
  const [deleteItem, resOfDeleteItem] = useRemoveitemFromCartMutation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.cart?.cartItems);

  useEffect(() => {
    dispatch(getCartItems(["raheel", "rasim"]));
    setFormValue(reponseOfgetCartItems?.data?.data?.CartItems);
    // eslint-disable-next-line
  }, [reponseOfgetCartItems?.data?.data?.CartItems]);

  useEffect(() => {
    if (resOfDeleteItem.isSuccess) {
      toast.success("item Deleted Successfully");
    }
  }, [resOfDeleteItem.isSuccess]);

  useEffect(() => {
    if (resOfUpdateToken.isSuccess) {
      toast.success("item Updated Successfully");
    }
  }, [resOfUpdateToken.isSuccess]);

  useEffect(() => {
    if (resOfUpdateToken.isError) {
      toast.error("limit exceeed");
    }
  }, [resOfUpdateToken.isError]);

  let getValueOfTotalPrice = formValue?.map((prices) => {
    return prices?.units * prices?.Property?.Unit?.priceUsd;
  });
  const removeFromCart = (id) => {
    deleteItem(id);
  };
  const handleChange = (event, index) => {
    let newValues = [...formValue];
    newValues[index] = {
      ...formValue[index],
      units: event.target.value,
    };
    setFormValue(newValues);
  };
  const updateValues = () => {
    const initialValue = reponseOfgetCartItems?.data?.data?.CartItems;
    const values = formValue;
    const diff = updatedDiff(initialValue, values);
    let findDiff = Object.keys(diff).map((values) => {
      return formValue[values];
    });
    let carts = findDiff.map((values, index) => {
      return {
        propertyId: values?.propertyId,
        cartId: values?.id,
        units: values?.units,
      };
    });
    updateMyToken({
      carts,
    });
  };

  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <>
      <div className="liton__shoping-cart-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
                {currentUser && formValue?.length >= 1 && <></>}
                <br />
                <br />
                {resOfDeleteItem.isLoading && (
                  <>
                    <Spinner />
                  </>
                )}
                {resOfUpdateToken.isLoading && (
                  <>
                    <Spinner />
                  </>
                )}

                <div className="shoping-cart-table table-responsive">
                  <table className="table">
                    {currentUser &&
                      reponseOfgetCartItems.isSuccess &&
                      !resOfDeleteItem.isLoading &&
                      formValue?.length >= 1 && (
                        <tbody>
                          <tr>
                            <div className="row">
                              <div className="col-lg-1">
                                <td className="cart-product-image"></td>
                              </div>
                              <div className="col-lg-2">
                                <th className="cart-product-image">Product</th>
                              </div>
                              <div className="col-lg-3">
                                <th className="cart-product-info text-capitalize">
                                  Prodcut Name
                                </th>
                              </div>
                              <div className="col-lg-2">
                                <th className="cart-product-price">Price</th>
                              </div>
                              <div className="col-lg-2">
                                <th className="cart-product-quantity">
                                  Quantity
                                </th>
                              </div>
                              <div className="col-lg-2">
                                <th className="cart-product-subtotal">
                                  Total Price
                                </th>
                              </div>
                            </div>
                          </tr>

                          {!resOfDeleteItem.isLoading &&
                            formValue?.map((cartItem, index) => {
                              return (
                                <>
                                  <tr key={cartItem.id}>
                                    <div
                                      className="row"
                                      style={{
                                        position: "relative",
                                        right: 20,
                                      }}
                                    >
                                      <div className="col-lg-1">
                                        <td
                                          propertyid={`${cartItem.Property.id}`}
                                          className="cart-product-remove"
                                          onClick={() =>
                                            removeFromCart(
                                              cartItem?.Property?.id
                                            )
                                          }
                                        >
                                          <span
                                            className=""
                                            style={{
                                              // fontSize: 15,
                                              color: "red",
                                              // textAlign: "left",
                                            }}
                                          >
                                            x
                                          </span>
                                        </td>
                                      </div>
                                      <div className="col-lg-2">
                                        <td
                                          className="cart-product-image"
                                          // style={{ width: 170 }}
                                        >
                                          <Link
                                            to={`propertydetails/${cartItem?.Property?.id}`}
                                          >
                                            <img
                                              style={{ width: 80 }}
                                              // id={
                                              //   cartItem?.Property?.Unit?.priceUsd
                                              //     .length >= 4
                                              //     ? "mineidcheck"
                                              //     : ""
                                              // }
                                              className="img-fluid"
                                              src={
                                                publicUrl +
                                                "assets/img/img-slide/34.jpg"
                                              }
                                              alt="#"
                                            />
                                          </Link>
                                        </td>
                                      </div>
                                      <div className="col-lg-3">
                                        <td className="cart-product-info text-capitalize">
                                          <Link
                                            className=""
                                            to={`propertydetails/${cartItem?.Property?.id}`}
                                          >
                                            {`${cartItem?.Property?.name}`}
                                          </Link>
                                        </td>
                                      </div>
                                      <div className="col-lg-2">
                                        <td className="cart-product-price">
                                          $
                                          {`${cartItem?.Property?.Unit?.priceUsd.toLocaleString(
                                            navigator.language,
                                            { minimumFractionDigits: 0 }
                                          )}`}
                                        </td>
                                      </div>
                                      <div className="col-lg-2">
                                        <td
                                          // style={{ width: 220 }}
                                          className="cart-product-quantity"
                                        >
                                          {/* <label className="">
                                        Tokens Left:
                                        {cartItem?.Property?.Unit?.unitsRemaining.toLocaleString(
                                          navigator.language,
                                          { minimumFractionDigits: 0 }
                                        )}
                                      </label> */}
                                          <div
                                            // style={{ width: 0, height: 60 }}
                                            className=""
                                          >
                                            <input
                                              propertyid={`${cartItem?.Property?.id}`}
                                              type="number"
                                              min={1}
                                              max={
                                                cartItem?.Property?.Unit
                                                  ?.unitsRemaining
                                              }
                                              value={cartItem?.units.toLocaleString(
                                                navigator.language,
                                                { minimumFractionDigits: 0 }
                                              )}
                                              name="qtybutton"
                                              // style={{width:100, height:50}}
                                              className="text-center"
                                              onChange={(event) =>
                                                handleChange(event, index)
                                              }
                                            />
                                          </div>
                                        </td>
                                      </div>
                                      <div className="col-lg-2">
                                        <td className="cart-product-subtotal">
                                          $
                                          {`${(
                                            cartItem?.units *
                                            cartItem?.Property?.Unit?.priceUsd
                                          ).toLocaleString(navigator.language, {
                                            minimumFractionDigits: 0,
                                          })}`}
                                        </td>
                                      </div>
                                    </div>
                                  </tr>
                                </>
                              );
                            })}

                          <tr className="cart-coupon-row">
                            <td>
                              <button
                                onClick={updateValues}
                                type="submit"
                                className="btn theme-btn-2 btn-effect-2--"
                              >
                                Update Cart
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      )}
                  </table>
                </div>

                {currentUser &&
                  reponseOfgetCartItems.isSuccess &&
                  reponseOfgetCartItems?.data?.data?.CartItems?.length >= 1 && (
                    <div className="shoping-cart-total mt-50">
                      <h4>Cart Totals</h4>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <strong>Order Total</strong>
                            </td>
                            <td>
                              <strong>
                                {" "}
                                $
                                {getValueOfTotalPrice
                                  ?.reduce((acc, curr) => {
                                    return acc + curr;
                                  }, 0)
                                  .toLocaleString(navigator.language, {
                                    minimumFractionDigits: 0,
                                  })}
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="btn-wrapper text-right go-top">
                        <Link
                          to="/checkout"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
                  )}
                {!currentUser && (
                  <>
                    <h1 className="cartemptyhead ">
                      {" "}
                      Your Cart Is Currently Empty
                    </h1>
                    <br />
                    <Link to="/marketplace">
                      <button
                        className="btn btn-outline-primary"
                        style={{ borderRadius: 50 }}
                      >
                        Return To Shop
                      </button>
                    </Link>
                  </>
                )}

                {currentUser &&
                  reponseOfgetCartItems.isSuccess &&
                  reponseOfgetCartItems?.data?.data?.CartItems?.length < 1 && (
                    <>
                      <h1 className="cartemptyhead">
                        {" "}
                        Your Cart Is Currently Empty
                      </h1>
                      <br />
                      <Link to="/marketplace">
                        <button
                          className="btn btn-outline-primary"
                          style={{ borderRadius: 50 }}
                        >
                          Return To Shop
                        </button>
                      </Link>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
