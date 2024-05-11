import { useState } from 'react';

const useDateFormat = () => {
    const formatDate = (dateString) => {
        if(dateString){
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString('en-US', options);
            const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            return formattedDate + ', ' + formattedTime;
        }else{
            return "";
        }

    };

    return {
        formatDate
    };
};

export default useDateFormat;
