import { combineReducers } from 'redux';
import types from './types';

const { GET_CURRENT_WEATHER, GET_CURRENT_WEATHER_ERROR } = types;

export const forecast = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return { ...state, data: action.payload };
    case GET_CURRENT_WEATHER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ forecast });
