const useDateFormat = () => {
    const formatDate = (dateString) => {
        if (dateString && (typeof dateString === 'string' || dateString instanceof String)) {
            const date = new Date(dateString);
            if (!isNaN(date.getTime())) { // Ensures the date is valid
                const options = { weekday: 'long', month: 'long', day: 'numeric' };
                const formattedDate = date.toLocaleDateString('en-US', options);
                const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
                return `${formattedDate}, ${formattedTime}`;
            } else {
                console.error('Invalid date string:', dateString);
                return "";
            }
        } else {
            console.error('dateString is not a valid string:', dateString);
            return "";
        }
    };

    return {
        formatDate
    };
};

export default useDateFormat;
