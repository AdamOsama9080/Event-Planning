import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GeoLocation = ({ latitude, longitude }) => {
  const [position, setPosition] = useState([latitude, longitude]);
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setAddress(data.display_name);
      })
      .catch((error) => {
        console.error("Error fetching address:", error);
      });
  }, [latitude, longitude]);

  return (
    <div>
      {/* <p>Latitude: {latitude}</p> */}
      {/* <p>Longitude: {longitude}</p> */}
      {/* {address && <p>Address: {address}</p>} */}
      <div className="card shadow col-md-12">
        <div className="card-body">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Latitude: {latitude}
                <br />
                Longitude: {longitude}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default GeoLocation;
