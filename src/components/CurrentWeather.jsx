const CurrentWeather = ({ currentWeather }) => {
    return (
      <div className="current-weather">
          <img src="/icons/${currentWeather.weatherIcon}.svg`} className="weather-icon" alt="Icon" />

        <h2 className="temperature">
          {currentWeather.temperature} <span>°C</span>
        </h2>
        <p className="description">{currentWeather.description}</p>
      </div> 
    );
  };
  export default CurrentWeather;
