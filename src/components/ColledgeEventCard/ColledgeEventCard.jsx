import React from "react";
import { Badge, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

const ColledgeEventCard = () => {
  const { t } = useTranslation();

  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: "22rem", margin: "0px auto" }}>
        <Card.Img
          variant="top"
          className="p-2"
          style={{ borderRadius: "15px" }}
          src="images/0d55464672c777fe2598b4a832227655.jpeg"
        />
        <Badge
          bg="light"
          text="primary"
          className="p-2"
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            fontSize: "12px",
          }}
        >
          {t("colledgeEventCard.free")}
        </Badge>
        <Card.Body className="text-start ps-2">
          <Card.Title>{t("colledgeEventCard.title")}</Card.Title>
          <Card.Text className="pt-2">
            <p className="text-primary">{t("colledgeEventCard.date")}</p>
            <p className="">{t("colledgeEventCard.location")}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ColledgeEventCard;
