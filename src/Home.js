import React, {useState} from "react";
import classNames from 'classnames'
import "./Home.css";

function Home(props) {
  const [displayPictureDetail, setDisplayPictureDetail] = useState(false)

  return (
    <div className="page home_page">
      <h1>Welcome to U.niverse</h1>
      <div className="question">
        <div
        className={classNames("picture_detail", {show: displayPictureDetail})}
        >
          <p>Today's picture: {props.details.title}</p>
          <p>{props.details.explanation}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          onClick={() => {
            setDisplayPictureDetail(!displayPictureDetail)
          }}
        >
          <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      </div>
    </div>
  );
}

export default Home;
