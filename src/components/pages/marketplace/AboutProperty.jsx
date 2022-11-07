import React from "react";

const AboutProperty = ({ singlePropertyDetails }) => {
  return (
    <>
      <div className="col-lg-12">
        <h4 className="title-2">About The Property</h4>
        <p className="text-capitalize">
          {singlePropertyDetails?.data?.data?.about}
        </p>
        {/* <p className="text-capitalize">
          To the left is the modern kitchen with central island, leading through
          to the unique breakfast family room which feature glass walls and
          doors out onto the garden and access to the separate utility room.
        </p> */}
      </div>
    </>
  );
};

export default AboutProperty;
