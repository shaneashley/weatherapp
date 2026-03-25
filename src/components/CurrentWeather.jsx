const CurrentWeather = ({ currentWeather }) => {
    return (
        <div className="weather-content">
    {/* ... other weather details ... */}
    <div className="weather-icon">
      <img src={iconUrl} alt="Weather Icon" />
    </div>
    {/* ... other weather details ... */}
  </div>
    );
  };
  export default CurrentWeather;
