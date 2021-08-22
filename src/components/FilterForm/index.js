import React, { useState, useContext } from 'react';
import Context from '../../context/Context';
import Select from '../Select';
import Input from '../Input';
import Button from '../Button';

function FilterForm() {
  const [numericFilterComponent, setNumericFilterComponent] = useState({
    columnComponent: 'population',
    comparisonComponent: 'maior que',
    valueComponent: 0,
  });
  const { filters, setFilters } = useContext(Context);
  const { filterByName: { name } } = filters;

  const handleChangeName = ({ target: { value: v } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: v,
      },
    });
  };

  const handleChangeColumn = ({ target: { value: v } }) => {
    setNumericFilterComponent({
      ...numericFilterComponent,
      columnComponent: v,
    });
  };

  const handleChangeComparison = ({ target: { value: v } }) => {
    setNumericFilterComponent({
      ...numericFilterComponent,
      comparisonComponent: v,
    });
  };

  const handleChangeValue = ({ target: { value: v } }) => {
    setNumericFilterComponent({
      ...numericFilterComponent,
      valueComponent: v,
    });
  };

  const handleClick = () => {
    const {
      columnComponent,
      comparisonComponent,
      valueComponent } = numericFilterComponent;
    setFilters({
      ...filters,
      filterByNumericValues: {
        column: columnComponent,
        comparison: comparisonComponent,
        value: valueComponent,
      },
    });
    // setApplyFilters(true);
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
    const { columnComponent } = numericFilterComponent;

    const options = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

    return (
      <Select
        label="Coluna: "
        id="column-filter"
        value={ columnComponent }
        options={ options }
        onChange={ handleChangeColumn }
      />
    );
  };

  const renderFilterByComparison = () => {
    const { comparisonComponent } = numericFilterComponent;

    const options = [
      'maior que', 'menor que', 'igual a'];

    return (
      <Select
        label="Comparação: "
        id="comparison-filter"
        value={ comparisonComponent }
        options={ options }
        onChange={ handleChangeComparison }
      />
    );
  };

  const renderFilterByValue = () => {
    const { valueComponent } = numericFilterComponent;

    return (
      <Input
        label="Valor: "
        id="value-filter"
        type="number"
        value={ valueComponent }
        onChange={ handleChangeValue }
      />
    );
  };

  const renderFilterButton = () => (
    <Button
      label="Aplicar"
      id="button-filter"
      onClick={ handleClick }
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
