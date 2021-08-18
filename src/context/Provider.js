import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchApi from '../services/fetchApi';

const Provider = ({ children }) => {
  const [dataPlanets, setDataPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const planets = await fetchApi();
      setDataPlanets(planets);
    };
    fetchPlanets();
  }, []);

  const defaultValue = {
    dataPlanets,
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
