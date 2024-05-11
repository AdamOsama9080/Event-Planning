import React from "react";
import OwlCarouselComponent from "../components/owlCarsowl/OwlCarsole";
import colors from "../colors";
import ColledgeEventsCont from "../components/ColledgeEventsCont/ColledgeEventsCont";
import DropdownList from "../components/dropdown/Dropdown";
import PaginationComp from "../components/pagination/Pagination";
import { useTranslation } from "react-i18next";

const ColledgeEvents = () => {
  const { t, i18n } = useTranslation();
  const rootClassName = i18n.language === "ar" ? "rtl" : "";
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push(<h1>aaa</h1>);
  }

  return (
    <div className="container">
      <p className="h1 text-center my-3">
        {t("colledgeEvents.checkoutYour")}{" "}
        <span style={{ color: colors.primaryColor }}>
          {t("colledgeEvents.collegeEvents")}
        </span>{" "}
        {t("colledgeEvents.now")}
      </p>
      <OwlCarouselComponent></OwlCarouselComponent>
      <div
        className={`my-4 d-lg-flex  justify-content-lg-between ${rootClassName}`}
      >
        <h2>
          <span style={{ color: colors.primaryColor }}>
            {t("colledgeEvents.colleges")}
          </span>{" "}
          {t("colledgeEvents.nearYou")}
        </h2>
        <div className="d-lg-flex gap-2">
          <DropdownList></DropdownList>
          <DropdownList></DropdownList>
          <DropdownList></DropdownList>
        </div>
      </div>
      <ColledgeEventsCont></ColledgeEventsCont>
      <div className="d-flex justify-content-center">
        <PaginationComp></PaginationComp>
      </div>
    </div>
  );
};

export default ColledgeEvents;
