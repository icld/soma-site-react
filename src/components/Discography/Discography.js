// import { useState } from "react";
import "./Discography.css";
import albumData from "../../data/albumData";
import image from "./discography.jpg";
const data = albumData;

const Discography = () => {
  return (
    <div>
      <div classname="about-img-box">
        <img src={image} alt="john" className="services-img"></img>
      </div>
      <div className="discog">
        <h2 className="discog-title">Selected Discography</h2>
        {data.map((artist) => (
          <div className="artist-card">
            <h2 className="artist-title">{artist.artist}</h2>
            <span>Selected Tracks On:</span>
            {artist.recordings.map((album) => (
              <div className="record-card">
                <img src={album.artworkURL} alt="album art"></img>
                <div className="record-info">
                  <h2>{album.album}</h2>
                  <p>
                    Credits: {album.credits} <br />
                    {album.label} <br />
                    {album.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discography;
