import axios from "axios";
import { parse,format } from 'date-fns';
import { createContext, useCallback, useMemo, useState } from "react";
export const eventsContext = createContext();

const ContextProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [dummyevents, setDummyevents] = useState(null);
    const getEvents = async () => {
        await axios.get("http://localhost:3000/upcomping_events")
            .then((res) => {
                setEvents(res.data);
            })
            .then((err) => { console.log(err) });
    }

    const getFilteredEvents = useCallback((obj) => {
        setDummyevents([...events]);
        console.log(obj.type,obj.venue)
        setDummyevents((oldState => {
            oldState = oldState.filter(el => el.type.toLowerCase().includes(obj.type.toLowerCase()) && el.venue.toLowerCase().includes(obj.venue.toLowerCase()));
            return oldState;
        }));
        if (obj.date) {
            console.log(obj.date)
            setDummyevents((oldState => {
                oldState = oldState.filter(el => obj.date === el.fullDate);
                return oldState;
            }))
        }
    },[dummyevents])

    const updateEventWithFormatedDate = (id, obj) => {
        let temp = formatDate(obj.start_date, obj.start_time);
        axios.put(`http://localhost:3000/upcomping_events/${id}`, { ...obj, fullDate: temp });
    }
    const formatDate = (date, time) => {
        if (date && time) {
            // Parse the start date
            const [month, day, year] = date.split('/');
            const startDate = new Date(year, month - 1, day);

            // Parse the start time
            const [hoursStr, minutesStr] = time.split(':');
            const hours = parseInt(hoursStr, 10);
            const minutes = parseInt(minutesStr, 10);

            startDate.setHours(hours);
            startDate.setMinutes(minutes);

            const formattedDateTime = parse(startDate, "yyyy-MM-dd HH:mm:ss", new Date());

    // Format the parsed date into the desired format
    const formattedDate = format(formattedDateTime,  "EEEE, MMMM d, yyyy, h:mm a");
    
    return formattedDate;
        }
    };

    const contextValues = useMemo(() => ({ updateEventWithFormatedDate, events, setEvents, getEvents, getFilteredEvents, dummyevents, setDummyevents })
        , [updateEventWithFormatedDate, events, setEvents, getEvents, getFilteredEvents, dummyevents, setDummyevents]);
    return (
        <eventsContext.Provider value={contextValues}>
            {children}
        </eventsContext.Provider>
    );
}

export default EventsContextProvider;