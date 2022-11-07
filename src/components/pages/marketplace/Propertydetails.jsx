import React, { useEffect } from "react";
import PropertyDescription from "./PropertyDescription";
// import PropertySlider from "./PropertySlider";
import Footer_v1 from "../../global-components/footer";
import Navbar from "../../global-components/navbar";
import PropertySlider from "./PropertySlider";
import { useParams } from "react-router-dom";
import { useGetPropertyDetailsByIdQuery } from "../../../services/property";

const Propertydetails = () => {
  const { id } = useParams();

  const property = useGetPropertyDetailsByIdQuery(id, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result.data ?? {},
      };
    },
  });

  // useEffect(() => {
  //   if (property.isSuccess) {
  //     setSinglePropertyDetails(property);
  //   }
  //   // eslint-disable-next-line
  // }, [property.isSuccess]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />
      {/* <PageHeader pageTitle="Property Details" /> */}
      {/* <PropertySlider /> */}
      {property.isSuccess && (
        <>
          <PropertySlider images={property.data?.data.Images} />
          <PropertyDescription singlePropertyDetails={property} />
        </>
      )}
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default Propertydetails;
