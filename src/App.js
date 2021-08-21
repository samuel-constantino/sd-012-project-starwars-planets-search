import React from 'react';
import Provider from './context/Provider';
import './App.css';
import Table from './components/Table';
import FilterForm from './components/FilterForm';

function App() {
  return (
    <Provider>
      <FilterForm />
      <Table />
    </Provider>
  );
}

export default App;
