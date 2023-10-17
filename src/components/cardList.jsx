import React from "react";

const CardList = ({ cityName, state_code, temp, ob_time, weatherDes}) => {
  return (
    <div className="cardlist-cont">
      <ul className="d-flex">
        <li className="card">
          <h4>{cityName}</h4>
          <p>{state_code}</p>
        </li>
        <li className="card">
          <h4>{temp}</h4>
          <p>
            Celsius
          </p>
        </li>
        <li className="card">
          <h4>{weatherDes}</h4>
        </li>
        <li className="card">
          <p>Last Observed at:  </p>
          <h4>{ob_time}</h4>
        </li>
      </ul>
    </div>
  );
};

export default CardList;
