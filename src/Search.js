import React, { useState, useEffect, useContext } from "react";
import { AsteroidsContext } from "./providers/AsteroidsProvider";
import "./Search.css";
import moment from "moment";
import { withRouter } from "react-router-dom";

function Search(props) {
  const asteroidsProvider = useContext(AsteroidsContext);
  const [id, setId] = useState("");
  const today = moment().format("YYYY-MM-DD");
  const propDate = props.location.pathname.split("/")[1]
  
  useEffect(
    function() {
      if (id !== "") {
        asteroidsProvider.fetchAsteroids(id, id);
      } else {
        asteroidsProvider.fetchAsteroids(today, today);
      }
    },
    [id]
  );

  return (
    <div className="search">
      <input
        className="extra_padding"
        value={id}
        onChange={e => {
          setId(e.target.value);
        }}
        type="date"
      />
      <svg
        className="search_btn"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="white"
        onClick={() => {
          if(propDate === "mars") {
            props.history.push(`/mars/${id}`)
          } else {
            if (id === "") {
              props.history.push(`/asteroids/${today}`);
            } else {
              props.history.push(`/asteroids/${id}`);
            }
          }
          setId("")
        }}
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
  );
}

export default withRouter(Search);
