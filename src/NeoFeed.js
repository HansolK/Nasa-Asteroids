import React, { useEffect, useState, useContext } from "react";
import { AsteroidsContext } from "./providers/AsteroidsProvider";
import { Link } from "react-router-dom";
import moment from "moment";

function NeoFeed() {

  const sorting = (arr) => {
    arr.sort((a,b) => {
      if(moment(a).isBefore(b)) {
        return -1
      } else {
        return 1
      }
    })
    return arr
  }
  
  const asteroidsProvider = useContext(AsteroidsContext);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false)
  const endDate = moment(date)
    .add(6, "days")
    .format("YYYY-MM-DD");
  useEffect(
    function() {
      setLoading(true)

      if (date !== "") {
        asteroidsProvider.fetchAsteroids(date, endDate);
      }
      setLoading(false)
    },
    [date]
  );

  const asteroidDates = asteroidsProvider.getAsteroids(date, endDate) || {};

  return (
    <div>
      <h1>NeoFeed</h1>
      <p>
        Search by specific date: You can select the start date and it will show
        all the asteroids from the date till 7 days after.
      </p>
      <div>
        <input
          className="extra_padding"
          onChange={e => {
            setDate(e.target.value);
          }}
          type="date"
        />
        <p> or </p>
        <button
          className="extra_padding seven_day_btn"
          onClick={() => {
            setDate(
              moment()
                .subtract(6, "days")
                .format("YYYY-MM-DD")
            );
          }}
        >
          Last 7 days
        </button>
      </div>
      <div className={date !== "" && sorting(Object.keys(asteroidDates)).length > 0 ? "wrapping_results" : "hidden"}>
      {loading !== true && sorting(Object.keys(asteroidDates)).map(date => {
        return (
          <div key={date}>
            <Link className="date_anchor" to={`/asteroids/${date}`}>
            <p>
              {moment(date).format("DD-MMM-YYYY")} with {asteroidDates[date].length} results
            </p>
            </Link>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default NeoFeed
