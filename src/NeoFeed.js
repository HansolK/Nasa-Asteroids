import React, { useEffect, useState, useContext } from "react";
import { AsteroidsContext } from "./providers/AsteroidsProvider";
import { Link } from "react-router-dom";
import "./NeoFeed.css";
import moment from "moment";

function NeoFeed() {
  const asteroidsProvider = useContext(AsteroidsContext);
  const [date, setDate] = useState("");
  
  const endDate = moment(date)
    .add(7, "days")
    .format("YYYY-MM-DD");

  useEffect(
    function() {
      if (date !== "") {
        asteroidsProvider.fetchAsteroids(date, endDate);
      }
    },
    [date]
  );
  
  
  const asteroidDates = asteroidsProvider.getAsteroids(date, endDate) || {};
  console.log(asteroidDates)
  return (
    <div>
      <h1>NeoFeed</h1>
      <p>
        Search by specific date: You can select the start date and it will show
        all the asteroids from the date till 7 days after.
      </p>
      <div>
        <input
          onChange={e => {
            setDate(e.target.value);
          }}
          type="date"
        />
        <p> or </p>
        <button
          onClick={() => {
            setDate(
              moment()
                .subtract(7, "days")
                .format("YYYY-MM-DD")
            );
          }}
        >
          Last 7 days
        </button>
      </div>
      {/* {asteroidDates !== {} ? <div className="loader"></div> : <p>oops</p>}   */}
      {Object.keys(asteroidDates).map(eachDate => {
        return (
          <div key={eachDate}>
            <p>
              <Link className="date_anchor" to={`/asteroids/${eachDate}`}>
                {moment(eachDate).format("DD-MMM-YYYY")}
              </Link>{" "}
              with {asteroidDates[eachDate].length} results
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default NeoFeed;
