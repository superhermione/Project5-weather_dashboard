import React from "react";
import TableRow from "./TableRow";

const ForecastList = ({ list }) => {
  console.log(list);
  let headings = ["Date", "Min Temp", "Max Temp", "Weather Des", "Weather"];
  let body = [];

  if (list != null) {
    for (let i = 0; i < 7; i++) {
      body.push([
        list.data[i]["valid_date"],
        list.data[i]["min_temp"],
        list.data[i]["max_temp"],
        [list.data[i].weather.description],
        [list.data[i].weather.icon],
      ]);
    }
    console.log(body);
  }

  return (
    <div className="forecast-table">
      <h2>7-day Weather Forecast</h2>
      <table>
        <thead>
          <tr>
            {headings.map((head, headID) => (
              <th key={headID}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((rowContent, rowID) => (
            <TableRow key={rowID} rowContent={rowContent} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastList;