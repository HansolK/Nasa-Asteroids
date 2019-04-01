import React, { useState, createContext } from "react";
import axios from 'axios'
const AsteroidsContext = createContext({});

function AsteroidsProvider(props) {
  const [asteroids, setAsteroids] = useState({});
  const [lookupAsteroids, setLookupAsteroids] = useState({})
  const [status, setStatus] = useState({});

  const fetchAsteroids = (startDate, endDate) => {
    setStatus(function(prev) {
      return {...prev, [`${startDate}`]: "loading"}
    })
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=pzQUTAbV3KuhdebtS6ZHDLqTFaBG5wo9LAAAmAxh`
      )
      .then(function(res) {
        setAsteroids({...asteroids, [`${startDate}/${endDate}`]: res.data.near_earth_objects})
        setStatus(function(prev) {
          return {...prev, [`${startDate}`]: "loaded"}
        })
        Object.keys(res.data.near_earth_objects || {}).forEach(something => {
          setLookupAsteroids(previous => {
            return {...previous, [something]: res.data.near_earth_objects[something]}
          })
        })
      })
      .catch(error => {
        setStatus(function(prev) {
          return {...prev, [`${startDate}`]: "error"}
        })
      })
  }

  const getAsteroids = (startDate, endDate) => {
    return asteroids[`${startDate}/${endDate}`]
  }

  return <AsteroidsContext.Provider
    value={{
      getAsteroids,
      fetchAsteroids,
      lookupAsteroids,
      status
  }}>
    {props.children}
  </AsteroidsContext.Provider>;
}

export { AsteroidsProvider, AsteroidsContext };