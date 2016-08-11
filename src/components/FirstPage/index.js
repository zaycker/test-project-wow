import React from 'react';

export default (props) => (
  props.data.list ? <table>
    {props.data.list.organizations.map(org => <tr><td></td><td></td></tr>)}
  </table> : <div>I'm first page</div>
);
