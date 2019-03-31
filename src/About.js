import React from 'react'
import './About.css'

function About() {
  return(
    <div>
      <h1>About Us</h1>
      <p>U.niverse is made for getting comfortable with using React. This is purely React based app for checking asteroids around earth on date the user selected</p>
      <p>This app is powered by <a style={{color: "red"}} href="https://api.nasa.gov/index.html#getting-started">Nasa API</a> and created by <a href="https://github.com/HansolK" style={{color: "red"}}>Hansol Kim</a></p>
    </div>
  )
}

export default About