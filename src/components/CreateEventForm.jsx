import React, { useState } from "react";
import eventImg from "../imgs/eventImg.svg";
// import eventImg from "../../imgs/eventImg.svg";
// import FormControlInput from "../components/FormControlInput";

import { v4 as uuid } from "uuid";
import colors from "../colors";
import axios from "axios";
import Swal from "sweetalert2";
// import colors from "../../colors";
import FormControlInput from "./FormControlInput/FormControlInput";

export default function CreateEventForm() {
  const [eventType, setEventType] = useState("");
  const [eventData, setEventData] = useState({
    id: "",
    title: "",
    venue: "",
    organizer: "",
    subtitle: "",
    start_time: "",
    end_time: "",
    start_date: "",
    end_date: "",
    img: "",
    type: "",
    description: ""
  });

  const handleChange = (e, field) => {
    console.log(e.target.value);
    setEventData(prevData => ({
      ...prevData,
      [field]: e.target.value
    }));
  };

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  const handleCreateEvent = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`https://json-server-event-planning-tool.onrender.com/${eventType}`, {
          ...eventData,
          id: uuid()
        }).then(() => {
          setEventData({
            id: "",
            title: "",
            venue: "",
            organizer: "",
            subtitle: "",
            start_time: "",
            end_time: "",
            start_date: "",
            end_date: "",
            img: "",
            type: "",
            description: ""
          });
          Swal.fire({
            title: "Event Created!",
            text: "Your event has been created successfully.",
            icon: "success"
          });
        }).catch(error => {
          console.error("Error creating event:", error);
          Swal.fire({
            title: "Error",
            text: "An error occurred while creating the event.",
            icon: "error"
          });
        });
      }
    });
  };
  
  
  return (
    <div className="mx-auto" style={{ width: "57vw" }}>
      <div className="my-5">
        <h1 className="text-center mb-4" style={{ marginTop: "7rem", fontWeight: "bold", fontSize: "36px" }}>
          Create Event
        </h1>
        <FormControlInput
          label="Event Title"
          placeholder="Enter event title"
          type="text"
          name="title"
          value={eventData.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <FormControlInput
          label="Event Venue"
          placeholder="Enter event venue"
          type="text"
          name="venue"
          value={eventData.venue}
          onChange={(e) => handleChange(e, "venue")}
        />
        <FormControlInput
          label="Organizer"
          placeholder="Enter organizer name"
          type="text"
          name="organizer"
          value={eventData.organizer}
          onChange={(e) => handleChange(e, "organizer")}
        />
        <FormControlInput
          label="Sub Title"
          placeholder="Enter sub title"
          type="text"
          name="subtitle"
          value={eventData.subtitle}
          onChange={(e) => handleChange(e, "subtitle")}
        />
        <div className="row">
          <div className="col-md-6">
            <FormControlInput
              label="Start Date"
              placeholder="Enter start date"
              type="date"
              name="start_date"
              value={eventData.start_date}
              onChange={(e) => handleChange(e, "start_date")}
            />
          </div>
          <div className="col-md-6">
            <FormControlInput
              label="End Date"
              placeholder="Enter end date"
              type="date"
              name="end_date"
              value={eventData.end_date}
              onChange={(e) => handleChange(e, "end_date")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormControlInput
              label="Start Time"
              placeholder="Enter start time"
              type="text"
              name="start_time"
              value={eventData.start_time}
              onChange={(e) => handleChange(e, "start_time")}
            />
          </div>
          <div className="col-md-6">
            <FormControlInput
              label="End Time"
              placeholder="Enter end time"
              type="text"
              name="end_time"
              value={eventData.end_time}
              onChange={(e) => handleChange(e, "end_time")}
            />
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center mb-4" style={{ fontWeight: "bold", fontSize: "36px" }}>
          Event Description
        </h1>
        <div className="mb-4">
          <label className="FormControlInputLabel mb-3" htmlFor="event-img">
            Event Image
          </label>
          <img className="w-100 mx-auto d-block" alt="Event" src={eventImg} />
        </div>
        <div className="col-md-12">
          <FormControlInput
            label="Image"
            placeholder="Enter image URL"
            type="text"
            value={eventData.image}
            onChange={(e) => handleChange(e, "img")}
          />
        </div>
        <div className="mb-4">
          <label className="FormControlInputLabel mb-3" htmlFor="event-type">
            Event Type
          </label>
          <select
            className="form-select"
            id="event-type"
            value={eventType}
            onChange={(e) => {
              handleEventTypeChange(e);
              handleChange(e, "type");
            }}          >
            <option value="">Select Event Type</option>
            <option value="Sports">Sports</option>
            <option value="colleges">colleges</option>
            <option value="education">education</option>
          </select>
        </div>
        <div>
          <label className="FormControlInputLabel mb-3" htmlFor="event-description">
            Event Description
          </label>
          <textarea
            style={{
              border: "none",
              borderRadius: "5px",
              outline: "none",
              minHeight: "173px",
              fontSize: "12px"
            }}
            placeholder="Type here..."
            className="w-100 p-2"
            id="event-description"
            value={eventData.description}
            onChange={(e) => handleChange(e, "description")}
          />
        </div>
      </div>
      <div className="my-5">
        <button
          className="btn btn-primary btn-block d-block mx-auto col-5 mt-5 w-100"
          style={{
            backgroundColor: colors.primaryColor,
            border: "none",
            height: "49px"
          }}
          onClick={handleCreateEvent}
        >
          Create Event
        </button>
      </div>
    </div>
  );
}
