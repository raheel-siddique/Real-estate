import React, { useEffect, useState } from "react";
import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../../commoncomponents/FormikControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGetCartItemsQuery } from "../../../services/addtocart";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAddCheckoutDataMutation } from "../../../services/checkout";
import { toast } from "react-toastify";

const Checkout = () => {
  const [age, setAge] = React.useState("");
  // const [checkPayment, setCheckPayment] = useState(false);
  const currentUser = useSelector((state) => state.user.userValue);
  const reponseOfgetCartItems = useGetCartItemsQuery(currentUser?.data?.id);
  const [checkoutRes, { isSuccess, isError }] = useAddCheckoutDataMutation();
  const [formValue, setFormValue] = useState([]);
  const [payment, setPayment] = useState("");
  const history = useHistory();

  useEffect(() => {
    setFormValue(reponseOfgetCartItems?.data?.data?.CartItems);
    // eslint-disable-next-line
  }, [reponseOfgetCartItems?.data?.data?.CartItems]);

  useEffect(() => {
    if (isSuccess) {
      setFormValue(null);
      history.push("/order-confirm");
      toast.success("Order has been placed successfully");
      // setFormValue([]);
      // formValue("");
    }
    // eslint-disable-next-line
  }, [isSuccess]);
  useEffect(() => {
    if (isError) toast.error("Something went wrong");
  }, [isError]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    contact: "",
    companyName: "",
    companyAddress: "",
    homeAddress: "",
    units: "",
    city: "",
    state: "",
    zip: "",
    orderNotes: "",
  };
  let getValueOfTotalPrice = formValue?.map((prices) => {
    return prices?.units * prices?.Property?.Unit?.priceUsd;
  });
  const onSubmit = async (values) => {
    // setFormValue("");

    // await checkoutRes({
    //   id: 2,
    //   orderId: "123",
    //   first_name: "Rasim",
    //   last_name: "siddiqui",
    //   email: "abcd123@gmail.com",
    //   contact: "0337627889394",
    //   company_name: "hdfhdcgjkd",
    //   company_address: "sfdnmv23",
    //   country: "india",
    //   adresss: "edjsj34586548",
    //   apartments: "jnfjk45895",
    //   city: "lahore",
    //   state: "asia",
    //   zip: "45678",
    //   order_notes: "sdjnkdfsjk dwduhsfuksncsuhe  qdja",
    //   payment_method: "paypal",
    // });
    await checkoutRes({
      id: new Date().getMilliseconds().toString(),
      theDate:
        new Date().getDate() + new Date().getMonth() + new Date().getFullYear(),
      orderId: new Date().getMilliseconds().toString(),
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.emailAddress,
      contact: values.contact,
      company_name: values.companyName,
      company_address: values.companyAddress,
      country: age,
      item: formValue.map((item) => {
        return {
          order_item: item?.Property?.name,
          order_tokens: item?.units,
          item_amount: item?.Property?.Unit?.priceUsd,
        };
      }),
      adresss: values.homeAddress,
      apartments: values.apartments,
      city: values.city,
      state: values.state,
      zip: values.zip,
      order_notes: values.orderNotes,
      payment_method: payment,
      order_total: getValueOfTotalPrice
        ?.reduce((acc, curr) => {
          return acc + curr;
        }, 0)
        .toLocaleString(navigator.language, {
          minimumFractionDigits: 0,
        }),
    });
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
    zip: Yup.string().required("zip is required"),
    // orderNotes: Yup.string().required("order notes is required"),
    contact: Yup.string().required("Contact Number is Required"),
  });
  // const countryList = [
  //   {
  //     key: "Select Country",
  //     value: "",
  //   },
  //   {
  //     key: "Pakistan",
  //     value: "pakistan",
  //   },
  //   {
  //     key: "India",
  //     value: "india",
  //   },
  //   {
  //     key: "Afghanistan",
  //     value: "afghanistan",
  //   },
  // ];

  const checkPayments = () => {
    // setCheckPayment(true);
    setPayment("Check payments");
  };
  const cashPaymnet = () => {
    // setCheckPayment(true);
    setPayment("Cash on delivery");
  };
  const paypal = () => {
    // setCheckPayment(true);
    setPayment("Paypal");
  };
  return (
    <>
      <Navbar />
      <div className="ltn__checkout-area mb-105">
        <div className="container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
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
                              {/* <h6>Country</h6> */}
                              {/* <br /> */}
                              <div className="input-item">
                                {/* <Box
                                  sx={{
                                    width: 545,
                                    height: 100,
                                    borderColor: "red",
                                  }}
                                > */}
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    <span style={{ fontSize: 13 }}>
                                      country
                                    </span>
                                  </InputLabel>
                                  <Select
                                    // style={{
                                    //   height: 60,
                                    //   borderColor: "red",
                                    //   width: 400,
                                    // }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                  >
                                    <MenuItem value="">Select Country</MenuItem>
                                    <MenuItem selected value="pakistan">
                                      Pakistan
                                    </MenuItem>
                                    <MenuItem value="india">India</MenuItem>
                                    <MenuItem value="america">America</MenuItem>
                                  </Select>
                                </FormControl>
                                {/* </Box> */}
                              </div>
                            </div>
                            <br />

                            <div className="col-lg-12 col-md-12 mt-5">
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
                                      placeholder="Apartments, unit etc. (optional)
                      
                        "
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
                          {/* <p>
            <label className="input-info-save mb-0">
              <input type="checkbox" name="agree" /> Create an
              account?
            </label>
          </p> */}
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
                      <h4 className="title-2">Payment Method</h4>
                      <div id="checkout_accordion_1">
                        {/* card */}
                        <div className="card" onClick={checkPayments}>
                          <h5
                            className="collapsed ltn__card-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-item-2-1"
                            // aria-expanded="false"
                          >
                            Check payments
                          </h5>
                          <div
                            id="faq-item-2-1"
                            className="collapse"
                            data-bs-parent="#checkout_accordion_1"
                          >
                            <div className="card-body">
                              <p>
                                Please send a check to Store Name, Store Street,
                                Store Town, Store State / County, Store
                                Postcode.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* card */}
                        <div className="card" onClick={cashPaymnet}>
                          <h5
                            className="ltn__card-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-item-2-2"
                            aria-expanded="true"
                          >
                            Cash on delivery
                          </h5>
                          <div
                            id="faq-item-2-2"
                            className="collapse show"
                            data-bs-parent="#checkout_accordion_1"
                          >
                            <div className="card-body">
                              <p>Pay with cash upon delivery.</p>
                            </div>
                          </div>
                        </div>
                        {/* card */}
                        <div className="card" onClick={paypal}>
                          <h5
                            className="collapsed ltn__card-title"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-item-2-3"
                            aria-expanded="false"
                          >
                            PayPal
                            <img
                              src="./paypal-logo-printed-paper-chisinau-moldova-september-internet-based-digital-money-transfer-service-128373487.jpg"
                              alt=""
                            />
                          </h5>
                          <div
                            id="faq-item-2-3"
                            className="collapse"
                            data-bs-parent="#checkout_accordion_1"
                          >
                            <div className="card-body">
                              <p>
                                Pay via PayPal; you can pay with your credit
                                card if you don’t have a PayPal account.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__payment-note mt-30 mb-30">
                        <p>
                          Your personal data will be used to process your order,
                          support your experience throughout this website, and
                          for other purposes described in our privacy policy.
                        </p>
                      </div>
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        Place order
                      </button>
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
                                  <td>
                                    {items?.Property?.name}{" "}
                                    <strong>× {items?.units}</strong>
                                  </td>
                                  <td>{items?.Property?.Unit?.priceUsd}</td>
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
