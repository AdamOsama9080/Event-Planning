import React from "react";
import { Container, Row } from "react-bootstrap";

const HomeCollege = () => {
  return (
    <div>
      {/* <div style={{width:100}}>
            <img src='img/college.jpg' alt='img'></img>
            </div> */}
      <div style={{ padding: "20px" }}>
        <img
          src="img/college2.jpg"
          alt="img"
          style={{
            width: "100%",
            padding: "10px",
            height: "500px",
            borderRadius: "20px",
          }}
        />
      </div>
      <Container>
        <Row>
          <h1 style={{ padding: "10px" }}>IIT Roorke</h1>
          <div>
            <p style={{ color: "#687C94" }} className="fs-5">
              DesignHub organized a 3D Modeling Workshop using Blender on 16th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and<br></br> animations using Blender.
              It was suitable for both beginners and experienced users. The
              event was followed by a blender-render competition, which added to
              the excitement.<br></br>
              <br></br>
              DesignHub organized a 3D Modeling Workshop using Blender on 17th
              February at 5 PM. The workshop taught participants the magic of
              creating stunning 3D models and <br></br>animations using Blender.
              It was suitable for both beginners and experienced users. The
              event was followed by a blender-render competition, which added to
              the excitement.<br></br>
              <br></br>
              DesignHub organized a 3D Modeling Workshop using Blender on 20th
              February at 7 PM. The workshop taught participants the magic of
              creating stunning 3D models and<br></br> animations using Blender.
              It was suitable for both beginners and experienced users. The
              event was followed by a blender-render competition, which added to
              the excitement.<br></br>
              <br></br>
              DesignHub organized a 3D Modeling Workshop using Blender on 21th
              February at 7 PM. The workshop taught participants the magic of
              creating stunning 3D models and<br></br> animations using Blender.
              It was suitable for both beginners and experienced users. The
              event was followed by a blender-render competition, which added to
              the excitement.<br></br>
              <br></br>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default HomeCollege;
