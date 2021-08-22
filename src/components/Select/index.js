import React from 'react';
import PropTypes from 'prop-types';

function Select({ label, id, value, options, onChange }) {
  return (
    <label htmlFor={ id }>
      <span>{ label }</span>
      <select data-testid={ id } value={ value } onChange={ onChange }>
        {
          options.map((option, index) => (
            <option key={ index }>{ option }</option>
          ))
        }
      </select>
    </label>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ),
  onChange: PropTypes.func,
}.isRequired;

export default Select;
