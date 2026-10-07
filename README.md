# 🌤️ Weatherly

A modern, responsive full-stack weather application that provides real-time weather information for searched cities and the user's current location.

Weatherly is built with **React + Vite** on the frontend and **Node.js + Express.js** on the backend, using the **Open-Meteo API** for weather and geocoding data.

## 🚀 Live Demo

- **Frontend:** https://weatherly-mu-ten.vercel.app
- **Backend API:** https://weatherly-api-8sc1.onrender.com
- **GitHub:** https://github.com/appalanaidu5544/weatherly

> The backend is hosted on Render's free instance, so the first request after inactivity may take some time while the service wakes up.

---

## ✨ Features

- 🌍 Search weather by city
- 📍 Current location weather
- 🌡️ Current temperature
- 🤒 Feels-like temperature
- 💧 Humidity
- 💨 Wind speed and direction
- ☁️ Cloud cover
- 🌧️ Precipitation
- 📊 Atmospheric pressure
- 🕐 Hourly forecast
- 📅 7-day forecast
- 🌅 Sunrise and sunset
- ☀️ UV index
- 🌦️ Weather condition descriptions
- 🖼️ Dynamic weather backgrounds
- 🌙 Dark mode
- 💾 Persistent theme preference
- 📱 Responsive design
- ⚠️ Loading and error states
- 🔄 Retry functionality
- 🔎 City search
- 🚀 Vercel + Render deployment

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Lucide React
- Responsive Web Design

### Backend

- Node.js
- Express.js
- REST API
- JavaScript
- Fetch API
- CORS

### APIs

- Open-Meteo Forecast API
- Open-Meteo Geocoding API
- BigDataCloud Reverse Geocoding API
- Browser Geolocation API

### Tools & Deployment

- Git
- GitHub
- VS Code
- Postman
- Vercel
- Render

---

## 📁 Project Structure

```text
weatherly/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── weather-backgrounds/
│   │   ├── components/
│   │   │   ├── CurrentWeather.jsx
│   │   │   ├── DailyForecast.jsx
│   │   │   ├── ErrorState.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HourlyForecast.jsx
│   │   │   ├── LoadingSkeleton.jsx
│   │   │   ├── LocationButton.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SunriseSunset.jsx
│   │   │   ├── WeatherIcon.jsx
│   │   │   └── WeatherMetrics.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── weatherApi.js
│   │   ├── utils/
│   │   │   ├── weatherCodes.js
│   │   │   └── weatherUtils.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── search.controller.js
│   │   │   └── weather.controller.js
│   │   ├── routes/
│   │   │   ├── search.routes.js
│   │   │   └── weather.routes.js
│   │   ├── services/
│   │   │   └── weather.service.js
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── .gitignore
└── README.md

⚙️ Getting Started
1. Clone the Repository
git clone https://github.com/appalanaidu5544/weatherly.git
cd weatherly

💻 Frontend Setup
Navigate to the client directory:
cd client

Install dependencies:
npm install

Create a .env file:
VITE_API_URL=http://localhost:5000/api

Start the development server:
npm run dev

The frontend will be available at:
http://localhost:5173

🖥️ Backend Setup
Open another terminal and navigate to the server:
cd weatherly/server

Install dependencies:
npm install

Start the backend:
npm start

For development with Nodemon:
npm run dev

The backend will run on:
http://localhost:5000

🔐 Environment Variables
Frontend
Create:
client/.env

Add:
VITE_API_URL=http://localhost:5000/api

For production:
VITE_API_URL=https://weatherly-api-8sc1.onrender.com/api

Environment files are excluded from Git using .gitignore.

🔌 API Endpoints
Health Check
GET /api/health

Get Weather
GET /api/weather?lat={latitude}&lon={longitude}

Example:
/api/weather?lat=17.38405&lon=78.45636

Search Cities
GET /api/search?city={city}

Example:
/api/search?city=Hyderabad

🌦️ Application Flow
                         Weatherly
                             │
                ┌────────────┴────────────┐
                │                         │
          Search City                Current Location
                │                         │
                ↓                         ↓
        React Frontend           Browser Geolocation
                │                         │
                └────────────┬────────────┘
                             ↓
                     Express Backend
                             │
                             ↓
                    Open-Meteo APIs
                             │
                             ↓
                      Weather Data
                             │
                             ↓
                       Weatherly UI

🌙 Dark Mode
Weatherly supports dark mode with the selected theme saved in browser localStorage.
Theme key:
weatherly-theme

The selected theme is restored when the user returns to the application.
📱 Responsive Design
Weatherly is designed for:
- 💻 Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile
The interface adapts the weather cards, forecasts, metrics, navigation, and search interface for different screen sizes.

🚀 Deployment
Frontend — Vercel
The React frontend is deployed from:
client/

Vercel configuration:
Framework: Vite
Root Directory: client
Build Command: npm run build
Output Directory: dist

Production environment variable:
VITE_API_URL=https://weatherly-api-8sc1.onrender.com/api

Backend — Render
The Express backend is deployed from:
server/

Render configuration:
Runtime: Node
Root Directory: server
Build Command: npm install
Start Command: npm start

🧪 Production Testing
The application was tested across the following areas:
- [x] Frontend production build
- [x] Vercel deployment
- [x] Render backend deployment
- [x] Backend health endpoint
- [x] Weather API integration
- [x] City search
- [x] Current location
- [x] Hourly forecast
- [x] 7-day forecast
- [x] Dynamic weather backgrounds
- [x] Dark mode
- [x] Responsive layout
- [x] Loading states
- [x] Error states
- [x] Retry functionality
⚠️ API Rate Limits
Weatherly uses public Open-Meteo services.
Public API request limits may temporarily affect weather requests. If the API returns:
HTTP 429

the upstream weather service has temporarily rate-limited requests.
A planned improvement is server-side caching to reduce unnecessary requests and improve production reliability.
🔮 Future Improvements
- [ ] Server-side weather caching
- [ ] Better HTTP 429 handling
- [ ] Recently searched cities
- [ ] Favorite locations
- [ ] Weather alerts
- [ ] Weather charts
- [ ] Automatic weather refresh
- [ ] API monitoring
- [ ] Redis caching
- [ ] Automated tests
- [ ] GitHub Actions CI/CD
👨‍💻 Author
Appalanaidu Routhu
Full Stack Developer
🔗 GitHub:
https://github.com/appalanaidu5544
🔗 LinkedIn:
https://www.linkedin.com/in/appalanaidu-routhu-400654257/
📄 License
This project is available for educational and portfolio purposes.

### GitHub

In your repository, click:

**Add file → Create new file**

Set the filename to:

```text
README.md
