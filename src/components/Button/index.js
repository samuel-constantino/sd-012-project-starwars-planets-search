import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, id, onClick }) {
  return (
    <button
      data-testid={ id }
      type="button"
      onClick={ onClick }
    >
      { label }
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
