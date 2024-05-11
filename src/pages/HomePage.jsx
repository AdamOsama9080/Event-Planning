import React from "react";
import MyForm from "../components/MyForm";

const HomePage = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            backgroundImage: 'url("img/unsplash.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            padding: "10px",
            height: "500px",
            borderRadius: "20px",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "50px",
              color: "white",
              paddingTop: "2rem",
            }}
          >
            MADE FOR THOSE
            <br /> WHO DO
          </p>
        </div>
        <MyForm></MyForm>
      </div>
    </div>
  );
};

export default HomePage;
