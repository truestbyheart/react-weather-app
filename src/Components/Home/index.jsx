import React, { Component } from 'react';
import { connect } from 'react-redux';

//actions
import getWeather from '../../Redux/actions';

import Loader from '../Loader';

const { getCityWeather } = getWeather;
export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      weatherResult: null,
      isloading: null,
      error: false
    };
  }

  componentWillReceiveProps({ result, error }) {
    if (result) {
      this.setState({ weatherResult: result, isloading: false, error: false });
    } else{
      this.setState({ error: true });
    }
    
  }
  getWeatherResult(key) {
    const { getCityWeather } = this.props;
    const city = key.target.value;
    if (key.which === 13) {
      this.setState({ isloading: true });
      getCityWeather(city);
    }
  }
  render() {
    const { weatherResult, isloading, error } = this.state;
  
     return (
      <div className='home'>
        <div className='form-group'>
          <input
            type='text'
            onKeyUp={event => this.getWeatherResult(event)}
            className='form-control'
            placeholder='Search for the city'
          />
        </div>
        <hr />
        {
          error ? (
            <h1>Please Enter Avalid City</h1>
          ) :
          weatherResult ? (
          <div className='card'>
            <h5 className='card-header'>{weatherResult.location.name}</h5>
            <div className='card-body'>
              <div className='media'>
                <img
                  src={`https:${weatherResult.current.condition.icon}`}
                  className='mr-3'
                />
                <div className='media-body'>
                  <h5 className='mt-0'>
                    {weatherResult.current.condition.text}
                  </h5>
                  <p className='temp'>
                    {weatherResult.current.temp_c} &#8451; &nbsp;/ &nbsp;
                    {weatherResult.current.temp_f} &#8457;
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : isloading ? (
          <Loader />
        ) : (
          ' '
        )}
      </div>
    ) 
  }
}
const mapStateToProps = state => (
  {
  result: state.forecast.data,
  error: state.forecast.error
});
export default connect(
  mapStateToProps,
  { getCityWeather }
)(index);
