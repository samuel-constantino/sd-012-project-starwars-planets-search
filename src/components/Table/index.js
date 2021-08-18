import React, { useContext } from 'react';
import Context from '../../context/Context';

function Table() {
  const { dataPlanets } = useContext(Context);

  if (!dataPlanets.length) return <h2>Loading</h2>;

  const headers = Object.keys(dataPlanets[0]).filter((planet) => planet !== 'residents');
  return (
    <table>
      <thead>
        <tr>
          {
            headers.map((header, index) => <th key={ index }>{ header }</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          dataPlanets.map((planet) => (
            <tr key={ planet.name }>
              {
                headers.map((header) => (
                  <td key={ planet[header] }>
                    { planet[header] }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
