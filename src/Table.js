import React from "react";
import Head from "./Head/Head";
import "./Table.css";

class Table extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td align="center">
              <Head />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
