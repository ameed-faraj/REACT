const Controls = ({ isRunning, setIsRunning, setTimeLeft, sessionType, workDuration, shortBreak, longBreak }) => {
    const handleReset = () => {
      setIsRunning(false);
      if (sessionType === "Work") setTimeLeft(workDuration);
      else if (sessionType === "Short Break") setTimeLeft(shortBreak);
      else setTimeLeft(longBreak);
    };
  
    return (
      <div className="controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  };
  
  export default Controls;