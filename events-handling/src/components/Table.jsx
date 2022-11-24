import React from "react";
import cars from "../practice";

// Destructuring cars array using custom names
const [honda, tesla] = cars;

// Destructuring speedStats object and renaming its object name using custom names
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

// Destructuring colorsByPopularity array from the object of honda/tesla
const {
  coloursByPopularity: [hondaTopColor],
} = honda;

const {
  coloursByPopularity: [teslaTopColor],
} = tesla;

export default function Table() {
  console.log(cars);
  return (
    <table>
      <tr>
        <th>Brands</th>
        <th>top Speed</th>
        <th>Top Colors</th>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColor}</td>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColor}</td>
      </tr>
    </table>
  );
}
