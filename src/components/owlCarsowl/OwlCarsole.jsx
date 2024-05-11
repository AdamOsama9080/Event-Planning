import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const OwlCarouselComponent = () => {
  return (
    <div className="container ">
      <OwlCarousel
        className="owl-theme"
        loop
        nav
        margin={8}
        responsive={{
          0: {
            items: 1,
          },
          480: {
            items: 2,
          },
          768: {
            items: 3,
            center: true,
            dots: false,
            nav: true,
            responsiveClass: true,
            responsiveRefreshRate: 200,
            navText: [
              '<i class="fas fa-chevron-left"></i>',
              '<i class="fas fa-chevron-right"></i>',
            ],
          },
        }}
      >
        <div>
          <img
            style={{ borderRadius: "15px", maxHeight: "150px" }}
            className="img "
            src={"images/unsplash_U0dBV_QeiYk.png"}
            alt="Image 1"
          />
        </div>
        <div>
          <img
            style={{ borderRadius: "15px", maxHeight: "150px" }}
            className="img "
            src={"images/unsplash_Ucr4Yp-t364.png"}
            alt="Image 2"
          />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default OwlCarouselComponent;
