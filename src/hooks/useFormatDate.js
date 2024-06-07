import { useState } from 'react';

const useDateFormat = () => {
    // const formatDate = (dateString, timeString) => {
    //     if (!dateString) {
    //         return "";
    //     }

    //     // Split the date string assuming it's in MM/DD/YYYY format
    //     const [month, day, year] = dateString.split('/');
    //     const formattedDateString = `${year}-${month}-${day}T${timeString}:00`;
        
    //     const date = new Date(formattedDateString);
    //     if (isNaN(date.getTime())) {
    //         console.error("Invalid date string:", formattedDateString);
    //         return "";
    //     }

    //     const options = { weekday: 'long', month: 'long', day: 'numeric' };
    //     const formattedDate = date.toLocaleDateString('en-US', options);
    //     const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    //     return formattedDate + ', ' + formattedTime;
    // };
    const formatDate = (dateString, timeString) => {
        if (!dateString) {
            return "";
        }
    
        // Split the date string assuming it's in MM/DD/YYYY format
        const [month, day, year] = dateString.split('/');
        const formattedDateString = `${year}-${month}-${day}T${timeString}:00`;
        
        const date = new Date(formattedDateString);
        if (isNaN(date.getTime())) {
            console.error("Invalid date string:", formattedDateString);
            return "";
        }
    
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        return formattedDate + ', ' + formattedTime;
    };
    return {
        formatDate
    };
};

export default useDateFormat;
