import React, { Component } from "react";
import cloudy from "../../images/cloudy.svg";
import rainy from '../../images/rain.svg';
import sun from '../../images/sun.svg';
import notFound from '../../images/not-available.png';
import { connect } from "react-redux";
import { getWeatherRequest } from "../../redux/actions";
import LoaderImg from "../../images/loading.svg";
import Haze from '../../images/Haze.png';
let WeatherImg;
class TodaysWeather extends Component {
    constructor(props) {
        super(props);        
        this.state = {
        error: ""
        };
    }
  // const weatherToday = this.props.todaysWeather;

  getWeatherData = data => {
    data.preventDefault();
    let input_city = this.refs.city.value;
    let input_country = this.refs.country.value;
    let requestVal = {
      city: input_city,
      country: input_country
    };

    this.props.getWeatherRequest(requestVal);
  };
  render() {
    this.props &&
    this.props.todaysWeather.weather
    ?
        this.props.todaysWeather.weather[0].main.toLowerCase() === "rain"
        ?
            WeatherImg=rainy
            : this.props.todaysWeather.weather[0].main.toLowerCase() === "cloudy" || this.props.todaysWeather.weather[0].main.toLowerCase() === "clouds"
                ?
                WeatherImg=cloudy
                :this.props.todaysWeather.weather[0].main.toLowerCase() === "sun" || this.props.todaysWeather.weather[0].main.toLowerCase() === "clear"
                    ?
                        WeatherImg = sun
                    :this.props.todaysWeather.weather[0].main.toLowerCase() === "haze"
                        ?
                            WeatherImg = Haze
                        :WeatherImg= notFound
    : WeatherImg=notFound
    
    const { weatherLoading } = this.props.weatherLoading;
    return (
      <div className="TodaysWeather">
        <header>
          <p>Today's Weather</p>
          <hr />
        </header>
        <div className="search area">
            {
                this.props.weatherError 
                ?
                <span className="error">
                    <i className="" />
                    city not found
                </span>
                
                :<div></div>
            }
          
          <form className="searchForm" onSubmit={this.getWeatherData}>
            <div className="formField d-flex">
              <div>
                <label>City:</label>
                <input ref="city" type="text" ref="city" required />
              </div>
              <div>
                <label>Country:</label>
                <input ref="country" type="text" ref="country" />
              </div>
              <input type="submit" className="submit" value="search" required />
            </div>
          </form>
        </div>
        {this.props.weatherLoading ? (
          <div className="loaderDiv">
            <img src={LoaderImg} />
          </div>
        ) : this.props.weatherError ? 
        (
            
          <div>
            {/* <p className="errorMsg">Data could not be loaded</p> */}
          </div>
        ) : this.props.todaysWeather && this.props.todaysWeather.weather ? (
          <div className="WeatherData">           
            <>
              <div className="highLight d-flex">
                <div className="weather-img">                    
                     <img src={WeatherImg} />
                </div>
                <div className="forecastText">
                  <h1>
                    {this.props &&
                      this.props.todaysWeather.weather &&
                      this.props.todaysWeather.weather[0].main}
                  </h1>
                  <h3>
                    {this.props &&
                      this.props.todaysWeather.weather &&
                      this.props.todaysWeather.weather[0].description}
                  </h3>
                </div>
              </div>
              <div className="stats">
                <div className="d-flex">
                  <span>Temperature:</span>
                  <span>{`${this.props &&
                    this.props.todaysWeather.weather &&
                    this.props.todaysWeather.main.temp_min}-${this.props &&
                    this.props.todaysWeather.weather &&
                    this.props.todaysWeather.main.temp_max}`}</span>
                </div>
                <div className="d-flex">
                  <span>Humidity:</span>
                  <span>
                    {this.props &&
                      this.props.todaysWeather.weather &&
                      this.props.todaysWeather.main.humidity}
                  </span>
                </div>
              </div>
            </>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todaysWeather: state.getWeather.searchedWeather.data,
  weatherLoading: state.getWeather.searchedWeather.isLoading,
  weatherError: state.getWeather.searchedWeather.isError,
  dataSuccess: state.getWeather.searchedWeather.isSuccess
});

const mapDispatchToProps = dispatch => ({
  getWeatherRequest: data => dispatch(getWeatherRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodaysWeather);
