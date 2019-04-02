import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./Mars.css";
import { Carousel } from "react-bootstrap";
import { Dots } from '@zendeskgarden/react-loaders'

function Mars(props) {
  const recentDate = moment().format("YYYY-MM-DD")
  const selectedDate = moment(props.match.params.date).format("YYYY-MM-DD")
  const [photos, setPhotos] = useState([]);
  const [direction, setDirection] = useState(null);
  const [loading, setLoading] = useState(false)
  useEffect(function() {
    setLoading(true)
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${props.match.params.date}&api_key=pzQUTAbV3KuhdebtS6ZHDLqTFaBG5wo9LAAAmAxh`
      )
      .then(function(res) {
        setLoading(false)
        setPhotos(res.data.photos);
      });
  }, [selectedDate]);

  const handleSelect = e => {
    setDirection(e.direction);
  };

  return (
    <div className="mars_page">
      <div>
      <h1>Recent Mars Photos</h1>
      <p>taken by: the curiosity rover</p>
      <p>Date: {selectedDate}</p>
      </div>
      {loading ? <Dots color="#337fbd" size="50px"/> : 
      <div className="display_pictures">
        {(photos === null || photos.length === 0) && <h3>Sorry, There is no available photos for this date</h3> }
        {(photos !== null && photos.length > 0 )&& <Carousel direction={direction} onSelect={e => handleSelect(e)}>
          {photos.map((photo, index) => {
            return (
              <Carousel.Item key={photo.id}>
                <img
                  style={{ height: "300px" }}
                  className="d-block w-100 photo_item"
                  src={photo.img_src}
                  alt={`${index} slide`}
                />
                <Carousel.Caption>
                  <h5>{photo.camera.full_name}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>}
      </div>}
    </div>
  );
}

export default Mars;
