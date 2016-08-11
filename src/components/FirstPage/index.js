import React from 'react';
import { connect } from 'react-redux';
import { Textfield, DataTable, TableHeader } from 'react-mdl';
import { setFilter } from '../../actions';
import filter from '../../helpers/filter';
import formatDate from '../../helpers/formatDate';

/**
 * TODO: Move columns to constants
 * @param {Function} setFilter
 */
const getFilters = ({ setFilter }) => (
  [
    ['pressure', 'Pressure, hPa'],
    ['humidity', 'Humidity, %'],
    ['speed', 'Wind speed, meter/sec'],
    ['clouds', 'Cloudiness, %']
  ].map(([name, header]) => (
    name ?
      <div key={name}>
        {`${header}: `}
        <Textfield
          onChange={(e) => { setFilter({ [`${name}-min`]: e.target.value }) }}
          pattern="-?[0-9]*(\.[0-9]+)?"
          error="Input is not a number!"
          label="From"
          style={{ width: '50px' }}
        />
        {' - '}
        <Textfield
          onChange={(e) => { setFilter({ [`${name}-max`]: e.target.value }) }}
          pattern="-?[0-9]*(\.[0-9]+)?"
          error="Input is not a number!"
          label="To"
          style={{ width: '50px' }}
        />
      </div> : null
  ))
);

const FirstPage = (props) => (
  props.list ?
      <div>
        <DataTable
          rows={filter(props.list, props.filters)}
        >
          <TableHeader name="dt" cellFormatter={dt => formatDate(new Date(dt * 1e3))}>Date</TableHeader>
          <TableHeader numeric name="pressure">Pressure, hPa</TableHeader>
          <TableHeader numeric name="humidity">Humidity, %</TableHeader>
          <TableHeader numeric name="speed">Wind speed, meter/sec</TableHeader>
          <TableHeader numeric name="clouds">Cloudiness, %</TableHeader>
        </DataTable>
        {getFilters({ setFilter: props.setFilter })}
      </div>
    : <div>I'm first page</div>
);

export default connect(
  state => ({ list: state.list, filters: state.filters }),
  { setFilter: setFilter }
)(FirstPage);
