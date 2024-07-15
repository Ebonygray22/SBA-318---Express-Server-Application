const axios = require('axios');
const redis = require('redis');
const client = redis.createClient();

const getWeather = async (req, res) => {
    const city = req.params.city;
    const redisKey = `weather:${city}`;

    client.get(redisKey, async (err, data) => {
        if (data) {
            return res.json(JSON.parse(data));
        } else {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
                const weatherData = response.data;
                client.setex(redisKey, 43200, JSON.stringify(weatherData)); // Cache for 12 hours
                return res.json(weatherData);
            } catch (error) {
                return res.status(500).json({ error: 'Error fetching data from API' });
            }
        }
    });
};

module.exports = { getWeather };
