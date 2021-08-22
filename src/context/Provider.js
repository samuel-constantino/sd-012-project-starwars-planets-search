import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchApi from '../services/fetchApi';

const Provider = ({ children }) => {
  const [dataPlanets, setDataPlanets] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      },
    ],
  });

  const [applyFilters, setApplyFilters] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await fetchApi();
      setDataPlanets(planets);
    };
    fetchPlanets();
  }, []);

  const defaultValue = {
    dataPlanets,
    filters,
    setFilters,
    applyFilters,
    setApplyFilters,
  };

  return (
    <Context.Provider value={ defaultValue }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
