# week6-cse230
# Weather App

A responsive, multi-page weather application built with React. Users can select from multiple cities to view live temperature, humidity, and weather conditions, with the interface theme changing dynamically based on current weather. Temperature unit preference (Celsius/Fahrenheit) is saved using Local Storage.

## Features

- Multi-page navigation (Home, About, Contact) using React Router — no full page reloads
- Live weather data fetched from the OpenWeatherMap API using Axios
- Dynamic background theme based on current weather condition (clear, rain, snow, clouds, thunderstorm, mist)
- Celsius/Fahrenheit toggle that persists across browser sessions via Local Storage
- Accessible contact form with properly paired labels and inputs
- Fully responsive layout for mobile and desktop

## Tech Stack

- React
- React Router (react-router-dom)
- Axios
- OpenWeatherMap API
- CSS3

## API Choice

This project uses the [OpenWeatherMap Current Weather Data API](https://openweathermap.org/current). It was chosen because it offers a free tier, requires no complex setup, and returns all the data points needed for this project (temperature, humidity, and weather condition) in a single request.

## Local Setup

1. Clone the repository:
```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
```

2. Install dependencies:
```bash
   npm install
```

3. Add your API key (see [Environment Variables](#environment-variables) below).

4. Run the development server:
```bash
   npm run dev
```

5. Open the app in your browser at the local URL shown in the terminal (usually `http://localhost:5173`).

## Environment Variables

This project requires a free API key from [OpenWeatherMap](https://openweathermap.org/api).

1. Sign up at https://openweathermap.org/api and generate an API key.
2. Create a `.env` file in the project root:
