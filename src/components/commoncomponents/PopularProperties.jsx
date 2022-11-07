import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllPropertyQuery } from "../../services/property";

const PopularProperties = () => {
  const properties = useGetAllPropertyQuery();
  const [popularProperties, setPopularProperties] = useState([]);
  useEffect(() => {
    if (properties.isSuccess) {
      setPopularProperties(properties);
    }
    // eslint-disable-next-line
  }, [properties.isSuccess]);

  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    popularProperties?.data?.data?.rows?.length
    ?  <div className="widget ltn__popular-product-widget">
        <h4 className="ltn__widget-title ltn__widget-title-border-2">
          Popular Properties
        </h4>
        {/* ltn__product-item */}
        {popularProperties?.data?.data?.rows?.slice(0, 3)?.map((popular, index) => {
          return (
            <div
              key={index} 
              className="row ltn__popular-product-widget-active slick-arrow-1">
              <div className="col-12">
                <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                  <div className="product-img go-top">
                    <Link to={`/propertydetails/${popular.id}`}>
                      <img
                        style={{ width: 300 }}
                        className="img-fluid"
                        src={
                          publicUrl +
                          "assets/img/property/sample-images/property_1_1.jpg"
                        }
                        alt="popimage"
                      />
                    </Link>
                    <div className="real-estate-agent">
                      <div className="agent-img">
                        <Link to="/team-details">
                          <img
                            // class
                            src={
                              publicUrl +
                              "assets/img/property/sample-images/property_1_1.jpg"
                            }
                            alt="#"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-price">
                      <span>
                        {`${popular?.Unit?.priceUsd}`}
                        <label>/Month</label>
                      </span>
                    </div>
                    <h2 className="product-title">
                      <Link to="">{popular?.name}</Link>
                    </h2>
                    <div className="product-img-location">
                      <ul>
                        <li>
                          <Link to="">
                            <i className="flaticon-pin" /> {popular?.city},
                            {popular?.country}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
                      <li>
                        <span>3 </span>
                        Bedrooms
                      </li>
                      <li>
                        <span>2 </span>
                        Bathrooms
                      </li>
                      <li>
                        <span>3450 </span>
                        square Ft
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
    : <></>
  );
};

export default PopularProperties;
