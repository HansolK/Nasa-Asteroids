import React, {useContext} from "react";
import { AsteroidsContext } from "./providers/AsteroidsProvider";
import "./Search.css";
import "./App.css";
import "./Asteroids.css";
import moment from "moment";

function Asteroids(props) {
  const asteroidsProvider = useContext(AsteroidsContext);
  let specificAsteroids = "";
  const today = moment().format("YYYY-MM-DD");
  const id = props.match.params.date;

  if (id === "") {
    specificAsteroids = asteroidsProvider.lookupAsteroids[today];
  } else {
    specificAsteroids = asteroidsProvider.lookupAsteroids[id];
  }

  if (asteroidsProvider.status && specificAsteroids !== undefined) {
    return (
      <div className="result_page">
        <h1>
          Ateroids on{" "}
          {id
            ? moment(id).format("DD-MMM-YYYY")
            : moment(today).format("DD-MMM-YYYY")}{" "}
        </h1>
        <div className="card">
          {specificAsteroids.map((asteroid, index) => {
            return (
              <div key={asteroid.id} className="card-item">
                <p>Number {index + 1}</p>
                <p>Id: {asteroid.id}</p>
                <p>Name: {asteroid.name.replace(/[()]/g, "")}</p>
                <p>
                  Is potentially hazardous?{" "}
                  {`${asteroid.is_potentially_hazardous_asteroid}`}
                </p>
                <p>
                  Estimated diameter(Max){" "}
                  {
                    asteroid.estimated_diameter.kilometers
                      .estimated_diameter_max
                  }
                  km
                </p>
                <div className="images">
                  <div id="earth" />
                  <div className="line">
                    {asteroid.close_approach_data[0].miss_distance.kilometers}km
                  </div>
                  <img id="asteroid" src="/Asteroid-PNG-Photos.png" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return <div />;
}

export default Asteroids;
