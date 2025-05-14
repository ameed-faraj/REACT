const Settings = ({ setWorkDuration, setShortBreak, setLongBreak }) => {
    return (
      <div className="settings">
        <h3>Settings</h3>
        <label>
          Work (minutes):
          <input type="number" onChange={(e) => setWorkDuration(e.target.value * 60)} defaultValue={25} />
        </label>
        <label>
          Short Break:
          <input type="number" onChange={(e) => setShortBreak(e.target.value * 60)} defaultValue={5} />
        </label>
        <label>
          Long Break:
          <input type="number" onChange={(e) => setLongBreak(e.target.value * 60)} defaultValue={15} />
        </label>
      </div>
    );
  };
  
  export default Settings;