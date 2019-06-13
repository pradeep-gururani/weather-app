import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import DataAnalysis from './components/DataAnalysis';
import TodaysWeather from './components/todaysWeather';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      clickedBtn: "DataAnalysis"
     };
  }
  
  handleClicked = (data)=>{
    this.setState({clickedBtn : data});
  }
  render() { 
    return (
      <div className="App">
        <div className="AppContainer">
         <div className="left-section">
            <SideBar handleClicked = {this.handleClicked}
              clickedBtn={this.state.clickedBtn}
            />
         </div>
         <div className="right-section">
            { this.state.clickedBtn ==="DataAnalysis"
            ?
            <DataAnalysis />        
            :
            <TodaysWeather />
            }
              
         </div>
        </div>
      </div>
    );
  }
}
 
export default App;
