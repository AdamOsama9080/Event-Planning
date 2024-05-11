import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function MonthlyEventsChart() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sportsResponse = await fetch('http://localhost:2000/Sports');
        const sportsData = await sportsResponse.json();

        const upcomingEventsResponse = await fetch('http://localhost:2000/upcomping_events');
        const upcomingEventsData = await upcomingEventsResponse.json();

        const collegesResponse = await fetch('http://localhost:2000/colleges');
        const collegesData = await collegesResponse.json();

        const educationResponse = await fetch('http://localhost:2000/education');
        const educationData = await educationResponse.json();

        const allEventsData = [...sportsData, ...upcomingEventsData, ...collegesData, ...educationData];
        setEventsData(allEventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateMonthlyEvents = () => {
    const monthlyEvents = {};

    eventsData.forEach(event => {
      const startDate = new Date(event.start_date);
      const monthKey = `${startDate.getMonth() + 1}/${startDate.getFullYear()}`;

      if (!monthlyEvents[monthKey]) {
        monthlyEvents[monthKey] = 1;
      } else {
        monthlyEvents[monthKey]++;
      }
    });

    return monthlyEvents;
  };

  const monthlyEvents = calculateMonthlyEvents();
  const sortedMonths = Object.keys(monthlyEvents).sort((a, b) => new Date(a.split('/')[1], a.split('/')[0] - 1) - new Date(b.split('/')[1], b.split('/')[0] - 1));
  const dataPoints = sortedMonths.map(month => ({
    x: new Date(month.split('/')[1], month.split('/')[0] - 1), // Split and rearrange month and year parts
    y: monthlyEvents[month]
  }));

  

  const options = {
    animationEnabled: true,
    title: {
      text: "Monthly Events"
    },
    axisX: {
      title: "Month",
      valueFormatString: "MMM YYYY"
    },
    axisY: {
      title: "Number of Events"
    },
    data: [{
      type: "splineArea",
      color: "rgba(56, 24, 217, 0.5)",
      markerColor: "rgba(56, 24, 217, 1)",
      dataPoints: dataPoints
    }]
  };

  return (
    <div className='card shadow'>
      <div className='card-body'>
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
}
