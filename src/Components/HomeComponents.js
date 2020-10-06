import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/HomeCount.css'

const homecont = (props) =>
{
    return (
        <div>
                <div className= 'HeadDiv'>
                    <h1 className = 'HomeHead'>
                        Welcome to VSuck
                    </h1>
                    <h2 className='HomeSub'>
                        Quizzes, Records, and everything your dog needs
                    </h2>
                    <hr className = 'CardBr'>
                    </hr>
                    <h3 className= 'HomeSub3'>
                        To Students, By Students, For Students
                    </h3>
                </div>
                <div>
                        <h2><NavLink className= 'Getstartedlink1' to='/Login'>Get Started</NavLink></h2>
                </div>
                <div className = 'HomeCard1'>
                    <h1 className = 'CardTit'>
                        Products
                    </h1>
                    <hr className = 'CardBr'></hr>
                    <ul>
                        <li>
                            <p className = 'HomeStory'>
                                VSuck is a Student Monitoring Platform Designed by Students, to Students, and for Students... and maybe dogs
                                and guess what? We really do suck at designing
                            </p>
                        </li>
                        <li>
                            <p className = 'HomeStory'>
                                A two student project inspired by Microsoft Teams, Google Classroom, and other such services. 
                                We took what we liked from everything and made something that best fits a student's needs. 
                                Who'll know the needs of a student better than a student himself.
                            </p>
                        </li>
                    </ul>                  
                </div>
                <div className='Logo'>

                </div>
                <div className = 'HomeCard2'>
                    <h1 className = 'CardTit'>
                        About Us
                    </h1>
                    <hr className = 'CardBr'></hr>
                    <ul>
                        <li>
                            <p className = 'HomeStory'>
                                VSuck can be used as a multi-usage Saas. It has all the features that a student needs.
                                The good thing about our product is that it makes it easier to manage students for the professors too.
                            </p>
                        </li>
                        <li>
                            <p className = 'HomeStory'>
                                VSuck is not made by "The Corporate" or any anti-vaxxers. 
                                We don't see any reason that you shouldn't use our website. 
                                It's free, Its useful, and honestly, its fun even for those who suck...Just like us.
                            </p>
                        </li>
                    </ul>                  
                </div>
            </div>
    )
}

export default homecont