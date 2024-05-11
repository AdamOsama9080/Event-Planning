import React from "react";
import { Link } from "react-router-dom";
import colors from "../../../colors.js";
const AboveCard = () => {
  return (
    <div className="ml-auto w-100 text-light">
      <div
        className="  p-5"
        style={{
          backgroundImage: 'url("../../images/Products 2.svg")',
          height: "400px",
          borderRadius: "25px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-sm-100 w-md-50">
          <h2>
            Discover and<br></br> experience<br></br> extraordinary Events
          </h2>
          <p>
            Enter in the world of events. Discover now the<br></br> latest
            Events or start creating your own!
          </p>
          <div>
            <button
              className="btn ms-4 me-4  rounded-5 my-4"
              style={{
                backgroundColor: colors.whiteColor,
                color: colors.BlackColor,
              }}
            >
              Discover now
            </button>
            <button
              className="btn ms-4 rounded-5 "
              style={{ color: colors.whiteColor }}
            >
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveCard;
