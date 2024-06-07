import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function StackedChart() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    // Fetch data from the provided endpoints
    const fetchData = async () => {
      try {
        const sportsResponse = await fetch('https://json-server-event-planning-tool.onrender.com/Sports');
        const sportsData = await sportsResponse.json();

        const upcomingEventsResponse = await fetch('https://json-server-event-planning-tool.onrender.com/upcomping_events');
        const upcomingEventsData = await upcomingEventsResponse.json();

        const collegesResponse = await fetch('https://json-server-event-planning-tool.onrender.com/colleges');
        const collegesData = await collegesResponse.json();

        const educationResponse = await fetch('https://json-server-event-planning-tool.onrender.com/education');
        const educationData = await educationResponse.json();

        // Combine all data into a single array
        const allEventsData = [...sportsData, ...upcomingEventsData, ...collegesData, ...educationData];
        setEventsData(allEventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate statistics
  const calculateStatistics = () => {
    // Calculate number of events per category
    const eventsPerCategory = eventsData.reduce((acc, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;
      return acc;
    }, {});

    // Calculate average duration of events (for demonstration purposes, we'll use random durations)
    const averageDurationPerCategory = {
      Sports: Math.floor(Math.random() * 4) + 1, // Random duration between 1 and 5 hours
      'Upcoming Events': Math.floor(Math.random() * 4) + 1,
      Colleges: Math.floor(Math.random() * 4) + 1,
      Education: Math.floor(Math.random() * 4) + 1,
    };

    // Calculate count of each type within each category
    const typeCountsPerCategory = eventsData.reduce((acc, event) => {
      acc[event.category] = acc[event.category] || {};
      acc[event.category][event.type] = (acc[event.category][event.type] || 0) + 1;
      return acc;
    }, {});

    return { eventsPerCategory, averageDurationPerCategory, typeCountsPerCategory };
  };

  const { eventsPerCategory, averageDurationPerCategory, typeCountsPerCategory } = calculateStatistics();

  // Prepare data for rendering
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    backgroundColor: 'transparent',
    title: {
      text: 'Event Statistics',
      fontFamily: 'verdana',
    },
    axisY: {
      title: 'Count',
      includeZero: true,
    },
    toolTip: {
      shared: true,
      reversed: true,
    },
    legend: {
      verticalAlign: 'center',
      horizontalAlign: 'right',
      reversed: true,
    },
    data: [
      {
        type: 'stackedColumn',
        name: 'Events per Category',
        color: '#7848F4',
        showInLegend: true,
        dataPoints: Object.entries(eventsPerCategory).map(([category, count]) => ({
          label: category,
          y: count,
        })),
      },
      {
        type: 'stackedColumn',
        name: 'Type Counts per Category',
        color: '#6AD2FF',
        showInLegend: true,
        dataPoints: Object.entries(typeCountsPerCategory).map(([category, types]) => ({
          label: category,
          y: Object.values(types).reduce((sum, typeCount) => sum + typeCount, 0),
        })),
      },
      {
        type: 'stackedColumn',
        name: 'Average Duration per Category (hours)',
        color: '#EFF4FB',
        showInLegend: true,
        dataPoints: Object.entries(averageDurationPerCategory).map(([category, duration]) => ({
          label: category,
          y: duration,
        })),
      },
    ],
  };

  return (
    <div className="card shadow h-100">
      <div className="card-body h-25">
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
}
