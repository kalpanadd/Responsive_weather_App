import axios from 'axios';

function GetTempByCity(city, unit) {
    return axios.get(`${process.env.REACT_APP_BASE_URL}weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}`)
}

function GetTempByCoords(lat, lon, unit) {
    return axios.get(`${process.env.REACT_APP_BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=${unit}`)
}

function GetForecast(lat, lon, units) {
    return axios.get(`${process.env.REACT_APP_BASE_URL}onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`)

}
export {
    GetTempByCity,
    GetTempByCoords,
    GetForecast
}






