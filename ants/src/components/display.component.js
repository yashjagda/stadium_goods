import React from "react";
import "./main.css";

export default function Display(props) {
  //   console.log(props.data);
  return (
    <div className="product-list">
      {props.data.map((ant) => (
        <div className="product-item" key={ant.name}>
          <div className="product-card">
            <div className="product-image">
              <a className="product-image-body">
                <img
                  className="product-image-block"
                  src="https://cdn.orkin.com/images/ants/harvester-ant-illustration_1500x1200.jpg"
                ></img>
              </a>
            </div>
            <div className="product-info">
              <div className="product-name">Name: {ant.name}</div>
              <div className="product-desc">Weight: {ant.weight}</div>
              <div className="product-desc">Color: {ant.color}</div>
              <div className="product-desc">Length: {ant.length}</div>
              <div className="product-desc">LikeliHood: {ant.result}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
