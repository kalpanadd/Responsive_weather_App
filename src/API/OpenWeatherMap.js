import axios from 'axios';

export default function GetTempByCity(city) {
    return axios.get(`${process.env.REACT_APP_API_KEY}weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
}






