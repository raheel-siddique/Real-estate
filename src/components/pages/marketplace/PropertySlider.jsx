import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./propertyDetails.css";

const PropertySlider = ({ images }) => {
  const slideRef = React.useRef(null);
  return (
    <>
      <div className="ltn__img-slider-area">
        <div className="">
          {images.length < 3 && (
            <div className="row">
              {images.map((img) => (
                <div className="col-lg-12" style={{ width: "100%" }}>
                  <div className="">
                    <Link to={img}>
                      <img
                        src={img}
                        alt="Product"
                        className="imgslider1 img-fluid"
                        style={{ height: 700, width: "100%" }}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          {images.length >= 3 && (
            <div className="">
              <Slide
                ref={slideRef}
                autoplay
                duration={3000}
                pauseOnHover
                transitionDuration={400}
                infinite
              >
                {images.map((img, idx) => (
                  <div className="row" key={idx} style={{ width: "100%" }}>
                    <div className="ltn__img-slide-item-4 m-0">
                      <Link
                        to={{ pathname: img }}
                        replace
                        data-rel="lightcase:myCollection"
                      >
                        <img
                          src={img}
                          alt="Product"
                          className="img-fluid"
                          height={500}
                          style={{
                            width: "100%",
                            objectFit: "contain",
                            aspectRatio: "16/9",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default PropertySlider;
