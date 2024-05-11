import React from "react";
import { Card, Button } from "react-bootstrap";
import { GeoAlt } from "react-bootstrap-icons";
import Description from "../components/Description";
import FirstCardContainer from "../components/FirstCardsContainer";
import PayPalButtonComponent from "../components/Payment_Btn/PaymentButton";
const HomeEvent = () => {
  return (
    <>
      <div
        className="row w-100 p-5 gx-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("img/event.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
          borderRadius: "20px",
        }}
      >
        {/* (text) */}
        <div className="col-sm-12 col-md-7" style={{ color: "white" }}>
          <h2 className="fw-bolder" style={{ color: "white" }}>
            Dream world wide <br />
            in Jakarta
          </h2>
          <h3 style={{ color: "white" }}>IIIT Sonepat</h3>
          <h5 style={{ color: "white" }}>
            DesignHub organized a 3D Modeling Workshop using Blender on 16th
            February at 5 PM. The workshop taught participants the magic of
            creating stunning 3D models and animations using Blender. It was
            suitable for both beginners and experienced users. The event was
            followed by a blender-render competition, which added to the
            excitement.
          </h5>
          <div>
            <GeoAlt size={20} color="white" />
          </div>
          <div>
            {" "}
            <h5 style={{ color: "white" }}>View map</h5>
          </div>
        </div>

        {/*  (card) */}
        <div className="col-sm-12 col-md-5 " style={{ borderRadius: "20px" }}>
          <Card className="w-75 p-3" style={{ margin: "0px auto" }}>
            <Card.Title style={{ color: "black" }}>Date & Time</Card.Title>
            <Card.Text style={{ color: "#687C94" }}>
              16th February at 5 PM
            </Card.Text>

            {/* <Button
              variant="primary"
              style={{ backgroundColor: "#7848F4" }}
              className="w-100 my-1"
            >
              Book Now
            </Button> */}
            <Button style={{ backgroundColor: "#7848F4" }} className="w-100 ">
              <PayPalButtonComponent />
            </Button>
          </Card>
        </div>
      </div>
      <Description />
      <FirstCardContainer />
    </>
  );
};

export default HomeEvent;
