
import React, { useState, useEffect ,useCallback } from 'react';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import Settings from './components/Settings';
import SessionInfo from './components/SessionInfo';
import './App.css';

const App = () => {
  const [workDuration, setWorkDuration] = useState(25 * 60);
  const [shortBreak, setShortBreak] = useState(5 * 60);
  const [longBreak, setLongBreak] = useState(15 * 60);

  const [timeLeft, setTimeLeft] = useState(workDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState("Work");
  const [completedSessions, setCompletedSessions] = useState(0);

  
  const handleSessionEnd = useCallback(() => {
    const audio = new Audio('/alarm.mp3');
    audio.play();

    if (sessionType === "Work") {
      const newCount = completedSessions + 1;
      setCompletedSessions(newCount);
      if (newCount % 4 === 0) {
        setSessionType("Long Break");
        setTimeLeft(longBreak);
      } else {
        setSessionType("Short Break");
        setTimeLeft(shortBreak);
      }
    } else {
      setSessionType("Work");
      setTimeLeft(workDuration);
    }
  }, [sessionType, completedSessions, workDuration, shortBreak, longBreak]);

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === 1) handleSessionEnd();
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  },[isRunning, handleSessionEnd]);

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <SessionInfo type={sessionType} count={completedSessions} />
      <TimerDisplay timeLeft={timeLeft} />
      <Controls 
        isRunning={isRunning} 
        setIsRunning={setIsRunning}
        setTimeLeft={setTimeLeft}
        sessionType={sessionType}
        workDuration={workDuration}
        shortBreak={shortBreak}
        longBreak={longBreak}
      />
      <Settings 
        setWorkDuration={setWorkDuration}
        setShortBreak={setShortBreak}
        setLongBreak={setLongBreak}
      />
    </div>
  );
};

export default App;