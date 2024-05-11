import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { SearchContext } from "../contexts/SearchContext";
import { eventsContext } from "../contexts/EventContext";
import colors from "../colors.js";

import useDateFormat from "../hooks/useFormatDate";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Filtered() {
  const { getFiltered, filteredOptions, setFilteredOptions } = useContext(
    eventsContext
  );
  const { formatDate } = useDateFormat();
  const { t, i18n } = useTranslation();

  const options = {
    eventType: [
      { value: "type", label: "" },
      { value: "type", label: t("eventType.community") },
      { value: "type", label: t("eventType.music") },
      { value: "type", label: t("eventType.education") },
      { value: "type", label: t("eventType.sports") },
    ],
    locations: [
      { value: "venue", label: "" },
      { value: "venue", label: t("locations.downtownSquare") },
      { value: "venue", label: t("locations.galleryXYZ") },
      { value: "venue", label: t("locations.cityJazzClub") },
      { value: "venue", label: t("locations.riversidePark") },
    ],
  };

  const handleChange = async (selectedOption, { name }) => {
    await setFilteredOptions({
      ...filteredOptions,
      [name]: selectedOption.label,
    });
  };

  const handleDate = async (e) => {
    const formattedDate = formatDate(e.target.value);
    await setFilteredOptions({
      ...filteredOptions,
      [e.target.name]: formattedDate,
    });
  };
  const location = useLocation();
  if (location.pathname === "/home-event") {
    return (
      <h4
        style={{ marginLeft: "50px", fontWeight: "bold", marginBottom: "30px" }}
      >
        {t("events.youMayLike")}
      </h4>
    );
  } else if (location.pathname === "/home-college") {
    return (
      <h4
        style={{
          marginLeft: "50px",
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: "36px",
        }}
      >
        {t("events.collegeEvents")}
      </h4>
    );
  }
  return (
    <div>
      <Container dir={i18n.language === "ar" ? "rtl" : null}>
        <Row className="py-3">
          <Col xs={12} md={4}>
            <h2 className="fw-bolder text-start ">
              {t("events.upcoming")}{" "}
              <span style={{ color: colors.primaryColor }}>
                {t("events.events")}
              </span>
            </h2>
          </Col>
          <Col xs={12} md={8} className="ps-5">
            <Container fluid>
              <Row className="text-end justify-content-end g-1" style={{}}>
                <Col xs={12} md={3} className="">
                  <Select
                    name="type"
                    onChange={handleChange}
                    options={options.eventType}
                    placeholder={t("events.eventType")}
                  />
                </Col>
                <Col xs={12} md={3} className="">
                  <Select
                    name="venue"
                    onChange={handleChange}
                    options={options.locations}
                    placeholder={t("events.location")}
                  />
                </Col>
                <Col xs={12} md={3} className="">
                  <Form.Group controlId="when">
                    <Form.Control
                      type="datetime-local"
                      placeholder={t("events.dateTime")}
                      name="date"
                      onChange={handleDate}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Filtered;
