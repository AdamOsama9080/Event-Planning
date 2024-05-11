import { Button, Container, Row } from "react-bootstrap";
import FirstCard from "./FirstCard";
import { useContext, useEffect, useState } from "react";
import { eventsContext } from "../contexts/EventContext";
import NoResultFound from "./NoResultFound";
import Filtered from "./Filtered";
import { useTranslation } from "react-i18next";

function FirstCardsContainer() {
  const [chunkSize, setChunkSize] = useState(6);
  const {
    getEvents,
    dummyevents,
    events,
    updateEventWithFormatedDate,
  } = useContext(eventsContext);
  const { t } = useTranslation();

  useEffect(() => {
    events.map((el) => {
      updateEventWithFormatedDate(el.id, el);
    });
    getEvents();
  }, []);

  const loadMore = () => {
    setChunkSize((oldState) => oldState + 3);
  };

  return (
    <div className="bg-light p-3">
      <Filtered />
      <Container>
        <Row className="g-3" style={{ justifyContent: "center" }}>
          {dummyevents ? (
            dummyevents.length > 0 ? (
              dummyevents
                .slice(0, chunkSize)
                .map((el) => <FirstCard key={el.id} event={el} />)
            ) : (
              <NoResultFound />
            )
          ) : (
            events
              .slice(0, chunkSize)
              .map((el) => <FirstCard key={el.id} event={el} />)
          )}
        </Row>
        {chunkSize < (dummyevents ? dummyevents.length : events.length) && (
          <Button className="my-3 mx-auto d-block" onClick={loadMore}>
            {t("loadMore")}
          </Button>
        )}
      </Container>
    </div>
  );
}

export default FirstCardsContainer;
