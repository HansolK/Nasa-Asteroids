import React, {useEffect, useState, useContext} from 'react'
import {AsteroidsContext} from './providers/AsteroidsProvider'
import moment from 'moment'
import "./Asteroids.css"

function Asteroids({match: {params : {id}}}) {
  const asteroidsProvider = useContext(AsteroidsContext)
  const [specificAsteroids, setSpecificAsteroids] = useState({})
  const [getData, setGetData] = useState(false)
  const selectedDate = moment(id).format("YYYY-MM-DD")

  useEffect(function() {
    setSpecificAsteroids(asteroidsProvider.lookupAsteroids[selectedDate])
    setGetData(true)
  }, []);

  if(getData && specificAsteroids !== undefined) {
    return(
      <>
        <h1>Ateroids on {moment(id).format("DD-MMM-YYYY")} </h1>
        <div className="card">
        {specificAsteroids.map((asteroid, index) => {
          return <div className="card-item">
            <p>Number {index + 1}</p>
            <p>Id: {asteroid.id}</p>
            <p>Name: {asteroid.name.replace(/[\(\)]/g, "")}</p>
            <p>Is potentially hazardous? {`${asteroid.is_potentially_hazardous_asteroid}`}</p>
            <p>Estimated diameter(Max) {asteroid.estimated_diameter.kilometers.estimated_diameter_max}km</p>
            <div className="images">
              <div id="earth"></div>
              <div className="line">{asteroid.close_approach_data[0].miss_distance.kilometers}km</div>
              <img id="asteroid" src="/Asteroid-PNG-Photos.png"/>
            </div>
          </div>
        })}
        </div>
      </>
    )
  }

  return(
    <div>
      
    </div>
  )
 
}

export default Asteroids