import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAddToCartTokenMutation } from "../../../services/addtocart";
import "./AddToCart.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

toast.configure();

const AddToCart = ({ property }) => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.userValue);

  const newCartItems = useSelector((state) => state.cart.cartItems);

  const [addToCartProperty, { isSuccess, isError, error, isLoading }] =
    useAddToCartTokenMutation();

  const [numberOfTokens, setNumberOfTokens] = useState(1);
  // const [increments, setIncrements] = useState("");

  const [feedback] = useState("");

  const {
    Unit : { unitsRemaining, priceUsd, unitsQuantity },
    name,
    id
    
  } = property?.data?.data || {}
  const handleAddToCart = async () => {
    // const units = parseInt(numberOfTokens);

    if (
      numberOfTokens > unitsRemaining ||
      numberOfTokens < 0
    ) {
      toast.error("Token limit exceed", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (
      newCartItems?.data?.CartItems.length < 1 ||
      newCartItems?.data?.CartItems[0]?.Property?.name === name
    ) {
      await addToCartProperty({
        id: currentUser?.data?.id,
        units: numberOfTokens,
        propertyId: id,
      });
    } else {
      toast.warn("Currently, only 1 item/order being handled.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.info("Token added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  useEffect(() => {
    if (isError)
      toast.error(error?.data?.errors[0].title, {
        position: toast.POSITION.TOP_CENTER,
      });
    // eslint-disable-next-line
  }, [isError]);

  const incraeseQuanitty = () => {
    let tokens = parseInt(numberOfTokens);
    // e.preventDefault();
    if (tokens < unitsRemaining)
      setNumberOfTokens(tokens + 1);
  };

  const decreaseQuanitty = () => {
    let tokens = parseInt(numberOfTokens);
    if (tokens > 1) {
      setNumberOfTokens(tokens - 1);
    }
  };
  const handleInputAdddToCart = (event) => {
    let value = event.target.value;
    if (value === "0") {
      toast.warning("cant go below 1");
    }
    setNumberOfTokens(event.target.value);
  };
  // let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div className="widget ltn__author-widget bg-light mt-5">
      <div className="ltn__author-widget-inner text-center">
        <h4>{property?.name}</h4>
        <br />
        <h6>
          Total Investment: $
          {priceUsd.toLocaleString(
            navigator.language,
            { maximumFractionDigits: 1 }
          )}
        </h6>
        <h6>
          {unitsRemaining.toLocaleString(
            navigator.language,
            { maximumFractionDigits: 0 }
          )}{" "}
          tokens left out of{" "}
          {unitsQuantity.toLocaleString(
            navigator.language,
            { maximumFractionDigits: 0 }
          )}
        </h6>

        <small>
          Minimum Investment: $
          {(priceUsd/unitsQuantity).toLocaleString(
            navigator.language,
            { maximumFractionDigits: 1 }
          )}
        </small>
        {currentUser && (
          <div className="row">
            <div className="col-md-12">
              <label>Add tokens to your cart:</label>
              <div>
                <button className="icbtn" onClick={incraeseQuanitty}>
                  <span>
                    <AddIcon />
                  </span>
                </button>
                <input
                  id="input-item-to-add-to-cart"
                  style={{ position: "relative", top: 1 }}
                  type="number"
                  min={1}
                  name="ltn__name"
                  // placeholder="Enter here"
                  className="tokeninptfld"
                  value={numberOfTokens}
                  onChange={(event) => handleInputAdddToCart(event)}
                />
                <button className="icbtn" onClick={decreaseQuanitty}>
                  <span>
                    <RemoveIcon />
                  </span>
                </button>
              </div>

              {feedback.length > 0 && <p>{feedback}</p>}
              {/* {error.length > 0 && <p>{error}</p>} */}
            </div>
          </div>
        )}
      </div>
      {currentUser ? (
        <div className="btn-wrapper btnaddtocart">
          {numberOfTokens &&
          numberOfTokens <= unitsRemaining ? (
            <button
              className="btn theme-btn-1 btn-effect-1 text-uppercase col-md-12"
              onClick={handleAddToCart}
            >
              {isLoading ? (
                <>
                  <div className="spinner-border text-ligh" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </>
              ) : (
                <>
                  <span className="mr-2 ">Add To Cart</span>
                  <ShoppingCartCheckoutOutlinedIcon />
                </>
              )}
            </button>
          ) : (
            <button
              className="btn theme-btn-1 btn-effect-1  text-uppercase  col-md-12 disabled"
              // onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
          <br />
          <br />
          {newCartItems?.data?.CartItems.length > 0 ? (
            <button
              className="btn btn-dark bg-dark theme-btn-1 btn-effect-1 text-uppercase col-md-12"
              onClick={() => {
                history.push("/cart");
              }}
            >
              View cart
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="btn-wrapper btnaddtocart">
          <Link
            to="/login"
            className="btn theme-btn-1 btn-effect-1 text-uppercase col-md-12"
          >
            Sign in <LoginIcon />
          </Link>
          <p>Sign in to add tokens to your cart.</p>
        </div>
      )}
      <br />
      {isError && (
        <div class="alert alert-danger" role="alert" style={{ width: 300 }}>
          {error
            ? error?.data?.errors[0].title
            : "check You Network Connection"}
        </div>
      )}
    </div>
  );
};

export default AddToCart;
