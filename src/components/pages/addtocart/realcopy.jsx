// import React, { Component, useEffect, useState } from "react";
// import { updatedDiff } from "deep-object-diff";
// import { Link } from "react-router-dom";
// import {
//   useGetCartItemsQuery,
//   useRemoveitemFromCartMutation,
//   useUpdateTokenToCartMutation,
// } from "../../../services/addtocart";
// import Spinner from "../auth/Spinner";
// import "./AddToCart.css";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";

// import "./Cart.css";

// toast.configure();
// const Cart = () => {
//   const currentUser = useSelector((state) => state.user.userValue);
//   const [updateMyToken, resOfUpdateToken] = useUpdateTokenToCartMutation();
//   const [updatedValues, setUpdateValues] = useState([]);
//   const [inputFieldsValue, setInputFieldsValue] = useState([]);

//   const reponseOfgetCartItems = useGetCartItemsQuery(currentUser?.data?.id);
//   const [formValue, setFormValue] = useState([]);
//   const [deleteItem, resOfDeleteItem] = useRemoveitemFromCartMutation();

//   useEffect(() => {
//     setFormValue(reponseOfgetCartItems?.data?.data?.CartItems);
//   }, [reponseOfgetCartItems?.data?.data?.CartItems]);

//   useEffect(() => {
//     if (resOfDeleteItem.isSuccess) {
//       toast.success("item Deleted Successfully");
//     }
//   }, [resOfDeleteItem.isSuccess]);

//   useEffect(() => {
//     if (resOfUpdateToken.isSuccess) {
//       toast.success("item Updated Successfully");
//     }
//   }, [resOfDeleteItem.isSuccess]);

//   useEffect(() => {
//     if (resOfUpdateToken.isError) {
//       toast.error("limit exceeed");
//     }
//   }, [resOfUpdateToken.isError]);

//   let getValueOfTotalPrice = formValue?.map((prices) => {
//     return prices?.units * prices?.Property?.Unit?.priceUsd;
//   });
//   const removeFromCart = (id) => {
//     deleteItem(id);
//   };
//   const handleChange = (event, index) => {
//     let newValues = [...formValue];
//     newValues[index] = {
//       ...formValue[index],
//       units: event.target.value,
//     };
//     setFormValue(newValues);
//   };
//   const updateValues = () => {
//     const initialValue = reponseOfgetCartItems?.data?.data?.CartItems;
//     const values = formValue;
//     const diff = updatedDiff(initialValue, values);
//     let findDiff = Object.keys(diff).map((values) => {
//       return formValue[values];
//     });
//     let carts = findDiff.map((values, index) => {
//       return {
//         propertyId: values?.propertyId,
//         cartId: values?.id,
//         units: values?.units,
//       };
//     });
//     updateMyToken({
//       carts,
//     });
//   };

