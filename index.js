const OPENWEATHER_APIKEY = process.env.APIKEY;
const PORT = process.env.PORT || 3000;

const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/weather', (req, res) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+req.body.city+'&appid='+OPENWEATHER_APIKEY+'&units=metric'
    axios({
        url: url,
        responseType: 'json'
    }).then(data => { 
        res.json(data.data)
    }
    ).catch(err => console.log(err))
});

app.listen(PORT, () => {
	console.log(`Servidor iniciado na porta ${PORT}`);
});