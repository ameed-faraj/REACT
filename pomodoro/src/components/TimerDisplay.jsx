const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };
  
  const TimerDisplay = ({ timeLeft }) => (
    <div className="timer">
      <h2>{formatTime(timeLeft)}</h2>
    </div>
  );
  
  export default TimerDisplay;