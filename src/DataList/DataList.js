import React from 'react';

export const DataList = props => (
      <tr>
        <td>{props.givenID}</td>
        <td>{props.name}</td>
        <td>{props.serial === 'absent' ? 'No serial provided' : props.serial}</td>
        <td>{props.manufacturerName}</td>
        <td>{props.stolenLocation.split(',').join(', ')}</td>
        <td><button type="button" className="btn btn-sm btn-danger" onClick={props.delete.bind(this, props.id)}>Delete</button></td>
      </tr>
  );