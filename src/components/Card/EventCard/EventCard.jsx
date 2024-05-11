import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import colors from "../../../colors.js";
import { Stack } from "react-bootstrap";
const EventCard = ({ imageSrc, title, organizer, avatars }) => (
  <div className="card p-3 m-2" style={{ backgroundColor: colors.whiteColor }}>
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <img
          src={`../../../${imageSrc}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            className="fs-5"
            icon={faHeart}
            style={{ color: "#B197FC" }}
          />
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">by {organizer}</p>
      </div>
      <div>
        <Stack direction="row" spacing={1}>
          <AvatarGroup max={4}>
            {avatars.map((avatar, index) => (
              <Avatar
                key={index}
                sx={{ width: 30, height: 30 }}
                alt={avatar.alt}
                src={`../../../${avatar.src}`}
              />
            ))}
          </AvatarGroup>
        </Stack>
      </div>
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h6 style={{ color: colors.navyBlueColor }}>Current Data</h6>
      </div>
      <div>
        <button
          style={{
            backgroundColor: colors.navyBlueColor,
            color: colors.whiteColor,
            borderRadius: "15px",
            margin: "5px",
          }}
          className=""
        >
          Register
        </button>
      </div>
    </div>
  </div>
);

export default EventCard;
