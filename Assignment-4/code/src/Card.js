import React from "react";
import "./Postview.css";

export default function Data(props) {
  return (
    <div>
      <div className="card">

        <header>
          <div className="info">
            <h3>{props.name}</h3>
            <p>{props.location}</p>
          </div>
          <div className="threedots">
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </header>
        
        <section className="img-container">
          <img
            width="100%"
            height="100%"
            src={props.PostImage}
            alt="image"
          ></img>
        </section>
        <div className="likes-date">
          <div className="like">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-share"></i>
            <p>{props.likes} likes</p>
          </div>
          <div className="date">5 april 2022</div>
        </div>

        <div className="para">
          <p>
            <b>{props.description}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
