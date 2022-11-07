import React, { useEffect, useState } from "react";
import { updatedDiff } from "deep-object-diff";
import { Link } from "react-router-dom";
import {
  useGetItemsOfCartQuery,
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
  useEffect(() => {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }, []);
  const currentUser = useSelector((state) => state.user.userValue);
  const [updateMyToken, resOfUpdateToken] = useUpdateTokenToCartMutation();
  const reponseOfgetCartItems = useGetItemsOfCartQuery(currentUser?.data?.id);
  const [deleteItem, resOfDeleteItem] = useRemoveitemFromCartMutation();
  const dispatch = useDispatch();
  const newCartItems = useSelector((state) => state.cart.cartItems);

  const [formValue, setFormValue] = useState([]);

  useEffect(() => {
    dispatch(getCartItems(reponseOfgetCartItems?.data));
  }, [reponseOfgetCartItems, dispatch]);

  useEffect(() => {
    setFormValue(newCartItems?.data?.CartItems);
    // eslint-disable-next-line
  }, [newCartItems]);

  useEffect(() => {
    if (resOfDeleteItem.isSuccess) {
      toast.success("Item deleted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [resOfDeleteItem.isSuccess]);

  useEffect(() => {
    if (resOfUpdateToken.isSuccess) {
      toast.success("Item updated successfully");
    }
  }, [resOfUpdateToken.isSuccess]);

  useEffect(() => {
    if (resOfUpdateToken.isError) {
      toast.error("Token limit Exceeed");
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
    let value = event.target.value;
    if (value !== "0") {
      newValues[index] = {
        ...formValue[index],
        units: parseInt(value),
      };
      setFormValue(newValues);
    } else {
      toast.warn("cant go below 1");
    }
  };
  const incremnetQunatityOfCart = (cart_id) => {
    setFormValue((formValue) =>
      formValue.map((items) => {
        if (cart_id === items.id) {
          return {
            ...items,
            units: items.units + 1,
          };
        }
        return items;
      })
    );
  };
  const decrementQunatityOfCart = (cart_id) => {
    setFormValue((formValue) =>
      formValue.map((items) => {
        if (items.units > 1) {
          if (cart_id === items.id) {
            return {
              ...items,
              units: items.units - 1,
            };
          }
          return items;
        }
        return items;
      })
    );
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

                <div className="shoping-cart-table">
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
                              <div className="col-lg-2">
                                <th className="cart-product-info text-capitalize">
                                  Prodcut Name
                                </th>
                              </div>
                              <div className="col-lg-2">
                                <th className="cart-product-price">Price</th>
                              </div>
                              <div className="col-lg-3">
                                <th className="cart-product-quantity ">
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
                                  <tr key={index}>
                                    <div
                                      className="row"
                                      // style={{
                                      //   position: "relative",
                                      //   right: 20,
                                      // }}
                                    >
                                      <div className="col-lg-1">
                                        <td
                                          propertyid={`${cartItem?.Property?.id}`}
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
                                      <div className="col-lg-2">
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
                                      <div className="col-lg-3">
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
                                            <button
                                              className="incbtnofcart"
                                              onClick={() => {
                                                incremnetQunatityOfCart(
                                                  cartItem.id
                                                );
                                              }}
                                            >
                                              +
                                            </button>
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
                                              // style={{ width: 60 }}
                                            />
                                            <button
                                              className="incbtnofcart"
                                              onClick={() => {
                                                decrementQunatityOfCart(
                                                  cartItem.id
                                                );
                                              }}
                                            >
                                              -
                                            </button>
                                          </div>
                                        </td>
                                      </div>
                                      <div className="col-lg-2">
                                        <td className="cart-product-subtotal">
                                          $
                                          {!isNaN(cartItem?.units)
                                            ? `${(
                                                cartItem?.units *
                                                cartItem?.Property?.Unit
                                                  ?.priceUsd
                                              ).toLocaleString(
                                                navigator.language,
                                                {
                                                  minimumFractionDigits: 0,
                                                }
                                              )}`
                                            : 0}
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
                          {/* <button
                            onClick={() => dispatch(cartDataClear())}
                            // type="submit"
                            className="btn theme-btn-2 btn-effect-2--"
                          >
                            clear cart
                          </button> */}
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
