import React from "react";
import colors from "../../../colors.js";
import EventCard from "../EventCard/EventCard.jsx";

const MediumCard = ({ cardData }) => {
  return (
    <>
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4" key={index}>
            <EventCard {...card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MediumCard;
