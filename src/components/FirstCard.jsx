import { Badge, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function FirstCard({ event }) {
  const { t, i18n } = useTranslation();
  return (
    <Col xs={12} md={6} lg={4}>
      <Link to="/home-event" style={{ textDecoration: "none" }}>
        <Card className="w-100 h-100" style={{ margin: "0px auto" }}>
          <Card.Img
            variant="top"
            className="p-2"
            style={{ borderRadius: "15px" }}
            src={event.img}
            height={250}
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
            {i18n.language === "ar" ? "مجانًا" : event.price}
          </Badge>
          <Card.Body className="text-start ps-2">
            <Card.Title>
              {i18n.language === "ar"
                ? "بطولة كرة السلة الجامعية"
                : event.title}{" "}
              -{" "}
              {i18n.language === "ar"
                ? "مواجهة على ملعب الكلية"
                : event.subtitle}
            </Card.Title>
            <Card.Text className="pt-2">
              <p className="text-primary">
                {i18n.language === "ar"
                  ? "الأربعاء، 2 أكتوبر، الساعة 1:00 مساءً"
                  : event.fullDate}
              </p>
              <p className="">
                {i18n.language === "ar"
                  ? "جمعية الرياضة الجامعية - صالة الجامعة"
                  : event.organizer
                  ? `${event.organizer} - ${event.venue}`
                  : event.venue}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default FirstCard;
