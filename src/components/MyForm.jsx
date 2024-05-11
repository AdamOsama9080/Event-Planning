import Select from "react-select";
import React, { useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { SearchContext } from "../contexts/SearchContext";
import { eventsContext } from "../contexts/EventContext";
import useDateFormat from "../hooks/useFormatDate";
import { useTranslation } from "react-i18next";

const MyForm = () => {
  const { getFilteredEvents } = useContext(eventsContext);
  const { eventToSearch, setEventToSearch } = useContext(SearchContext);
  const { formatDate } = useDateFormat();
  const { t } = useTranslation();

  const options = {
    eventType: [
      { value: "type", label: "" },
      { value: "type", label: t("form.community") },
      { value: "type", label: t("form.music") },
      { value: "type", label: t("form.education") },
      { value: "type", label: t("form.sports") },
      { value: "type", label: t("form.food") },
    ],
    locations: [
      { value: "venue", label: "" },
      { value: "venue", label: t("form.downtownSquare") },
      { value: "venue", label: t("form.galleryXYZ") },
      { value: "venue", label: t("form.cityJazzClub") },
      { value: "venue", label: t("form.riversidePark") },
    ],
  };

  const handleChange = (selectedOption, { name }) => {
    setEventToSearch({ ...eventToSearch, [name]: selectedOption.label });
  };

  const handleDate = (e) => {
    const formattedDate = formatDate(e.target.value);
    setEventToSearch({ ...eventToSearch, [e.target.name]: formattedDate });
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: "-50px",
        right: "50px",
        left: "50px",
        backgroundColor: "#10107B",
        borderRadius: "20px",
        marginBottom: "10px",
      }}
    >
      <Container>
        <Row className="text-center py-3">
          <Col xs={12} md={3}>
            <Form.Label style={{ color: "#FFFFFF" }}>
              {t("form.lookingFor")}
            </Form.Label>
            <Select
              name="type"
              onChange={handleChange}
              options={options.eventType}
              placeholder={t("form.chooseEventType")}
            />
          </Col>
          <Col xs={12} md={3}>
            <Form.Label style={{ color: "#FFFFFF" }}>
              {t("form.location")}
            </Form.Label>
            <Select
              name="venue"
              onChange={handleChange}
              options={options.locations}
              placeholder={t("form.chooseLocation")}
            />
          </Col>
          <Col md={3}>
            <Form.Group controlId="when">
              <Form.Label style={{ color: "#FFFFFF" }}>
                {t("form.when")}
              </Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder={t("form.chooseDateTime")}
                name="date"
                onChange={handleDate}
              />
            </Form.Group>
          </Col>
          <Col md={3} className="mt-4 fs-s p-2 text-center">
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                getFilteredEvents(eventToSearch);
              }}
              style={{ backgroundColor: "#7848F4" }}
            >
              <Search />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyForm;
