import React from "react";

import { useState } from "react";
import Ant from "./ant.component";
import "./main.css";
import Display from "./display.component";

export default function Home(props) {
  const [calc, setCalc] = useState([]);
  const [status, setStatus] = useState("Not yet started");

  let ant = props.data.ants;
  var result = [];

  // handles returned object with property of result which will be used for sorting
  const handlePush = (obj) => {
    result.push(obj);
    result.sort(function (a, b) {
      return parseFloat(b.result) - parseFloat(a.result);
    });
    console.log(result.length, props.data.ants.length);

    if (result.length == props.data.ants.length) {
      setCalc(result);
      setStatus("All Calculated");
    }
  };

  //to display initial list of ants and their own statuses
  const antList = (ant) => {
    return ant.map((ant) => {
      return <Ant ant={ant} key={ant.name} res={handlePush} />;
    });
  };

  return (
    <div className="container">
      <h1>Ants</h1>
      <p>Status of all Ants: {status}</p>
      <div className="product-list">{antList(ant)}</div>

      <h1>Ranked Results: </h1>
      <Display data={calc} />
    </div>
  );
}
