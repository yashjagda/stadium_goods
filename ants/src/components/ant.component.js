import React from "react";
import "./main.css";
import { useState } from "react";

export default function Ant(props) {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("Not yet Run!");

  let ant = { ...props.ant };

  const generateAntWinLikelihoodCalculator = () => {
    const delay = 7000 + Math.random() * 7000;
    const likelihoodOfAntWinning = Math.random();

    return (callback) => {
      setTimeout(() => {
        callback(likelihoodOfAntWinning);
      }, delay);
    };
  };

  //callback function to receive result from generate function
  const callback = (res) => {
    setStatus("Calculated");
    setResult(res);
    ant.result = res;

    props.res(ant);
  };

  //call function initiates when calculate is clicked
  const call = () => {
    generateAntWinLikelihoodCalculator()(callback);
    setResult("Loading");
    setStatus("In Progress");
  };

  return (
    <div className="product-item">
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
          <div className="product-name">Name: {props.ant.name}</div>
          <div className="product-desc">Weight: {props.ant.weight}</div>
          <div className="product-desc">Color: {props.ant.color}</div>
          <div className="product-desc">Length: {props.ant.length}</div>
          <button onClick={() => call()}>Calculate</button>
          <p>Status: {status}</p>
          <div className="display">
            <p>{result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
