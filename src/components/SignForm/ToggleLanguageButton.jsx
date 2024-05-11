import React from "react";
import { useTranslation } from "react-i18next";
import CustomButton from "../CustomButton";

export default function ToggleLanguageButton({ style }) {
  const [t, i18n] = useTranslation();
  return i18n.language === "ar" ? (
    <CustomButton
      onClick={() => i18n.changeLanguage("en")}
      width="col-3"
      margin=" "
      style={{ ...style, marginLeft: "10px" }}
    >
      En
    </CustomButton>
  ) : (
    <CustomButton
      onClick={() => i18n.changeLanguage("ar")}
      width="col-3"
      margin=" "
      style={{ ...style, marginLeft: "10px" }}
    >
      Ar
    </CustomButton>
  );
}
