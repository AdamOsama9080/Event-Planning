import axios from "axios";
import { parse, format } from "date-fns";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
export const eventsContext = createContext();

const EventsContextProvider = ({ children }) => {
  const [filteredOptions, setFilteredOptions] = useState({
    type: "",
    venue: "",
    date: "",
  });
  const [events, setEvents] = useState([]);
  const [dummyevents, setDummyevents] = useState(null);
  useEffect(() => {
    getFiltered();
  }, [filteredOptions, events]);

  const getEvents = async () => {
    await axios
      .get("https://json-server-event-planning-tool.onrender.com/upcomping_events")
      .then((res) => {
        setEvents(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };
  const getFilteredEvents = useCallback(
    async (obj) => {
      await setDummyevents([...events]);
      console.log(obj.type, obj.venue);
      await setDummyevents((oldState) => {
        oldState = oldState.filter(
          (el) =>
            el.type.toLowerCase().includes(obj.type.toLowerCase()) &&
            el.venue.toLowerCase().includes(obj.venue.toLowerCase())
        );
        return oldState;
      });
      if (obj.date) {
        console.log(obj.date);
        await setDummyevents((oldState) => {
          oldState = oldState.filter((el) => obj.date === el.fullDate);
          return oldState;
        });
      }
    },
    [dummyevents]
  );

  const getFiltered = useCallback(() => {
    try {
      console.log(filteredOptions);
      setDummyevents([...events]);
      setDummyevents((oldState) => {
        oldState = oldState.filter(
          (el) =>
            el.type
              .toLowerCase()
              .includes(filteredOptions.type.toLowerCase()) &&
            el.venue.toLowerCase().includes(filteredOptions.venue.toLowerCase())
        );
        return oldState;
      });
      if (filteredOptions.date) {
        setDummyevents((oldState) => {
          oldState = oldState.filter(
            (el) => filteredOptions.date === el.fullDate
          );
          return oldState;
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [events, filteredOptions]);

  const updateEventWithFormatedDate = (id, obj) => {
    let temp = formatDate(obj.start_date, obj.start_time);
    axios.put(`https://json-server-event-planning-tool.onrender.com/upcomping_events/${id}`, {
      ...obj,
      fullDate: temp,
    });
  };
  const formatDate = (date, time) => {
    if (date && time) {
      const [month, day, year] = date.split("/");
      const startDate = new Date(year, month - 1, day);

      const [hoursStr, minutesStr] = time.split(":");
      const hours = parseInt(hoursStr, 10);
      const minutes = parseInt(minutesStr, 10);

      startDate.setHours(hours);
      startDate.setMinutes(minutes);

      const formattedDateTime = parse(
        startDate,
        "yyyy-MM-dd HH:mm:ss",
        new Date()
      );

      const formattedDate = format(
        formattedDateTime,
        "EEEE, MMMM d, yyyy, h:mm a"
      );

      return formattedDate;
    }
  };

  const contextValues = useMemo(
    () => ({
      getFiltered,
      filteredOptions,
      setFilteredOptions,
      updateEventWithFormatedDate,
      events,
      setEvents,
      getEvents,
      getFilteredEvents,
      dummyevents,
      setDummyevents,
    }),
    [
      getFiltered,
      filteredOptions,
      setFilteredOptions,
      updateEventWithFormatedDate,
      events,
      setEvents,
      getEvents,
      getFilteredEvents,
      dummyevents,
      setDummyevents,
    ]
  );
  return (
    <eventsContext.Provider value={contextValues}>
      {children}
    </eventsContext.Provider>
  );
};

export default EventsContextProvider;
