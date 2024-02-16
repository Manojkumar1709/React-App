import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div className="container">
      <div className="content">
        <h2>Hello, Welcome to React Application</h2>
        <p>This application is developed by using React</p>
        <p id="datetime">
          Current Date: {formattedDate} | Current Time: {formattedTime}
        </p>
      </div>
    </div>
  );
}

export default App;
