import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Home.css";

const API_KEY = "0d0e65b3e17cb945bac02f0d37687c1c";

export default function Home() {

    const cities = [
        "Kathmandu",
        "London",
        "Delhi",
        "Tokyo",
        "Washington"
    ];

    // Selected city
    const [city, setCity] = useState("Kathmandu");

    // Weather Data
    const [weather, setWeather] = useState(null);

    // Temperature Unit
    const [unit, setUnit] = useState(() => {
        return localStorage.getItem("unit") || "metric";
    });

    // Save into local storage
    useEffect(() => {
        localStorage.setItem("unit", unit);
    }, [unit]);

    // Fetch Weather
    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
                );
                setWeather(response.data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchWeather();
    }, [city, unit]);

    // Dynamic class based on current weather condition (clear, rain, snow, etc.)
    const condition = weather?.weather[0]?.main.toLowerCase() || "default";

    return (
        <div className={`home ${condition}`}>

            <h1>Weather Dashboard</h1>

            <div className="controls">
                <label htmlFor="city">Select City</label>
                <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    {cities.map((c) => (
                        <option key={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div className="controls">
                <button
                    onClick={() =>
                        setUnit(unit === "metric" ? "imperial" : "metric")
                    }
                >
                    Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
                </button>
            </div>

            {weather && (
                <div className="weather-card">
                    <h2>{weather.name}</h2>
                    <h3>
                        {weather.main.temp}
                        {unit === "metric" ? "°C" : "°F"}
                    </h3>
                    <p>
                        <strong>Humidity:</strong>
                        {" "}
                        {weather.main.humidity}%
                    </p>
                    <p>
                        <strong>Condition:</strong>
                        {" "}
                        {weather.weather[0].main}
                    </p>
                </div>
            )}

        </div>
    );
}