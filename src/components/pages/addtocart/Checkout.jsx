import React, { useEffect, useState } from "react";
import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../../commoncomponents/FormikControl";
import { useGetCartItemsQuery } from "../../../services/addtocart";
import { useSelector } from "react-redux";
import { useAddCheckoutDataMutation } from "../../../services/checkout";
import { toast } from "react-toastify";
import { COUNTRIES } from "../../../components/commoncomponents/countries";
import "./Cart.css";
import DropDown from "../../shop-components/DropDown";
import { useGetCurrentUserQuery } from "../../../services/auth";

const Checkout = () => {
  const currentUser = useSelector((state) => state.user.userValue);
  const [paymentLink, setPaymentLink] = useState(null);
  const reponseOfgetCartItems = useGetCartItemsQuery(currentUser?.data?.id);
  const [checkoutRes, { data, error, isSuccess, isError, isLoading }] =
    useAddCheckoutDataMutation();
  const [formValue, setFormValue] = useState([]);
  // const [payment, setPayment] = useState("Cash on delivery");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    setFormValue(reponseOfgetCartItems?.data?.data?.CartItems);
    // eslint-disable-next-line
  }, [reponseOfgetCartItems?.data?.data?.CartItems]);

  const token = localStorage.getItem("access-token");
  const me = useGetCurrentUserQuery(token);

  useEffect(() => {
    if (isSuccess) {
      setPaymentLink(data?.order?.coinbaseId);
      // window.location.reload(true);
      toast.success(data?.Message || "Order processed successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    // eslint-disable-next-line
  }, [isSuccess]);

  useEffect(() => {
    if (isError)
      toast.error(error?.data?.errors?.[0]?.title || "Something went wrong", {
        position: toast.POSITION.TOP_CENTER,
      });
      // eslint-disable-next-line
  }, [isError]);

  useEffect(() => {
    setUserInfo(currentUser);
  }, [currentUser]);

  // const handleChangeRadioBtn = (event) => {
  //   setPayment(event.target.value);
  // };

  const initialValues = {
    firstName: userInfo?.data?.firstname,
    lastName: userInfo?.data?.lastname,
    emailAddress: userInfo?.data?.email,
    contact: userInfo?.data?.contact,
    companyName: "",
    companyAddress: "",
    homeAddress: "",
    units: "",
    city: "",
    state: "",
    zip: "",
    orderNotes: "",
  };

  const onSubmit = async (values) => {
    await checkoutRes({
      id: me.data?.data?.id,
      firstName: values.firstName,
      lastName: values.lastName,
      emailAddress: values.emailAddress,
      phoneNumber: values.contact,
      companyName: values.companyName,
      companyAddress: values.companyAddress,
      country: values.country,
      address: values.homeAddress,
      city: values.city,
      state: values.state,
      zipCode: values.zip,
      orderNotes: values.orderNotes,
      token: token,
    });
  };

  const openPaymentWindow = () => {
    window.open(
      `https://commerce.coinbase.com/charges/${paymentLink}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Name is required"),
    emailAddress: Yup.string()
      .email("Wrong email format")
      .required("Email is required"),
    lastName: Yup.string().required("Last name is required"),
    // companyName: Yup.string().required("Company name is required"),
    // companyAddress: Yup.string().required("Company Address is required"),
    homeAddress: Yup.string().required("Address is required"),
    // units: Yup.string().required("units is required"),
    city: Yup.string().required("city is required"),
    state: Yup.string().required("state is required"),
    zip: Yup.number()
      .required("Zip field is required")
      .typeError("Zip must be in number"),
    country: Yup.string().required("Country is required"),
    // orderNotes: Yup.string().required("order notes is required"),
    contact: Yup.number()
      .required("Contact field is required")
      .typeError("Contact must be in number"),
  });

  return (
    <>
      <Navbar />
      <div className="ltn__checkout-area mb-105">
        <div className="container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => (
              <Form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ltn__checkout-inner">
                      <div className="ltn__checkout-single-content mt-50">
                        <h4 className="title-2">Billing Details</h4>
                        <div className="ltn__checkout-single-content-info">
                          <h6>Personal Information</h6>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-item input-item-name ltn__custom-icon">
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="firstName"
                                  disabled={
                                    userInfo?.data?.firstname ? "disabled" : ""
                                  }
                                  formik={formik}
                                  placeholder="First name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-item input-item-name ltn__custom-icon">
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="lastName"
                                  disabled={
                                    userInfo?.data?.lastname ? "disabled" : ""
                                  }
                                  formik={formik}
                                  placeholder="Last name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-item input-item-email ltn__custom-icon">
                                <FormikControl
                                  control="input"
                                  type="email"
                                  name="emailAddress"
                                  disabled={
                                    userInfo?.data?.email ? "disabled" : ""
                                  }
                                  formik={formik}
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-item input-item-phone ltn__custom-icon">
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="contact"
                                  formik={formik}
                                  placeholder="Contact"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-item input-item-website ltn__custom-icon">
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="companyName"
                                  formik={formik}
                                  placeholder="Company name (optional)"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-item input-item-website ltn__custom-icon">
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="companyAddress"
                                  formik={formik}
                                  placeholder="Company address (optional)"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <h6>Country</h6>
                              <div
                                className="input-item"
                                style={{
                                  width: 570,
                                  position: "relative",
                                  right: 15,
                                }}
                              >
                                <DropDown
                                  formik={formik}
                                  id="country"
                                  label={"Country"}
                                  options={COUNTRIES.map((c) => ({
                                    id: c.id,
                                    label: c.name,
                                    value: c.code,
                                  }))}
                                />
                              </div>
                            </div>
                            <br />

                            <div className="col-lg-12 col-md-12 ">
                              <h6>Address</h6>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="input-item">
                                    <FormikControl
                                      control="input"
                                      type="text"
                                      name="homeAddress"
                                      formik={formik}
                                      placeholder="House number and street name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="input-item">
                                    <FormikControl
                                      control="input"
                                      type="text"
                                      name="units"
                                      formik={formik}
                                      placeholder="Apartments, unit etc. (optional)"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <h6>Town / City</h6>
                              <div className="input-item">
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="city"
                                  formik={formik}
                                  placeholder="City"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <h6>State </h6>
                              <div className="input-item">
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="state"
                                  formik={formik}
                                  placeholder="State"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <h6>Zip</h6>
                              <div className="input-item">
                                <FormikControl
                                  control="input"
                                  type="text"
                                  name="zip"
                                  formik={formik}
                                  placeholder="Zip"
                                />
                              </div>
                            </div>
                          </div>

                          <h6>Order Notes (optional)</h6>
                          <div className="input-item input-item-textarea ltn__custom-icon">
                            <FormikControl
                              control="textarea"
                              name="orderNotes"
                              formik={formik}
                              placeholder="Notes about your order, e.g. special notes for delivery."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ltn__checkout-payment-method mt-50">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                        {...(paymentLink || isLoading
                          ? { disabled: true }
                          : "")}
                      >
                        {isLoading && (
                          <div
                            className="spinner-border text-light"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        )}
                        {!isLoading && "Place Order"}
                      </button>
                      {paymentLink ? (
                        <button
                          className="btn theme-btn-1 btn-effect-1 text-uppercase"
                          type="button"
                          onClick={openPaymentWindow}
                        >
                          Proceed to payment
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="shoping-cart-total mt-50">
                      <h4 className="title-2">Cart Totals</h4>
                      <table className="table">
                        <tbody>
                          {formValue?.map((items) => {
                            return (
                              <>
                                <tr>
                                  <td className="text-capitalize">
                                    {items?.Property?.name}{" "}
                                    <strong>× {items?.units}</strong>
                                  </td>
                                  <td>${(items?.Property?.Unit?.priceUsd/ items?.Property?.Unit?.unitsQuantity)
                                  .toLocaleString(navigator.language, {
                                    maximumFractionDigits: 1,
                                  })}</td>
                                </tr>
                              </>
                            );
                          })}

                          <tr>
                            <td>
                              <strong>Order Total</strong>
                            </td>
                            <td>
                              <strong>
                                $
                                {parseFloat(reponseOfgetCartItems?.data?.data?.NetTotal)
                                  .toLocaleString(navigator.language, {
                                    maximumFractionDigits: 1,
                                  })}
                              </strong>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default Checkout;
