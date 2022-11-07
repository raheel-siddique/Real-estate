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
import { useSelector } from "react-redux";
import "./Cart.css";
// import { getCartItems } from "./cartSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
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
    // eslint-disable-next-line
  }, []);
  const currentUser = useSelector((state) => state.user.userValue);
  const [updateMyToken, resOfUpdateToken] = useUpdateTokenToCartMutation();
  const reponseOfgetCartItems = useGetCartItemsQuery(currentUser?.data?.id);
  const [deleteItem, resOfDeleteItem] = useRemoveitemFromCartMutation();
  // const dispatch = useDispatch();
  const newCartItems = useSelector((state) => state.cart.cartItems);

  const [formValue, setFormValue] = useState([]);

  // useEffect(() => {
  //   dispatch(getCartItems(reponseOfgetCartItems?.data));
  // }, [reponseOfgetCartItems, dispatch]);

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
      toast.success("Item updated successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [resOfUpdateToken.isSuccess]);

  useEffect(() => {
    if (resOfUpdateToken.isError) {
      toast.error(
        resOfUpdateToken?.error?.data?.errors?.[0].title ||
          "Something went wrong!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
    // eslint-disable-next-line
  }, [resOfUpdateToken.isError]);

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
      toast.warn("cant go below 1", {
        position: toast.POSITION.TOP_CENTER,
      });
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
    if (carts !== formValue) {
      updateMyToken({
        carts,
      });
    }
  };

  return (
    <>
      <div className="liton__shoping-cart-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
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

                <div
                  style={{ padding: 30 }}
                  className="container table-responsive-sm  p-50"
                >
                  <table className="table table-bordered">
                    {currentUser &&
                      reponseOfgetCartItems.isSuccess &&
                      !resOfDeleteItem.isLoading &&
                      formValue?.length >= 1 && (
                        <>
                          <thead>
                            <tr
                              style={{
                                backgroundColor: "whitesmoke",
                                color: "black",
                                textAlign: "center",
                              }}
                            >
                              {/* <th
                                className="head1eampty"
                                // head1
                                scope="col"
                              ></th> */}

                              <th
                                className="col-lg-1 jhxjh cart-product-remove"
                                scope="col"
                              >
                                Remove
                              </th>

                              <th className="head3" scope="col">
                                Property
                              </th>
                              <th className="head4" scope="col">
                                Property Name
                              </th>
                              <th className="head5" scope="col">
                                Price
                              </th>
                              <th className="head6" scope="col">
                                Quantity
                              </th>
                              <th className="head7" scope="col">
                                Total Price
                              </th>
                            </tr>
                          </thead>
                        </>
                      )}

                    <tbody>
                      {!resOfDeleteItem.isLoading &&
                        formValue?.map((cartItem, index) => {
                          return (
                            <>
                              <tr
                                style={{
                                  backgroundColor: "white",
                                  color: "black",
                                  margin: 30,
                                  textAlign: "center",
                                  verticalAlign: "center",
                                  // marginTop: 20,
                                }}
                              >
                                {/* <th className="head1eampty"></th> */}
                                <th
                                  style={{ position: "relative", top: 10 }}
                                  propertyid={`${cartItem?.Property?.id}`}
                                  className="cart-product-remove jdfjf col-lg-1 itensmy "
                                  onClick={() =>
                                    removeFromCart(cartItem?.Property?.id)
                                  }
                                  // scope="col"
                                >
                                  <span className="text-danger itensmy">
                                    <DeleteOutlineIcon className="itensmy" />
                                  </span>
                                </th>

                                <th className="" scope="row">
                                  <Link
                                    to={`propertydetails/${cartItem?.Property?.id}`}
                                  >
                                    <img
                                      width="80"
                                      height="80"
                                      className="img-fluid imgcart"
                                      src={
                                        formValue[0]?.Property?.imgThumbnail ||
                                        "assets/img/property/property_1_4.jpeg"
                                      }
                                      alt="#"
                                    />
                                  </Link>
                                </th>
                                <td
                                  style={{ position: "relative", top: 10 }}
                                  className="cart-product-info itensmy text-capitalize"
                                >
                                  <Link
                                    to={`propertydetails/${cartItem?.Property?.id}`}
                                  >
                                    {`${cartItem?.Property?.name}`}
                                  </Link>
                                </td>
                                <td
                                  style={{ position: "relative", top: 10 }}
                                  className="cart-product-price itensmy"
                                >
                                  $
                                  {`${(cartItem?.Property?.Unit?.priceUsd/ cartItem?.Property?.Unit?.unitsQuantity).toLocaleString(
                                    navigator.language,
                                    { maximumFractionDigits: 1 }
                                  )}`}
                                </td>
                                <td
                                  style={{ position: "relative", top: 10 }}
                                  className="cart-product-quantity itensmy"
                                >
                                  <button
                                    className="incbtnofcart bg-danger"
                                    onClick={() => {
                                      incremnetQunatityOfCart(cartItem.id);
                                    }}
                                  >
                                    +
                                  </button>
                                  <input
                                    propertyid={`${cartItem?.Property?.id}`}
                                    type="number"
                                    min={1}
                                    max={
                                      cartItem?.Property?.Unit?.unitsRemaining
                                    }
                                    value={cartItem?.units || 0}
                                    name="qtybutton"
                                    // style={{width:100, height:50}}
                                    className="text-center"
                                    onChange={(event) =>
                                      handleChange(event, index)
                                    }
                                    style={{ width: 60 }}
                                  />
                                  <button
                                    className="incbtnofcart bg-danger"
                                    onClick={() => {
                                      decrementQunatityOfCart(cartItem.id);
                                    }}
                                  >
                                    -
                                  </button>
                                </td>
                                <td
                                  style={{ position: "relative", top: 10 }}
                                  className="cart-product-subtotal itensmy"
                                >
                                  $
                                  {!isNaN(cartItem?.units)
                                    ? `${(
                                        cartItem?.units *
                                        (Math.round((cartItem?.Property?.Unit?.priceUsd/ cartItem?.Property?.Unit?.unitsQuantity) * 10)/10)
                                      ).toLocaleString(navigator.language, {
                                        maximumFractionDigits: 1,
                                      })}`
                                    : 0}
                                </td>
                              </tr>
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <br />
                {currentUser && formValue?.length > 0 && (
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
                )}
                {/* <p>
                  Width: <strong>{windowDimenion.winWidth}</strong>
                </p>
                <p>
                  Height: <strong>{windowDimenion.winHeight}</strong>
                </p> */}

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
                                { parseFloat(reponseOfgetCartItems?.data?.data?.NetTotal)
                                  .toLocaleString(navigator.language, {
                                    maximumFractionDigits: 1,
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
