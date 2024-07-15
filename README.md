Weather API Wrapper Service

Project Overview

The Weather API Wrapper Service is a Node.js and Express application that integrates with a third-party weather API to provide weather information for various cities. The project also includes caching using Redis to optimize API calls and improve response times. The application adheres to REST principles and includes custom middleware, error handling, and a simple front-end interface.

Table of Contents
Project Overview
Table of Contents
Features
Technologies Used
Installation
Usage
API Endpoints
File Structure
Custom Middleware
Error Handling
Caching Strategy
Contributing
License
Features
Third-party API Integration: Integrates with the WeatherAPI to fetch current weather data for a given city.
Caching: Uses Redis for caching API responses to reduce redundant API calls and improve response times.
RESTful API: Provides a RESTful API with endpoints for CRUD operations on user data.
Custom Middleware: Includes custom middleware for logging and request validation.
Error Handling: Comprehensive error handling middleware to manage and respond to errors gracefully.
Dynamic Front-End: Simple front-end using EJS templates to display weather data and interact with the API.
Technologies Used
Node.js
Express.js
Axios
Redis
EJS
Body-Parser
Git
CSS
Installation
Clone the Repository


git clone https://github.com/yourusername/weather-api-wrapper.git
cd weather-api-wrapper
Install Dependencies

bash
Copy code
npm install
Set Up Redis

Ensure you have Redis installed and running on your local machine.
If Redis is not installed, follow the instructions here.
Set Up Environment Variables

Create a .env file in the root directory and add your WeatherAPI key:
plaintext
Copy code
WEATHER_API_KEY=your_weather_api_key_here
Run the Application

bash
Copy code
npm start
Usage
Open your browser and navigate to http://localhost:3000 to view the front-end interface.
Use the form to enter a city name and retrieve the current weather information.
Use the API endpoints to interact with user data (see below for details).
API Endpoints
Weather Endpoint
GET /api/weather/
Description: Fetches weather data for the specified city, with caching.
Parameters: city - Name of the city.
Example: /api/weather/London
User Endpoints
GET /api/users

Description: Retrieves a list of all users.
GET /api/users/

Description: Retrieves a single user by ID.
Parameters: id - ID of the user.
POST /api/users

Description: Creates a new user.
Body: JSON object with user data.
PUT /api/users/

Description: Updates an existing user by ID.
Parameters: id - ID of the user.
Body: JSON object with updated user data.
DELETE /api/users/

Description: Deletes a user by ID.
Parameters: id - ID of the user.
File Structure
java
Copy code
weather-api-wrapper/
│
├── models/
│   └── user.js
│
├── public/
│   └── styles.css
│
├── views/
│   └── index.ejs
│
├── .gitignore
├── package.json
├── server.js
├── weather.js
├── routes.js
├── userRoutes.js
└── README.md
Explanation of Key Files
server.js: Main server file that sets up the Express app, middleware, and routes.
weather.js: Contains the logic for fetching weather data and caching using Redis.
routes.js: Defines routes for weather-related API endpoints.
userRoutes.js: Defines routes for user-related API endpoints.
models/user.js: Simple in-memory data model for storing user data.
views/index.ejs: EJS template for rendering the front-end interface.
public/styles.css: Basic CSS for styling the front-end interface.
README.md: Project documentation.
Custom Middleware
Logging Middleware: Logs the HTTP method and URL of each incoming request.
javascript
Copy code
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
Error Handling
Error Handling Middleware: Catches and handles errors, sending a 500 response with an error message.
javascript
Copy code
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
Caching Strategy
Redis Caching: Caches weather data using city names as keys and sets an expiration time of 12 hours.
javascript
Copy code
client.setex(redisKey, 43200, JSON.stringify(weatherData)); // Cache for 12 hours
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the existing style and includes appropriate tests.

License
This project is licensed under the MIT License. See the LICENSE file for details.

