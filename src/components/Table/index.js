import React, { useContext } from 'react';
import Context from '../../context/Context';

function Table() {
  const { dataPlanets, filters } = useContext(Context);
  const { filterByName: { name } } = filters;
  const { filterByNumericValues: { column, comparison, value } } = filters;

  let headers = [];
  if (dataPlanets.length) {
    headers = Object.keys(dataPlanets[0]).filter((header) => header !== 'residents');
  }

  const renderTableHeader = () => (
    <thead>
      <tr>
        {
          headers.map((header, index) => <th key={ index }>{ header }</th>)
        }
      </tr>
    </thead>
  );

  const appliedFilters = () => {
    let filter = [...dataPlanets];

    // filtro por nome
    filter = dataPlanets.filter((planet) => (
      planet.name.toLowerCase().includes(name.toLowerCase())));

    // filtro por seletores (coluna, comparação, valor)
    switch (comparison) {
    case 'maior que':
      filter = filter.filter((planet) => (
        planet[column] > +value
      ));
      break;
    case 'igual a':
      filter = filter.filter((planet) => (
        planet[column] === value
      ));
      break;
    case 'menor que':
      filter = filter.filter((planet) => (
        planet[column] < +value
      ));
      break;
    default:
      return filter;
    }
    return filter;
  };

  const renderTableBody = () => (
    <tbody>
      {
        appliedFilters().map((planet) => (
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
  );

  if (!headers) return <h2>Loading</h2>;

  return (
    <table>
      { renderTableHeader() }
      { renderTableBody() }
    </table>
  );
}

export default Table;

// refatoração do requisito 2 com base no PR de Thalles Carneiro: https://github.com/tryber/sd-012-project-starwars-planets-search/pull/107/commits/bd26d9a587b7d64bb06e640d93e6d4cac3b28d1e
