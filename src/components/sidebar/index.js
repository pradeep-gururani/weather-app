import React from 'react';
export default function SideBar ({handleClicked}){
        return ( 
            <div className="sideBar">
                <ul>
                    <li>
                        <a href="#"
                            onClick = {
                                ()=>{
                                    handleClicked("DataAnalysis");
                                }
                            }
                        >Data Analysis</a>
                    </li>
                    <li>
                        <a href="#"
                            onClick = {
                                ()=>{
                                    handleClicked("TodaysWeather");
                                }
                            }
                        >Today's weather</a>
                    </li>
                </ul>
            </div>
         );
}
 