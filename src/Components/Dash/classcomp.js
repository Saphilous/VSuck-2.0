import { render } from '@testing-library/react';
import React, {PureComponent} from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import '../../CSS/ClassComp.css'

//Static Data to be removed later

const data = [
    {
      name: 'Day 1', Obtained: 4000, Total: 2400,
    },
    {
      name: 'Day 2', Obtained: 3000, Total: 2210,
    },
    {
      name: 'Day 3', Obtained: 2000, Total: 2290,
    },
    {
      name: 'Day 4', Obtained: 2780, Total: 2000,
    },
    {
      name: 'Day 5', Obtained: 1890, Total: 2181,
    },
    {
      name: 'Day 6', Obtained: 2390,  Total: 2500,
    },
    {
      name: 'Day 7', Obtained: 3490,  Total: 2100,
    },
  ];

  //End of Static Data

class ClassComp extends PureComponent
{
    render(){
        return(
            <div>
                <div className= 'ClassCardGrid'>
                    <div className= 'ClassCard'>
                        <h2 className = 'ClassCardHead'>
                            Astronomy 101
                        </h2>
                        <hr className = 'ClassCardHr' />
                        <p className = 'ClassCardP'>
                            <ul>
                                <li>
                                    Class Teacher: Suckson Pantye 
                                </li>
                                <li>
                                    Total Hours: 42  
                                </li>
                                <li>
                                    Description: Astronomy 101 teaches the basics of space exploration to all the aspiring astronauts.
                                </li>
                            </ul>
                        </p>
                        <hr className = 'ClassCardHr' />
                        <div className = 'ClsBtnDiv'>
                        <button className= 'ClassButton'>
                            Class Board
                        </button>
                        </div>
                    </div>
                    <div className= 'ClassCard'>
                        <h2 className = 'ClassCardHead'>
                            Biology 101
                        </h2>
                        <hr className = 'ClassCardHr' />
                        <p className = 'ClassCardP'>
                            <ul>
                                <li>
                                    Class Teacher: Suckson Pantye 
                                </li>
                                <li>
                                    Total Hours: 42  
                                </li>
                                <li>
                                    Description: Astronomy 101 teaches the basics of space exploration to all the aspiring astronauts.
                                </li>
                            </ul>
                        </p>
                        <hr className = 'ClassCardHr' />
                        <div className = 'ClsBtnDiv'>
                        <button className= 'ClassButton'>
                            Class Board
                        </button>
                        </div>
                    </div>
                    <div className= 'ClassCard'>
                        <h2 className = 'ClassCardHead'>
                            Philosophy 101
                        </h2>
                        <hr className = 'ClassCardHr' />
                        <p className = 'ClassCardP'>
                            <ul>
                                <li>
                                    Class Teacher: Suckson Pantye 
                                </li>
                                <li>
                                    Total Hours: 42  
                                </li>
                                <li>
                                    Description: Astronomy 101 teaches the basics of space exploration to all the aspiring astronauts.
                                </li>
                            </ul>
                        </p>
                        <hr className = 'ClassCardHr' />
                        <div className = 'ClsBtnDiv'>
                        <button className= 'ClassButton'>
                            Class Board
                        </button>
                        </div>
                    </div>
                    <div className= 'ClassCard'>
                        <h2 className = 'ClassCardHead'>
                            CyberSecurity 101
                        </h2>
                        <hr className = 'ClassCardHr' />
                        <p className = 'ClassCardP'>
                            <ul>
                                <li>
                                    Class Teacher: Suckson Pantye 
                                </li>
                                <li>
                                    Total Hours: 42  
                                </li>
                                <li>
                                    Description: Astronomy 101 teaches the basics of space exploration to all the aspiring astronauts.
                                </li>
                            </ul>
                        </p>
                        <hr className = 'ClassCardHr' />
                        <div className = 'ClsBtnDiv'>
                        <button className= 'ClassButton'>
                            Class Board
                        </button>
                        </div>
                    </div>
                    <div className= 'ClassCard'>
                        <h2 className = 'ClassCardHead'>
                            Social Psychology 101
                        </h2>
                        <hr className = 'ClassCardHr' />
                        <p className = 'ClassCardP'>
                            <ul>
                                <li>
                                    Class Teacher: Suckson Pantye 
                                </li>
                                <li>
                                    Total Hours: 42  
                                </li>
                                <li>
                                    Description: Astronomy 101 teaches the basics of space exploration to all the aspiring astronauts.
                                </li>
                            </ul>
                        </p>
                        <hr className = 'ClassCardHr' />
                        <div className = 'ClsBtnDiv'>
                        <button className= 'ClassButton'>
                            Class Board
                        </button>
                        </div>
                    </div>
                    <div className= 'ClassCard'>
                        <h2 className = 'ClassCardHead'>
                            Sex Ed 101
                        </h2>
                        <hr className = 'ClassCardHr' />
                        <p className = 'ClassCardP'>
                            <ul>
                                <li>
                                    Class Teacher: Suckson Pantye 
                                </li>
                                <li>
                                    Total Hours: 42  
                                </li>
                                <li>
                                    Description: Astronomy 101 teaches the basics of space exploration to all the aspiring astronauts.
                                </li>
                            </ul>
                        </p>
                        <hr className = 'ClassCardHr' />
                        <div className = 'ClsBtnDiv'>
                        <button className= 'ClassButton'>
                            Class Board
                        </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>
                        Attendance Chart
                    </h1>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Obtained" fill="#8884d8" />
                </BarChart>
                </div>
            </div>
        )
    }
}
export default ClassComp