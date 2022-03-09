import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="wrap">
      <div className="loading">
        <div className="bounceball"></div>
        <div className="text">NOW LOADING</div>
      </div>
    </div>
  );
}
