const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const redis = require('redis');
const app = express();
const PORT = process.env.PORT || 3000;

const client = redis.createClient();

client.on('error', (err) => {
    console.error('Error connecting to Redis', err);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.set('view engine', 'ejs');

const weatherRoutes = require('./routes');
const userRoutes = require('./userRoutes');
app.use('/api', weatherRoutes);
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const weather = await axios.get(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    res.render('index', { weather: weather.data });
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
