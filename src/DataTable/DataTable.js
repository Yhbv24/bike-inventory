import React from 'react';
import { DataList } from '../DataList/DataList';

export const DataTable = props => (
  <table className="table table-striped table-sm table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Serial</th>
        <th>Manufacturer Name</th>
        <th>Stolen From</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {props.list.map((item, i) => (
          <DataList
            key={item.id}
            givenID={item.id}
            id={i}
            name={item.title}
            serial={item.serial}
            manufacturerName={item.manufacturer_name}
            stolenLocation={item.stolen_location}
            delete={props.delete}
          />
        )
      )}
    </tbody>
  </table>
);