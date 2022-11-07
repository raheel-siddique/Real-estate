import React, { useEffect } from "react";
import Banner from "./banner";
import Counter from "./counter-v1";
import Featuresv1 from "./features-v1";
import Properties from "../marketplace/Properties";
import Navbar from "../../global-components/navbar";
import Footer_v1 from "../../global-components/footer";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../auth/user/userSlice";
import axios from "axios";

const Home = () => {
  // useEffect(() => {
  //   const $ = window.$;

  //   let publicUrl = process.env.PUBLIC_URL + "/";
  //   const minscript = document.createElement("script");
  //   minscript.async = true;
  //   minscript.src = publicUrl + "assets/js/main.js";

  //   document.body.appendChild(minscript);

  //   $(".go-top")
  //     .find("a")
  //     .on("click", function () {
  //       $(".quarter-overlay").fadeIn(1);

  //       $(window).scrollTop(0);

  //       setTimeout(function () {
  //         $(".quarter-overlay").fadeOut(300);
  //       }, 800);
  //     });

  //   $(document).on("click", ".theme-btn-1 ", function () {
  //     $("div").removeClass("modal-backdrop");
  //     $("div").removeClass("show");
  //     $("div").removeClass("fade");
  //     $("body").attr("style", "");
  //   });
  // }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const fetchData = () => {
    const token = localStorage.getItem("access-token");

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/auth/me`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        dispatch(getCurrentUser(res.data));
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />

      <Counter />
      <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />
      {/* <Testimonial /> */}
      {/* <ProSlider /> */}
      <Properties limit={3} />
      {/* <BlogSlider customClass="section-subtitle-2" /> */}
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </div>
  );
};

export default Home;
