import React from "react";

const DetailHiglights = ({ singlePropertyDetails }) => {
  const {
    expectedIncomePercentage,
    Unit: { priceUsd, unitsQuantity },
    Description: {
      story,
      neighbourhood,
      propertyType,
      constructionYear,
      bedroom,
      bathroom,
      rentalType,
      section8,
      lotSize,
      buildingClass,
      foundation,
      parking,
      heating,
      cooling,
      renovated
    },
    grossRentPerYear,
    grossRentPerMonth,
    propertyManagementCharges,
    platformCharges,
    maintenanceCharges,
    propertyTaxCharges,
    insuranceCharges,
    utilityCharges,
    fullAddress,
    rentPerToken,
    isRented,
    initialMaintenanceReserveInvestment,
    propertyManager
  } = singlePropertyDetails?.data?.data;

  return (
    <>
      <div
        style={{ backgroundColor: "#9b51e0" }}
        className="text-light ltn__apartments-plan-area product-details-apartments-plan mt-5"
      >
        <div className="text-center  ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center--- mt-5 pt-2">
          <div className="nav">
            <a
              data-bs-toggle="tab"
              href="#liton_tab_3_1"
              className="active text-light"
            >
              Highlights
            </a>
            <a
              data-bs-toggle="tab"
              href="#liton_tab_3_2"
              className="rounded text-light"
            >
              Financials
            </a>
            <a
              data-bs-toggle="tab"
              href="#liton_tab_3_3"
              className="rounded text-light"
            >
              Details
            </a>
          </div>
        </div>
      </div>
      <div className="tab-content active">
        <div className="tab-pane fade active " id="liton_tab_3_1">
          <div className="ltn__apartments-tab-content-inner">

            <div
              style={{
                backgroundColor: "white",
                display: "flex",
              }}
              className="maindivforpropertydetailpage property-detail-info-list section-bg-1 clearfix tab1"
            >
              <div className="table-responsive mt-50 mb-5 col-lg-6">
                <table className="table">
                  <tbody
                    style={{
                      backgroundColor: "white",
                    }}
                  >

                    <tr style={{ backgroundColor: "white" }}>
                      <th style={{backgroundColor: "white"}}>
                        Expected Income :
                      </th>
                      <td style={{ backgroundColor: "white" }}>
                        {expectedIncomePercentage
                          ? `${parseFloat(expectedIncomePercentage).toFixed(2)}%`
                          : "Not available"}
                      </td>
                    </tr>
                    {/* <tr style={{ backgroundColor: "white"}}>
                      <th scope="col">Rent Start Date:</th>
                      <td>Not available</td>
                    </tr> */}
                    <tr style={{ backgroundColor: "white", borderBottomColor: "lightgray" }} >
                      <th scope="col">Rent Per Token:</th>
                      <td>
                        {rentPerToken
                          ? `$ ${rentPerToken.toLocaleString(navigator.language, {
                              maximumFractionDigits: 1,
                            })}`
                          : "Not available"}
                      </td>
                    </tr>
                      <tr style={{ backgroundColor: "white", borderBottomColor: "lightgray", }} >
                        <th scope="col">Token Price:</th>
                        <td>
                          {priceUsd
                            ? `$ ${(priceUsd/unitsQuantity).toLocaleString(navigator.language, {
                                maximumFractionDigits: 1,
                              })}`
                            : "Not available"}
                        </td>
                      </tr>
                    <tr style={{ backgroundColor: "white", borderBottomColor: "lightgray" }} >
                      <th scope="col">Total Tokens :</th>
                      <td>
                        {
                          unitsQuantity
                            ? `${unitsQuantity.toLocaleString(navigator.language)}`
                            : "Not available"
                        }
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <div className="table-responsive mt-50 mb-5 col-lg-6">
                <table className="table">
                  <tbody>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Property type: </th>
                      <td>
                        {propertyType ? `${propertyType}` : "Not available"}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Full Address:</th>
                      <td>{fullAddress || 'Not available'}</td>
                    </tr>

                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Neighborhood:</th>
                      <td>
                        { neighbourhood || "Not available"}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Construction Year: </th>
                      <td>
                        {constructionYear || 'Not available'}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Stories:</th>
                      <td>
                        {story
                          ? parseInt(story) === 1 ? `Single Story` : `${story} Stories`
                          : "Not available"}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }}>
                      <th
                        style={{
                          backgroundColor: "white"
                        }}
                      >
                        Bedroom/Bath:
                      </th>
                      <td
                        style={{
                          backgroundColor: "white"
                        }}
                      >
                        { 
                          !bedroom && !bathroom 
                          ? 'Not available!'
                          : `${bedroom || ''}, ${bathroom || ''}`
                        }
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Rental Type:</th>
                      <td>
                        {rentalType || "Not available"}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Rented?:</th>
                      <td>
                        {isRented || "Not available"}
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "white" }} >
                      <th scope="col">Section 8?:</th>
                      <td>
                        {section8 || "Not available"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="liton_tab_3_2">
          <div className="ltn__apartments-tab-content-inner">
            <div className="property-detail-info-list section-bg-1 clearfix mb-60">
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  // justifyContent: "space-around",
                }}
                className="maindivforpropertydetailpage property-detail-info-list section-bg-1 clearfix tab1"
              >
                <div className="table-responsive mt-50 mb-5 col-sm-12">
                  {/* <h4 className="text-center">Order Details</h4> */}
                  <table className="table">
                    <tbody>
                      {/* {singlePropertyDetails?.data?.data?.Financials
                        ?.grossRentPerMonth && ( */}
                      <tr style={{ backgroundColor: "white" }}>
                        <th
                          style={{
                            backgroundColor: "white"
                          }}
                        >
                          Gross Rent / year:
                        </th>
                        <td
                          style={{
                            backgroundColor: "white"
                          }}
                        >
                          {grossRentPerYear
                            ? `$ ${parseFloat(grossRentPerYear).toLocaleString(
                                navigator.language,
                                {
                                  maximumFractionDigits: 1,
                                }
                              )}`
                            : "Not available"}
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Gross Rent / month:</th>
                        <td>
                          {grossRentPerMonth
                            ? `$ ${parseFloat(grossRentPerMonth).toLocaleString(
                                navigator.language,
                                {
                                  maximumFractionDigits: 1,
                                }
                              )}`
                            : "Not available"}
                        </td>
                      </tr>
                      {/* )} */}

                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Property Management:</th>
                        <td>
                          {propertyManagementCharges
                            ? `$ ${parseFloat(
                                propertyManagementCharges
                              ).toLocaleString(navigator.language, {
                                maximumFractionDigits: 1,
                              })}`
                            : "Not available"}
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Smart Crowd Platform:</th>
                        <td>
                          {platformCharges
                            ? `$ ${parseFloat(platformCharges).toLocaleString(
                                navigator.language,
                                {
                                  maximumFractionDigits: 1,
                                }
                              )}`
                            : "Not available"}
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }}>
                        <th
                          style={{
                            backgroundColor: "white",
                            borderBottomColor: "lightgray",
                          }}
                        >
                          Maintenance Expenses:
                        </th>
                        <td
                          style={{
                            backgroundColor: "white",
                            borderBottomColor: "lightgray",
                          }}
                        >
                          {maintenanceCharges
                            ? `$ ${parseFloat(maintenanceCharges).toLocaleString(
                                navigator.language,
                                {
                                  maximumFractionDigits: 1,
                                }
                              )}`
                            : "Not available"}
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Property Taxes:</th>
                        <td>
                          {propertyTaxCharges
                            ? `$ ${parseFloat(propertyTaxCharges).toLocaleString(
                                navigator.language,
                                {
                                  maximumFractionDigits: 1,
                                }
                              )}`
                            : "Not available"}
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Insurance:</th>
                        <td>
                          {insuranceCharges
                            ? `$ ${parseFloat(insuranceCharges).toLocaleString(
                                navigator.language,
                                {
                                  maximumFractionDigits: 1,
                                }
                              )}`
                            : "Not available"}
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Utilities: </th>
                        <td>
                          {utilityCharges
                            ? `$ ${parseFloat(utilityCharges).toLocaleString(
                                navigator.language,
                                {
                                  maximumFractionDigits: 1,
                                }
                              )}`
                            : "Not available"}
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Initial Maintenance Reserve : </th>
                        <td>
                          {initialMaintenanceReserveInvestment
                            ? `$ ${parseFloat(initialMaintenanceReserveInvestment).toLocaleString(
                                navigator.language,
                                {
                                  maximumFractionDigits: 1,
                                }
                              )}`
                            : "Not available"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="liton_tab_3_3">
          <div className="ltn__apartments-tab-content-inner">
            <div className="property-detail-info-list section-bg-1 clearfix mb-60">
              {/* newlist */}
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  // justifyContent: "space-around",
                }}
                className="maindivforpropertydetailpage property-detail-info-list section-bg-1 clearfix tab1"
              >
                <div className="table-responsive mt-50 mb-5 col-lg-6 col-sm-12">
                  <table className="table">
                    <tbody>
                      <tr style={{ backgroundColor: "white" }}>
                        <th
                          style={{
                            backgroundColor: "white"
                          }}
                        >
                          Lot Size (sqft):
                        </th>
                        <td
                          style={{
                            backgroundColor: "white"
                          }}
                        >
                          {lotSize
                            ? `${lotSize.toLocaleString(navigator.language, {
                                maximumFractionDigits: 0,
                              })}`
                            : "Not available"}
                        </td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Foundation:</th>
                        <td>{foundation || "Not available"}</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Parking:</th>
                        <td>{parking || "Not available"}</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="table-responsive mt-50 mb-5 col-lg-6 col-sm-12">
                  {/* <h4 className="text-center">Order Details</h4> */}
                  <table className="table">
                    <tbody>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Heating:</th>
                        <td>{heating || "Not available"}</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Cooling:</th>
                        <td>{cooling || "Not available"}</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Building Class:</th>
                        <td>{buildingClass || "Not available"}</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Renovated:</th>
                        <td>{renovated || 'Not available!'}</td>
                      </tr>
                      <tr style={{ backgroundColor: "white" }} >
                        <th scope="col">Property Manager:</th>
                        <td>{propertyManager || "Not available"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailHiglights;
