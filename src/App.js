import React from 'react';
import Transactions from './components/Transactions';
import './App.css'
// import Statistics from './components/Statistics';
// import BarChart from './components/BarChart';

const App = () => {
  return (
    <div className='app-container'>
      {/* Render components */}
      <Transactions />
      {/* <Statistics />
      <BarChart /> */}
    </div>
  );
};

export default App;
