import { Button, Container, Row, Carousel, Card, Col } from "react-bootstrap";
import SecondCard from "./SecondCard";
import colors from "../colors.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function SecondCardsContainer() {
  const { t, i18n } = useTranslation();
  const [Colleges, setColleges] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/colleges")
      .then((res) => {
        setColleges(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let numOfCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [chunkSize, setChunkSize] = useState(3); // Default chunk size

  useEffect(() => {
    const handleResize = () => {
      // Adjust chunk size based on the screen width
      if (window.innerWidth < 576) {
        setChunkSize(1); // For xs screen size
      } else if (window.innerWidth >= 576 && window.innerWidth <= 768) {
        setChunkSize(2); // For md screen size
      } else {
        setChunkSize(3); // For other screen sizes
      }
    };

    // Set initial chunk size on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Divide the numOfCards array into chunks based on the chunk size
  const chunks = [];
  for (let i = 0; i < Colleges.length; i += chunkSize) {
    chunks.push(Colleges.slice(i, i + chunkSize));
  }

  return (
    <div className="my-3 bg-light">
      <div className="ms-5 ps-3">
        <h2 className="fw-bolder text-start ms-5 py-3">
          {t("colleges.Trending")}{" "}
          <span style={{ color: colors.primaryColor }}>
            {t("colleges.Colleges")}
          </span>
        </h2>
      </div>
      <Container>
        <Carousel
          nextIcon={
            <Button
              variant="dark"
              className="fs-3 "
              style={{ position: "absolute", right: "-10px" }}
            >
              {">"}
            </Button>
          }
          prevIcon={
            <Button
              variant="dark"
              className="fs-3 "
              style={{ position: "absolute", left: "-10px" }}
            >
              {"<"}
            </Button>
          }
        >
          {chunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {chunk.map((el, idx) => (
                  <Col
                    key={idx}
                    xs={chunkSize === 1 ? 12 : 6}
                    md={chunkSize === 2 ? 6 : 4}
                    lg={4}
                  >
                    <SecondCard key={el} college={el} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default SecondCardsContainer;
