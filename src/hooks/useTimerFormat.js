import { format } from 'date-fns';

const useTimerFormat = () => {
    const formatDate = (date, time) => {
        if (date && time) {
            // console.log(date,time)
            // Parse the start date
            const [month, day, year] = date.split('/');
            const startDate = new Date(year, month - 1, day);

            // Parse the start time
            const [hoursStr, minutesStr] = time.split(':');
            const hours = parseInt(hoursStr, 10);
            const minutes = parseInt(minutesStr, 10);

            startDate.setHours(hours);
            startDate.setMinutes(minutes);

            // Format the combined start date and time
            const formattedDateTime = format(startDate, "EEEE, MMMM d, h:mm a");
            console.log(formattedDateTime)
            return formattedDateTime;

            // if (!isNaN(hours) && !isNaN(minutes) && hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
            //     startDate.setHours(hours);
            //     startDate.setMinutes(minutes);

            //     // Format the combined start date and time
            //     const formattedDateTime = format(startDate, "EEEE, MMMM d, h:mm a");
            //     return formattedDateTime;
            // }
        } // Return empty string if date or time is missing or invalid
    };

    return { formatDate };
};

export default useTimerFormat;
