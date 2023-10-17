import { useState, useEffect } from "react";
import cardlist from "./components/cardList";
import westherList from "./components/weatherList";
import "./App.css";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [zipCode, setZipCode] = useState("75189"); 
  const [weatherInfo, setWeatherInfo] = useState({
    cityName: "",
    state_code: "",
    temp: "",
    ob_time: "",
    weatherDes: "",
  });

  const [forecastList, setForecastList] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${zipCode}&key=${API_KEY}`
      );
      const json = await response.json();
      setForecastList(json);
    };
    fetchForecastData().catch(console.error);
  }, [zipCode]);

  useEffect(() => {
    const fetchCurrentWeatherData = async () => {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?postal_code=${zipCode}&key=${API_KEY}`
      );

      const json = await response.json();
      console.log(json);
      setWeatherInfo({
        cityName: json.data[0]["city_name"],
        state_code: json.data[0]["state_code"],
        temp: json.data[0]["temp"],
        ob_time: json.data[0]["ob_time"],
        weatherDes: json.data[0]["weather"].description,
      });
    };
    fetchCurrentWeatherData().catch(console.error);
  }, [zipCode]);

  const changedZipCodeHandler = (event) => {
    if (event.target.value == "") {
      setZipCode("10036");
    }
    setZipCode(event.target.value);
  };

  return (
    <div className="whole-page">
      <div className="main-page">
        <h2> Welcome to the Weather Dashboard!</h2>
        <div className="search_bar">
        <h4>
           Enter zipcode for your city!
        </h4>
  
        <input
          type="text"
          placeholder="zipcode ..."
          onChange={changedZipCodeHandler}
        />
      </div>
        <cardList
          cityName={weatherInfo.cityName}
          state_code={weatherInfo.state_code}
          temp={weatherInfo.temp}
          weatherDes={weatherInfo.weatherDes}
          ob_time={weatherInfo.ob_time}
        />
        <weatherList list={forecastList} />
      </div>
    </div>
  );
}

export default App;
