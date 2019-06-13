import React from 'react';
export default function SideBar ({handleClicked, clickedBtn}){

        return ( 
            <div className="sideBar">
                <ul>
                    <li className={clickedBtn && clickedBtn === "DataAnalysis"?"active":""}>
                        <a href="#" 
                            onClick = {
                                ()=>{
                                    handleClicked("DataAnalysis");
                                }
                            }
                        >Data Analysis</a>
                    </li>
                    <li className={clickedBtn && clickedBtn === "TodaysWeather"?"active":""}>
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
 