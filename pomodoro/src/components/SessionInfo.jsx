const SessionInfo = ({ type, count }) => (
    <div className="session-info">
      <p>Current Session: <span>{type}</span></p>
      <p>Completed Work Sessions: <span> {count}</span></p>
    </div>
  );
  
  export default SessionInfo;