import { Col, Container, Row } from "react-bootstrap";
import avatar from "../images/avatar.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SocialLogos from "./SocialLogos";
import pic1 from "../images/1.svg";
import pic2 from "../images/2.svg";
import pic3 from "../images/3.svg";
import pic4 from "../images/4.svg";
import pic5 from "../images/5.svg";
import pic6 from "../images/6.svg";
import pic7 from "../images/7.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CreateEvent() {
  const { t } = useTranslation();

  const socials = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "darkblue",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Container>
          <Row
            className=""
            style={{
              height: "13rem",
              position: "relative",
              margin: "0px auto",
            }}
          >
            <Col className="d-none d-md-flex" md={6}>
              {" "}
              <Card.Img
                src={avatar}
                style={{
                  width: "50%",
                  height: "15rem",
                  position: "absolute",
                  bottom: "0px",
                }}
              />{" "}
            </Col>
            <Col xs={12} md={6} className="my-2 text-light text-start">
              <Card.Body style={{ width: "100%" }}>
                <Card.Title className="fs-3 fw-bolder my-2">
                  {t("createEvent.makeYourOwnEvent")}{" "}
                  {/* Translate using t function */}
                </Card.Title>
                <Card.Text style={{ width: "100%" }}>
                  <p>
                    {t("createEvent.loremIpsum")}{" "}
                    {/* Translate using t function */}
                  </p>
                  <Link to="/create-event">
                    <Button
                      style={{
                        backgroundColor: "#6e20b6",
                        border: "none",
                        width: "100%",
                      }}
                      className="text-center fw-bolder"
                    >
                      {t("createEvent.createEvents")}{" "}
                      {/* Translate using t function */}
                    </Button>
                  </Link>
                </Card.Text>
              </Card.Body>{" "}
            </Col>
          </Row>
        </Container>
      </Container>

      <div className="" style={{ margin: "0px auto", width: "50%" }}>
        <h3 className="text-center fw-bolder">
          {t("createEvent.joinThese")}{" "}
          <span style={{ color: "#6e20b6" }}>{t("createEvent.brands")}</span>{" "}
        </h3>
        <h6 className="fw-bold text-center m-3">
          {t("createEvent.industryBrands")}
        </h6>
      </div>
      <Container fluid>
        <Row className="text-center">
          {socials.map((el) => {
            return <SocialLogos logo={el} key={el} />;
          })}
        </Row>
      </Container>
    </>
  );
}

export default CreateEvent;