//   let publicUrl = process.env.PUBLIC_URL + "/";
//   return (
//     <>
//       <div className="liton__shoping-cart-area mb-120">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="shoping-cart-inner">
//                 {currentUser && formValue?.length >= 1 && (
//                   <>
//                     {/* <Link to="/marketplace">
//                       <div className="mbdevbtn">
//                         <button
//                           className="btn mbdevbtn"
//                           style={{
//                             borderRadius: 50,
//                             color: "white",
//                             backgroundColor: "#FF5A3C",
//                           }}
//                         >
//                           <span className="textbtn"> Go For More Shopping</span>
//                         </button>
//                       </div>
//                     </Link> */}
//                   </>
//                 )}
//                 <br />
//                 <br />
//                 {resOfDeleteItem.isLoading && (
//                   <>
//                     <div
//                       className="spinner-border d-flex justify-content-center"
//                       style={{ width: 50, height: 50, marginLeft: 600 }}
//                       role="status"
//                     >
//                       <span className="sr-only">Loading...</span>
//                     </div>
//                   </>
//                 )}
//                 <div className="shoping-cart-table table-responsive">
//                   <table className="table align-middle gs-0 gy-4">
//                     {currentUser &&
//                       reponseOfgetCartItems.isSuccess &&
//                       !resOfDeleteItem.isLoading && (
//                         <tbody>
//                           <tr>
//                             <td
//                               className="cart-product-remove"
//                               style={{ width: 40 }}
//                             ></td>
//                             <th
//                               style={{ width: 170 }}
//                               className="cart-product-image text-center"
//                             >
//                               Product
//                             </th>
//                             <th
//                               className=" cart-product-info text-capitalize"
//                               style={{ width: 220 }}
//                             >
//                               Prodcut Name
//                             </th>
//                             <th
//                               style={{ width: 220 }}
//                               className="cart-product-price"
//                             >
//                               Price
//                             </th>
//                             <th
//                               className="cart-product-quantity"
//                               style={{ width: 220 }}
//                             >
//                               Quantity
//                             </th>
//                             <th
//                               style={{ width: 220 }}
//                               className="cart-product-subtotal"
//                             >
//                               Total Price
//                             </th>
//                           </tr>
//                           {!resOfDeleteItem.isLoading &&
//                             formValue?.map((cartItem, index) => {
//                               return (
//                                 <>
//                                   <tr key={cartItem.id}>
//                                     {/* <td></td> */}
//                                     <td
//                                       propertyid={`${cartItem.Property.id}`}
//                                       className="cart-product-remove"
//                                       style={{ width: 50 }}
//                                       onClick={() =>
//                                         removeFromCart(cartItem?.Property?.id)
//                                       }
//                                     >
//                                       <span
//                                         className=""
//                                         style={{
//                                           // fontSize: 15,
//                                           color: "red",
//                                           // textAlign: "left",
//                                         }}
//                                       >
//                                         x
//                                       </span>
//                                     </td>
//                                     <td
//                                       className="cart-product-image"
//                                       style={{ width: 170 }}
//                                     >
//                                       <Link
//                                         to={`propertydetails/${cartItem?.Property?.id}`}
//                                       >
//                                         <img
//                                           style={{ width: 80 }}
//                                           // id={
//                                           //   cartItem?.Property?.Unit?.priceUsd
//                                           //     .length >= 4
//                                           //     ? "mineidcheck"
//                                           //     : ""
//                                           // }
//                                           className="img-fluid"
//                                           src={
//                                             publicUrl +
//                                             "assets/img/img-slide/34.jpg"
//                                           }
//                                           alt="#"
//                                         />
//                                       </Link>
//                                     </td>
//                                     <td
//                                       style={{ width: 220 }}
//                                       className="cart-product-info text-capitalize"
//                                     >
//                                       {/* <h6 className=""> */}
//                                       <Link
//                                         className=""
//                                         to={`propertydetails/${cartItem?.Property?.id}`}
//                                       >
//                                         {`${cartItem?.Property?.name}`}
//                                       </Link>
//                                       {/* </h6> */}
//                                     </td>
//                                     <td
//                                       style={{ width: 220 }}
//                                       className="cart-product-price"
//                                     >
//                                       $
//                                       {`${cartItem?.Property?.Unit?.priceUsd.toLocaleString(
//                                         navigator.language,
//                                         { minimumFractionDigits: 0 }
//                                       )}`}
//                                     </td>
//                                     <td
//                                       style={{ width: 220 }}
//                                       className="cart-product-quantity"
//                                     >
//                                       {/* <label className="">
//                                         Tokens Left:
//                                         {cartItem?.Property?.Unit?.unitsRemaining.toLocaleString(
//                                           navigator.language,
//                                           { minimumFractionDigits: 0 }
//                                         )}
//                                       </label> */}
//                                       <div
//                                         // style={{ width: 0, height: 60 }}
//                                         className=""
//                                       >
//                                         <input
//                                           propertyid={`${cartItem?.Property?.id}`}
//                                           type="number"
//                                           min={1}
//                                           max={
//                                             cartItem?.Property?.Unit
//                                               ?.unitsRemaining
//                                           }
//                                           value={cartItem?.units.toLocaleString(
//                                             navigator.language,
//                                             { minimumFractionDigits: 0 }
//                                           )}
//                                           name="qtybutton"
//                                           // style={{width:100, height:50}}
//                                           className="text-center"
//                                           onChange={(event) =>
//                                             handleChange(event, index)
//                                           }
//                                         />
//                                       </div>
//                                     </td>
//                                     <td
//                                       style={{ width: 220 }}
//                                       className="cart-product-subtotal"
//                                     >
//                                       $
//                                       {`${(
//                                         cartItem?.units *
//                                         cartItem?.Property?.Unit?.priceUsd
//                                       ).toLocaleString(navigator.language, {
//                                         minimumFractionDigits: 0,
//                                       })}`}
//                                     </td>
//                                   </tr>
//                                 </>
//                               );
//                             })}
//                           {resOfUpdateToken.isLoading && (
//                             <div class="d-flex justify-content-center">
//                               <div class="spinner-border" role="status">
//                                 <span class="visually-hidden">Loading...</span>
//                               </div>
//                             </div>
//                           )}

