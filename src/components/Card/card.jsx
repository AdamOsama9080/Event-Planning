import React from "react";
import cardData from "../../MyJson/card.json";
import colors from "../../colors.js";
import AboveCard from "./AboveCard/AboveCard.jsx";
import MediumCard from "./MediumCard/MediumCard.jsx";
import FakeNavBar from "../FakeNavBar/FakeNavBar.jsx";

const Card = () => {
  return (
    <>
      <div className="col-md-9">
        <div className="row">
          <FakeNavBar></FakeNavBar>
          <AboveCard />
          <div className="my-5">
            <span
              className="fs-4 fw-bold"
              style={{ color: colors.primaryColor }}
            >
              Events
            </span>{" "}
            <span className="fs-4 fw-bold">Participated</span>
          </div>
          <MediumCard cardData={cardData.slice(0, 3)} />{" "}
          {/* Display first three cards */}
          <div className="d-flex justify-content-between my-4">
            <div className="fs-4 fw-semibold">Trending Events</div>
            <div className="mynav d-flex justify-content-center">
              <span style={{ color: colors.primaryColor }} className="mx-3">
                Technical
              </span>
              <span style={{ color: colors.primaryColor }} className="mx-3">
                Musical
              </span>
              <span style={{ color: colors.primaryColor }} className="mx-3">
                Culture
              </span>
              <span style={{ color: colors.primaryColor }} className="mx-3">
                Sports
              </span>
            </div>
          </div>
          <MediumCard cardData={cardData.slice(3)} />{" "}
          {/* Display remaining three cards */}
        </div>
      </div>
    </>
  );
};

export default Card;
