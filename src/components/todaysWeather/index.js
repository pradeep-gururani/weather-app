import React, { Component } from 'react';
import cloudy from '../../images/cloudy.svg';
import {connect} from 'react-redux';
import {getWeatherRequest} from '../../redux/actions';
class TodaysWeather extends Component {
    state = {  }
    // const weatherToday = this.props.todaysWeather;
    getWeatherData = data => {
        data.preventDefault();
        console.log(data,'777777777');
        let input_city = this.refs.city.value;
        let input_country = this.refs.country.value;
        console.log('333333',input_city, input_country);
    
        let requestVal = {
          city: input_city,
          country: input_country
        };
    
        this.props.getWeatherRequest(requestVal);
      };
    render() { 
        return ( 
            <div className="TodaysWeather">
                <header>
                    <p>Today's Weather</p>
                    <hr/>
                </header>
                <div className="search area">
                    <span className="error"><i className=""></i>
                        city not found
                    </span>
                    <form className="searchForm" onSubmit={this.getWeatherData}>
                        <div className="formField d-flex">
                            <div>
                                <label>City:</label>
                                <input ref= "city" type="text" ref="city" required />
                            </div>
                            <div>
                                <label>Country:</label>
                                <input ref= "country" type="text" ref="country" />
                            </div>
                            <input type="submit" className="submit" value="search" required/>
                        </div>
                    </form>
                </div>
                <div className="WeatherData">
                    {console.log(this.props,'11111111111111')
                    }
                    <p>{console.log('22222222',this.props)
                    }</p>
                    <div className="highLight d-flex">
                        <div className="weather-img">
                            <img src={cloudy}/>
                        </div>
                        <div className="forecastText">
                            <h1>{this.props &&this.props.todaysWeather.weather&&this.props.todaysWeather.weather[0].main}</h1>    
                            <h3>{this.props &&this.props.todaysWeather.weather&&this.props.todaysWeather.weather[0].description}</h3>
                        </div>
                    </div>
                    <div className="stats">
                        <div className="d-flex">
                            <span>Temperature:</span>
                            <span>{`${this.props &&this.props.todaysWeather.weather&&this.props.todaysWeather.main.temp_min}-${this.props &&this.props.todaysWeather.weather&&this.props.todaysWeather.main.temp_max}`}</span>
                        </div>
                        <div className="d-flex">
                            <span>Humidity:</span>
                            <span>{this.props &&this.props.todaysWeather.weather&&this.props.todaysWeather.main.humidity}</span>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = state => ({
    todaysWeather: state.getWeather.searchedWeather.data
  });
  
  const mapDispatchToProps = dispatch => ({
    getWeatherRequest: data => dispatch(getWeatherRequest(data))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodaysWeather);
