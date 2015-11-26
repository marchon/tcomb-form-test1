import React from "react";

// import "./../styles/style.css";
// import "./../styles/bootstrap.css";
// import "react-datagrid/index.css";
require('./../styles/datagrid.css')
var DataGrid = require('react-datagrid');

var data = [
  { id: '1', firstName: 'John', lastName: 'Bobson'},
  { id: '2', firstName: 'Bob', lastName: 'Mclaren'}
]
var columns = [
  { name: 'firstName'},
  { name: 'lastName'}
]

class DataGrid1 extends React.Component {

  render() {
    return (
      <div>
        <DataGrid idProperty="id" dataSource={data} columns={columns} />
      </div>
    );
  }

}

export default DataGrid1;