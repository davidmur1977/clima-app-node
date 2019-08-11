const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=28e3a2f3bb548b0cb89ac846b2ab6153&units=metric`)

    return resp.data.main.temp;


}




module.exports = {
    getClima
}