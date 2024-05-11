import { Badge, Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function SecondCard({ college }) {
  return (
    <Link to="/home-college" style={{ textDecoration: "none" }}>
      <Card className="w-100" style={{ margin: "0px auto" }}>
        <div style={{ position: "relative" }}>
          <Card.Img
            variant="top"
            className="w-100"
            style={{ borderRadius: "8px" }}
            src={college.img}
          />
          <Badge
            pill
            bg="light"
            className="px-3 text-dark"
            style={{
              position: "absolute",
              bottom: "15px",
              left: "25px",
              fontSize: "12px",
            }}
          >
            <span className="fs-5 text-warning">
              <FaStar />
            </span>{" "}
            <span className="fw-bolder">{college.rate}</span>
          </Badge>
          <Badge
            pill
            bg="dark"
            className="py-3 px-4 fw-bolder"
            style={{
              position: "absolute",
              bottom: "10px",
              right: "25px",
              fontSize: "11px",
            }}
          >
            EXCLUSIVE
          </Badge>
        </div>

        <Card.Body className="text-start ps-2">
          <Card.Title className="fw-bolder ">
            {college.universityName}
          </Card.Title>
          <Card.Text className="pt-2">
            <span className="">{college.universityAddress}</span>{" "}
            <Button
              variant="link"
              className="fs-2"
              style={{ position: "absolute", right: "20px", bottom: "5px" }}
            >
              <IoReorderThreeOutline />
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default SecondCard;
