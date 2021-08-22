import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, id, type, value, onChange }) {
  return (
    <label htmlFor={ id }>
      <span>{ label }</span>
      <input
        data-testid={ id }
        type={ type }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
