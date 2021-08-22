import React, { useContext } from 'react';
import Context from '../../context/Context';
import Select from '../Select';
import Input from '../Input';
import Button from '../Button';

function FilterForm() {
  const { filters, setFilters } = useContext(Context);
  const { filterByName: { name } } = filters;
  const { filterByNumericValues: { column = '', comparison = '', value = '' } } = filters;

  const handleChangeName = ({ target: { value: v } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: v,
      },
    });
  };

  const handleChangeColumn = ({ target: { value: v } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        column: v,
        comparison,
        value,
      },
    });
  };

  const handleChangeComparison = ({ target: { value: v } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        column,
        comparison: v,
        value,
      },
    });
  };

  const handleChangeValue = ({ target: { value: v } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        column,
        comparison,
        value: v,
      },
    });
  };

  const renderFilterByName = () => (
    <Input
      label="Nome: "
      id="name-filter"
      type="text"
      value={ name }
      onChange={ handleChangeName }
    />
  );

  const renderFilterByColumn = () => {
    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    return (
      <Select
        label="Coluna: "
        id="column-filter"
        value={ column }
        options={ options }
        onChange={ handleChangeColumn }
      />
    );
  };

  const renderFilterByComparison = () => {
    const options = [
      'maior que', 'menor que', 'igual a'];

    return (
      <Select
        label="Comparação: "
        id="comparison-filter"
        value={ comparison }
        options={ options }
        onChange={ handleChangeComparison }
      />
    );
  };

  const renderFilterByValue = () => (
    <Input
      label="Valor: "
      id="value-filter"
      type="number"
      value={ value }
      onChange={ handleChangeValue }
    />
  );

  const renderFilterButton = () => (
    <Button
      label="Aplicar"
      id="button-filter"
      onClick={ () => {} }
    />
  );

  return (
    <form>
      { renderFilterByName() }
      { renderFilterByColumn() }
      { renderFilterByComparison() }
      { renderFilterByValue() }
      { renderFilterButton() }
    </form>
  );
}

export default FilterForm;
