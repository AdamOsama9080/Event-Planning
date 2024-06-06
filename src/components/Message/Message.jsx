import React, { useMemo } from 'react';
import ChatBot from 'react-simple-chatbot';
import chatbotSteps from "../../JSON/message.json";
import './message.css';

const Message = () => {
  const steps = useMemo(() => [
    {
      "id": "1",
      "message": "Hello! What's your name?",
      "trigger": "2"
    },
    {
      "id": "2",
      "user": true,
      "trigger": "3"
    },
    {
      "id": "3",
      "message": "Hello {previousValue}! How can I assist you today?",
      "trigger": "4"
    },
    {
      "id": "4",
      "user": true,
      "trigger": "5"
    },
    {
      "id": "5",
      "options": [
        { "value": "1", "label": "I want to create an event", "trigger": "6" },
        { "value": "2", "label": "I want to know about sports college events", "trigger": "7" },
        { "value": "3", "label": "I want to know about upcoming events", "trigger": "8" },
        { "value": "4", "label": "I want to know about colleges", "trigger": "9" },
        { "value": "5", "label": "I want to know about education", "trigger": "10" }
      ]
    },
    {
      "id": "6",
      "message": "Great! Let's start creating the event. Please fill out the form at this link: [http://localhost:3000/create_event].",
      "end": true
    },
    {
      "id": "7",
      "message": "To view all sports events click here: [https://json-server-event-planning-tool.onrender.com/sports].",
      "end": true
    },
    {
      "id": "8",
      "message": "To view all upcoming events click here: [https://json-server-event-planning-tool.onrender.com/upcoming_events].",
      "end": true
    },
    {
      "id": "9",
      "message": "Here is the link to know about colleges: Colleges URL: [https://json-server-event-planning-tool.onrender.com/colleges].",
      "end": true
    },
    {
      "id": "10",
      "message": "Here is the link to know about education: Education URL: [https://json-server-event-planning-tool.onrender.com/education].",
      "end": true
    }
  ], []);

  console.log('Message component rendered');

  return (
    <div className="col-md-9 d-flex align-items-end">
      <div className="row w-100">
        <div className='d-flex justify-content-center align-items-center'>
          <div className='w-100'>
            <ChatBot steps={steps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
