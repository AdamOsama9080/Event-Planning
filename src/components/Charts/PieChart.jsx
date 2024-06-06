import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios'; 

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function PieChart() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sportsResponse, upcomingEventsResponse, collegesResponse, educationResponse] = await Promise.all([
          axios.get('https://json-server-event-planning-tool.onrender.com/Sports'),
          axios.get('https://json-server-event-planning-tool.onrender.com/upcomping_events'),
          axios.get('https://json-server-event-planning-tool.onrender.com/colleges'),
          axios.get('https://json-server-event-planning-tool.onrender.com/education')
        ]);

        const sportsCount = sportsResponse.data.length;
        const upcomingEventsCount = upcomingEventsResponse.data.length;
        const collegesCount = collegesResponse.data.length;
        const educationCount = educationResponse.data.length;

        const totalEvents = sportsCount + upcomingEventsCount + collegesCount + educationCount;

        setEventData({
          sports: (sportsCount / totalEvents) * 100,
          upcomingEvents: (upcomingEventsCount / totalEvents) * 100,
          colleges: (collegesCount / totalEvents) * 100,
          education: (educationCount / totalEvents) * 100
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Event Type Distribution"
    },
    data: [{
      type: "pie",
      startAngle: 270,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: eventData.sports || 0, label: "Sports", color: "#6AD2FF" },
        { y: eventData.upcomingEvents || 0, label: "Upcoming Events", color: "#7848F4" },
        { y: eventData.colleges || 0, label: "Colleges", color: "#EFF4FB" },
        { y: eventData.education || 0, label: "Education", color: "#FF5733" }, 
      ]
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
