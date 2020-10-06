import React, {PureComponent} from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
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

  const marksdata = [
    {
      subject: 'Math', A: 120, B: 110, fullMark: 150,
    },
    {
      subject: 'Chinese', A: 98, B: 130, fullMark: 150,
    },
    {
      subject: 'English', A: 86, B: 130, fullMark: 150,
    },
    {
      subject: 'Geography', A: 99, B: 100, fullMark: 150,
    },
    {
      subject: 'Physics', A: 85, B: 90, fullMark: 150,
    },
    {
      subject: 'History', A: 65, B: 85, fullMark: 150,
    },
  ];

  //End of Static Data

class ClassComp extends PureComponent
{
    render(){
        console.log(this.props.classesdata)
        const classesmapped = this.props.classesdata.map(classes =>
            {
                return(
                    <div className= 'ClassCard'>
                        <h2 className = 'ClassCardHead'>
                           {classes.ClassName}
                        </h2>
                        <hr className = 'ClassCardHr' />
                        <div className = 'ClassCardP'>
                            <ul>
                                <li>
                                    Description: {classes.ClassDescription}
                                </li>
                            </ul>
                        </div>
                        <hr className = 'ClassCardHr' />
                        <div className = 'ClsBtnDiv'>
                        <button className= 'ClassButton' value={classes._id} onClick = {this.props.ClassboardClicked}>
                            Class Board
                        </button>
                        </div>
                    </div>
                )
            })
        return(
            <div>
                 <div className= 'ClassCardGrid'>
                    <h1 className='dashTitle'>
                        Course List
                    </h1>
                    {classesmapped}
                </div>
                <hr className='ChartBegin' />
                <h1 className= 'CharTit'>
                    Performance Charts
                </h1>
                <div className= 'ReChar'>
                    <div className='barchar'>
                        <h1 className= 'CharSubTit'>
                            Attendance Chart
                        </h1>
                        <BarChart
                            width={600}
                            height={400}
                            data={data}
                            margin={{
                            top: 30, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Obtained" fill="#663399" />
                        </BarChart>
                    </div>
                    <div className='Radchar'>
                            <h1 className= 'CharSubTit'>
                                Marks Chart
                            </h1>
                        <RadarChart cx={300} cy={250} outerRadius={200} width={600} height={500} margin={{
                                top: 0, right: 30, left: 20, bottom: 5,
                                }} data={marksdata}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar name="Mike" dataKey="A" stroke="#663399" fill="#663399" fillOpacity={0.65} />
                        </RadarChart>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClassComp