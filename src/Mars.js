import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./Mars.css";
import { Carousel } from "react-bootstrap";

function Mars() {
  const recentDate = moment()
    .subtract(2, "days")
    .format("YYYY-MM-DD");
  const [photos, setPhotos] = useState([]);
  const [direction, setDirection] = useState(null);
  useEffect(function() {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${recentDate}&api_key=pzQUTAbV3KuhdebtS6ZHDLqTFaBG5wo9LAAAmAxh`
      )
      .then(function(res) {
        setPhotos(res.data.photos);
      });
  }, []);

  const handleSelect = e => {
    setDirection(e.direction);
  };

  console.log("photos", photos)
  return (
    <div className="mars_page">
      <div>
      <h1>Recent Mars Photos</h1>
      <p>taken by: the curiosity rover</p>
      </div>
      <div className="display_pictures">
        {photos.length === 0 && <div>loading..</div> }
        {photos.length > 0 && <Carousel direction={direction} onSelect={e => handleSelect(e)}>
          {photos.map((photo, index) => {
            return (
              <Carousel.Item key={photo.id}>
                <img
                  style={{ height: "300px" }}
                  className="d-block w-100 photo_item"
                  src={photo.img_src}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>{photo.camera.full_name}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>}
      </div>
    </div>
  );
}

export default Mars;
