import React from "react";
import colors from "../../colors";
export default function CustomButton({
  children,
  onClick,
  width,
  style,
  margin,
}) {
  return (
    <button
      className={`btn btn-primary btn-block d-block ${
        margin ? margin : "mx-auto"
      } ${width ? width : "col-5"} ${margin ? margin : "mt-5"}`}
      style={{
        backgroundColor: colors.primaryColor,
        border: "none",
        height: "40px",
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
