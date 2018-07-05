import React, { Component } from 'react';
import Columns from './Columns'
class Table extends Component {
    render() {
      return (
        <table>
        <tbody>
          <tr>
          <Columns />
          </tr>
          </tbody>
        </table>
      );
    }
  }
  
  export default Table