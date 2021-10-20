import axios from 'axios';

function GetTempByCity(city) {
    return axios.get(`${process.env.REACT_APP_BASE_URL}weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
}

function GetTempByCoords(lat, lon, unit) {
    return axios.get(`${process.env.REACT_APP_BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}`)
}

export {
    GetTempByCity,
    GetTempByCoords
}