//                           <tr className="cart-coupon-row">
//                             <td>
//                               <button
//                                 onClick={updateValues}
//                                 type="submit"
//                                 className="btn theme-btn-2 btn-effect-2--"
//                               >
//                                 Update Cart
//                               </button>
//                             </td>
//                           </tr>
//                         </tbody>
//                       )}
//                   </table>
//                 </div>
//                 {/*
//                 <table class="table table-striped">
//                   <thead>
//                     <tr>
//                       <th scope="col">#</th>
//                       <th scope="col">First</th>
//                       <th scope="col">Last wjnjkefefle;fe;fe;fe;f</th>
//                       <th scope="col">Handle</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <th scope="row">1</th>
//                       <td>Mark</td>
//                       <td>Otto</td>
//                       <td>@mdo</td>
//                     </tr>
//                     <tr>
//                       <th scope="row">2</th>
//                       <td>Jacob</td>
//                       <td>Thornton</td>
//                       <td>@fat</td>
//                     </tr>
//                     <tr>
//                       <th scope="row">3</th>
//                       <td>Larry</td>
//                       <td>the Bird</td>
//                       <td>@twitter</td>
//                     </tr>
//                   </tbody>
//                 </table> */}
//                 {currentUser &&
//                   reponseOfgetCartItems.isSuccess &&
//                   reponseOfgetCartItems?.data?.data?.CartItems?.length >= 1 && (
//                     <div className="shoping-cart-total mt-50">
//                       <h4>Cart Totals</h4>
//                       <table className="table">
//                         <tbody>
//                           <tr>
//                             <td>
//                               <strong>Order Total</strong>
//                             </td>
//                             <td>
//                               <strong>
//                                 {" "}
//                                 $
//                                 {getValueOfTotalPrice
//                                   ?.reduce((acc, curr) => {
//                                     return acc + curr;
//                                   }, 0)
//                                   .toLocaleString(navigator.language, {
//                                     minimumFractionDigits: 0,
//                                   })}
//                               </strong>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                       <div className="btn-wrapper text-right go-top">
//                         <Link
//                           to="/checkout"
//                           className="theme-btn-1 btn btn-effect-1"
//                         >
//                           Proceed to checkout
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 {!currentUser && (
//                   <>
//                     <h1 className="cartemptyhead ">
//                       {" "}
//                       Your Cart Is Currently Empty
//                     </h1>
//                     <br />
//                     <Link to="/marketplace">
//                       <button
//                         className="btn btn-outline-primary"
//                         style={{ borderRadius: 50 }}
//                       >
//                         Return To Shop
//                       </button>
//                     </Link>
//                   </>
//                 )}

//                 {currentUser &&
//                   reponseOfgetCartItems.isSuccess &&
//                   reponseOfgetCartItems?.data?.data?.CartItems?.length < 1 && (
//                     <>
//                       <h1 className="cartemptyhead">
//                         {" "}
//                         Your Cart Is Currently Empty
//                       </h1>
//                       <br />
//                       <Link to="/marketplace">
//                         <button
//                           className="btn btn-outline-primary"
//                           style={{ borderRadius: 50 }}
//                         >
//                           Return To Shop
//                         </button>
//                       </Link>
//                     </>
//                   )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Cart;
