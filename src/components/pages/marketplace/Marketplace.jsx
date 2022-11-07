import React, { useEffect } from "react";

import Properties from "./Properties";

import Navbar from "../../global-components/navbar";
import Footer_v1 from "../../global-components/footer";

const Marketplace = () => {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, []);
  useEffect(() => {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(".quarter-overlay").fadeIn(1);

        $(window).scrollTop(0);

        setTimeout(function () {
          $(".quarter-overlay").fadeOut(300);
        }, 800);
      });

    $(document).on("click", ".theme-btn-1 ", function () {
      $("div").removeClass("modal-backdrop");
      $("div").removeClass("show");
      $("div").removeClass("fade");
      $("body").attr("style", "");
    });
  }, []);
  return (
    <>
      <Navbar />
      {/* <PageHeader pageTitle="Marketplace" /> */}

      <Properties />
      {
        // eslint-disable-next-line
        <Footer_v1 />
      }
    </>
  );
};
export default Marketplace;
