import React from "react";
import GeoLocation from "./GeoLocation/GeoLocation";
const Description = () => {
  return (
    <>
      <div className="row m-5 px-5">
        <div className="col-lg-6 col-sm-12">
          <h2>Description</h2>
          <p className="text-muted" style={{ textAlign: "justify" }}>
            DesignHub organized a 3D Modeling Workshop using Blender on 16th
            February at 5 PM. The workshop taught participants the magic of
            creating stunning 3D models and animations using Blender. It was
            suitable for both beginners and experienced users. The event was
            followed by a blender-render competition, which added to the
            excitement.
          </p>
          <p className="text-muted" style={{ textAlign: "justify" }}>
            DesignHub organized a 3D Modeling Workshop using Blender on 16th
            February at 5 PM. The workshop taught participants the magic of
            creating stunning 3D models and animations using Blender. It was
            suitable for both beginners and experienced users. The event was
            followed by a blender-render competition, which added to the
            excitement.
          </p>

          <h3>Hours</h3>
          <p>
            Weekdays hour:{" "}
            <span style={{ color: "blue", fontWeight: "700" }}>7PM - 10PM</span>
          </p>
          <p>
            Sunday hour:{" "}
            <span style={{ color: "blue", fontWeight: "700" }}>7PM - 10PM</span>
          </p>

          <h3>Organizer Contact</h3>
          <p className="text-muted">
            Please go to{" "}
            <span style={{ color: "blue", fontWeight: "500" }}>
              www.sneakypeeks.com
            </span>{" "}
            and refer the FAQ section for more detail
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h2>Event location</h2>
          {/* <iframe
            className="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55256.4654727249!2d31.190842369531246!3d30.05036500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c381a29537%3A0xf1d5b3a64a0e4de1!2sRamses%20Hilton!5e0!3m2!1sen!2seg!4v1708623684006!5m2!1sen!2seg"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <GeoLocation latitude={30.0272} longitude={31.2085} />

          <h3 className="mt-4">Dream world wide in jakatra</h3>
          <p className="text-muted">
            Dummy location generation model by RSU ... Our approach generates
            more realistic dummy locations{" "}
          </p>
          <h3 className="my-4">Tags</h3>
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-secondary">Indonesia event</button>
            <button className="btn btn-secondary">Jaskaran event</button>
            <button className="btn btn-secondary">UI</button>
            <button className="btn btn-secondary">Indonesia event</button>
            <button className="btn btn-secondary">events</button>
            <button className="btn btn-secondary">UI</button>
            <button className="btn btn-secondary">Indonesia event</button>
            <button className="btn btn-secondary">events</button>
          </div>
          <h3 className="my-4">Share with friends</h3>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            <img src="images/Facebook.svg"></img>
            <img src="images/Twitter.svg"></img>
            <img src="images/LinkedIn.svg"></img>
            <img src="images/WhatsApp.svg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
