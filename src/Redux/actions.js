import axios from 'axios'

import types from './types';

const { 
    GET_CURRENT_WEATHER,
    GET_CURRENT_WEATHER_ERROR 
} = types;

const baseURL = 'https://api.apixu.com/v1/current.json?key=c0b7dba6b826487bbe1103313190809&q'

export default {
    getCityWeather: city => dispatch => {
    const cityWeather = baseURL + `=${city}`;
     axios.get(cityWeather)
     .then(res => {
         dispatch({ type: GET_CURRENT_WEATHER, payload: res.data })
     })
     .catch( error => {
         dispatch({type: GET_CURRENT_WEATHER_ERROR, payload: error})
     })
    }
}