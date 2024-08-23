import React from 'react';

export const Main = () => {
    return (
        <div>
            <h1 className='heading'>SS</h1>
            <div className='navbar'>
                <a href='#heading' className='item'><div>HOME</div></a>
                <a href='#about' className='item'><div>ABOUT</div></a>
                <a href='#projects' className='item'><div>PROJECTS</div></a>
                <a href='#skills' className='item'><div>SKILLS</div></a>
                <a href='#contact' className='item'><div>CONTACT</div></a>
            </div>
            <div id='home'>
                <div className='profile-pic'></div>
                <p className='home-para'>I'm <b>STEPHANIE SUNIL</b>,<br></br> a second-year IT student studying at Middlesex University Dubai.<br></br>
                   I'm passionate about learning new languages and building applications! 
                </p>
            </div>
            <div id='about'>
                <h1>ABOUT ME</h1>
                <p><i>Hello! I'm just starting my journey as an IT student and am very enthusiastic about programming and expanding my knowledge.</i></p>
                <div className='main-sect'>
                    <div className='left-sect'>
                        <ul>
                            <li><b>Birthday:</b>&nbsp;&nbsp;&nbsp;&nbsp;16 June 2005</li>
                            <li><b>Website:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://stephisan25.wixsite.com/myunifolio' target='blank'>Blog</a></li>
                            <li><b>City:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>Dubai, UAE</li>
                        </ul>
                    </div>
                    <div className='right-sect'>
                        <ul>
                            <li><b>Age:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19</li>
                            <li><b>Degree:</b>&nbsp;&nbsp;&nbsp;&nbsp;Bachelor</li>
                            <li><b>Email:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stephi.san25@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <p>I'm a first-year IT student with a passion for technology and a hunger to learn. Eager to dive into the world of IT, I'm enthusiastic about exploring new concepts and solving complex problems. With a strong work ethic, I'm ready to jump into projects and contribute effectively.<br></br><br></br>
                Driven by curiosity and a desire to excel, I'm committed to honing my skills and growing in the field of IT. As a diligent first-year student, I approach challenges with determination and embrace opportunities for learning. With a proactive attitude, I'm excited to collaborate and make a positive impact.</p>
                <br></br>
                <h3><b>Education:</b></h3>
                <br></br><br></br>
                <p>New Indian Model School&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;&nbsp;&nbsp;2010-2023<br></br><br></br>
                Middlesex University Dubai&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;&nbsp;&nbsp;2023-present</p>
            </div>
            <div id='projects'>
                <h1>MY PROJECTS</h1>
                <div className='project-slides'>
                    <div id='project'>
                        <h1>Project 1:<br></br>Java Quiz Generator</h1>
                        <p>An application made using Java and FXML that allows users to login/sign in and attempt a quiz and compete with other users (leaderboard).</p>
                        <h3><a href='https://github.com/stephaniegogo251/QuizGenerator' target='blank'>Github</a></h3>
                    </div>
                    <div id='project'>
                        <h1>Project 2:<br></br>Weather App</h1>
                        <p>An application made using HTML, CSS and an API, that lets users check the weather condition (temperature, precipitation, and wind km/hr).</p>
                        <h3><a href='https://github.com/stephaniegogo251/Week3WeatherApp' target='blank'>Github</a></h3>
                    </div>
                    <div id='project'>
                        <h1>Project 3:<br></br>Todo List</h1>
                        <p>An application created using HTML, Javascript and React that helps people keep track of their daily tasks (add, edit, clear and delete tasks).</p>
                        <h3><a href='https://github.com/stephaniegogo251/Week5TodoList' target='blank'>Github</a></h3>
                    </div>
                </div>
            </div>
            <div id='skills'>
                <h1>MY SKILLS</h1>
                <h3>HTML</h3>
                <div className='main-bar-1'>
                    <div className='left-bar-1'>85%</div>
                    <div className='right-bar-1'></div>
                </div>
                <h3>CSS</h3>
                <div className='main-bar-2'>
                    <div className='left-bar-2'>75%</div>
                    <div className='right-bar-2'></div>
                </div>
                <h3>Javascript</h3>
                <div className='main-bar-3'>
                    <div className='left-bar-3'>60%</div>
                    <div className='right-bar-3'></div>
                </div>
                <h3>Java</h3>
                <div className='main-bar-4'>
                    <div className='left-bar-4'>70%</div>
                    <div className='right-bar-4'></div>
                </div>
            </div>
            <div id='contact'>
                <h1>CONTACT ME</h1>
                <form className='form-flex'>
                    <div className='form-div'>
                        <label>Name:</label>
                        <input type='text' placeholder='Enter your full name' required></input>
                    </div>
                    <div className='form-div'>
                        <label>Email Id:</label>
                        <input type='email' placeholder='abc@example.com' required></input>
                    </div>
                    <div className='form-div'>
                        <label>Message:</label>
                        <input type='textfield' placeholder='Enter your message'></input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}