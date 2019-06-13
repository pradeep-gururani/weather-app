import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','august','september'],
    datasets: [
      {
        label: 'Sample Data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 150,
        data: [600, 20, 130, 200, 300, 400, 800,900,1300,180,250,200]
        // data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
class DataAnalysis extends Component {
    render() { 
        

        return ( 
            <div className = "DataAnalysis">
                <header>
                    <p>Data Analysis</p>
                    <hr/>
                </header>
                    <Line
                        data={data}
                        width={100}
                        height={250}
                        options={{ maintainAspectRatio: false }}
                    />
            </div>
         );
    }
}
 
export default DataAnalysis;