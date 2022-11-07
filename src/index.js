import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Marketplace from "./components/pages/marketplace/Marketplace";
import Propertydetails from "./components/pages/marketplace/Propertydetails";
import { Provider, useDispatch } from "react-redux";
import { store } from "./app/store";
import Register from "./components/pages/auth/register/Register";
import Login from "./components/pages/auth/login/Login";
import ViewCart from "./components/pages/addtocart/ViewCart";
import Checkout from "./components/pages/addtocart/Checkout";
import Faq from "./components/pages/faq/Faq";
import Team_V1 from "./components/team";
// import MyAccount from "./components/shop-components/my-account";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLazyGetCurrentUserQuery } from "./services/auth";
import { getCurrentUser } from "./components/pages/auth/user/userSlice";
import About from "./components/pages/home/counter-v1";
import PrivatePolicy from "./components/pages/privatepolicy/PrivatePolicy";
import TermsCondition from "./components/pages/terms$cond/TermsCondition";
import OrderConfirm from "./components/pages/addtocart/OrderConfirm";
import ForgetPassword from "./components/pages/auth/forget-password/ForgetPassword";
import ErrorPage from "./components/404";
import ForgetPasswordError from "./components/pages/auth/forget-password/ForgetPasswordError";
import ChangePassword from "./components/pages/auth/change-password/ChangePassword";
import ViewOrder from "./components/shop-components/ViewOrder";
import EmailVerification from "./components/pages/auth/otp/EmailVerification";
// import MyaccountV1 from "./components/my-account";
// import MyAccountData from "./components/shop-components/my-account";
import myAccountData from "./components/shop-components/MyAccount";
import { useGetCartItemsQuery } from "./services/addtocart";
import { getCartItems } from "./components/pages/addtocart/cartSlice";

const token = localStorage.getItem("access-token");

const Root = () => {
  const dispatch = useDispatch();
  const [currentUser, { data, isSuccess }] = useLazyGetCurrentUserQuery();
  const reponseOfgetCartItems = useGetCartItemsQuery(data?.data?.id);

const [setIsAutheticated] = useState();

  useEffect(() => {
    dispatch(getCartItems(reponseOfgetCartItems?.data));
    // eslint-disable-next-line
  }, [reponseOfgetCartItems]);
  useEffect(() => {
    setIsAutheticated(token);
    if (token) currentUser(token);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (isSuccess) dispatch(getCurrentUser(data));
    // eslint-disable-next-line
  }, [isSuccess]);

  return (
    <BrowserRouter basename="/">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/marketplace" component={Marketplace} />
          <Route
            exact
            path="/propertydetails/:id"
            component={Propertydetails}
          />
          <Route exact path="/register" component={Register} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/forget-password" component={ForgetPassword} />
          <Route exact path="/change-password" component={ChangePassword} />
          <Route
            exact
            path={"/forget-password-error"}
            component={ForgetPasswordError}
          />
          <Route exact path="/otp-verification" component={EmailVerification} />
          <Route exact path="/cart" component={ViewCart} />

          {/* <Route exact path="/checkout" component={Checkout} /> */}

          <Route exact path="/faq" component={Faq} />
          <Route exact path="/team" component={Team_V1} />
          <Route exact path="/about" component={About} />
          <Route exact path="/terms" component={TermsCondition} />
          <Route exact path="/privacy-policy" component={PrivatePolicy} />
          <Route path="/error" exact component={ErrorPage} />

          
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/order-confirm" component={OrderConfirm} />
              <Route exact path="/view-order/:id" component={ViewOrder} />
              <Route exact path="/myAccount" component={myAccountData} />
          
        </Switch>
        <ToastContainer autoClose={1000} />
      </div>
      {/* <Footer_v1 /> */}
    </BrowserRouter>
  );
};

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("quarter")
);
