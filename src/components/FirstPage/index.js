import React from 'react';
import { connect } from 'react-redux';

const renderRow = (dayWeather, index) => (
  <tr key={index}>
    <td>{new Date(dayWeather.dt * 1e3).toString()}</td>
    <td>{dayWeather.pressure}</td>
    <td>{dayWeather.humidity}</td>
    <td>{dayWeather.speed}</td>
    <td>{dayWeather.clouds}</td>
  </tr>
);

const renderTable = (data) => (
  <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
    <thead>
    <tr>
      <th>Date</th>
      <th>Pressure, hPa</th>
      <th>Humidity, %</th>
      <th>Wind speed, meter/sec</th>
      <th>Cloudiness, %</th>
    </tr>
    </thead>
    <tbody>
      {data.map(renderRow)}
    </tbody>
  </table>
);

const FirstPage = (props) => (
  props.list ? renderTable(props.list) : <div>I'm first page</div>
);

export default connect(
  state => ({ list: state.list }),
  {}
)(FirstPage);
