import React, { useContext, useEffect, useState } from 'react';
import FirstCardsContainer from './FirstCardsContainer';
import CreateEvent from './CreateEvent';
import SecondCardsContainer from './SecondCardsContainer';
import HomePageFirstSection from './HomePageFirstSection';
import { eventsContext } from '../contexts/EventContext';

const HomePage = () => {
    const { getEvents } = useContext(eventsContext);
    useEffect(()=>{
        getEvents();
    },[])
    return (
        <>
            <HomePageFirstSection/>
            <FirstCardsContainer />
            <CreateEvent/>
            <SecondCardsContainer/>
        </>


    );
}
export default HomePage;