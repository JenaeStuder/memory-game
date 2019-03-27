import React, { Component } from "react";
import "./style.css";


function VansCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
          </ul>
        </div>
        <span onClick={() => props.removeVans(props.id)} className="remove">
          𝘅
        </span>
      </div>
    );
  }
  
  export default VansCard;
  