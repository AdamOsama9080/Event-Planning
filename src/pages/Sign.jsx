import React from "react";
import SignPhotos from "../components/SignPhoto/SignPhoto";
import SignForm from "../components/SignForm/SignForm";
import "./Sign.css";
export default function Sign({ signType }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      {signType === "in" ? (
        <>
          <SignForm signType={signType} />
          <div className="d-none d-lg-block w-100">
            <SignPhotos signType={signType} />
          </div>
        </>
      ) : (
        <>
          <div className="d-none d-lg-block w-100">
            <SignPhotos signType={signType} />
          </div>
          <SignForm signType={signType} />
        </>
      )}
    </div>
  );
}
