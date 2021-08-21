import React, { useContext } from 'react';
import Context from '../../context/Context';

function FilterForm() {
  const { filters, setFilters } = useContext(Context);
  const { filterByName: { name } } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const renderFilterByName = () => (
    <label htmlFor="name-filter">
      <span>Nome: </span>
      <input
        data-testid="name-filter"
        type="text"
        value={ name }
        onChange={ handleChange }
      />
    </label>
  );

  return (
    renderFilterByName()
  );
}

export default FilterForm;
