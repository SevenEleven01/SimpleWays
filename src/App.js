import React from 'react';
import './App.css';
import Sign from './pages/sign/sign';
import Reg from './pages/reg/reg';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="wrapper">
      {/* <Sign /> */}
      <Reg />
    </div>
  );
}



export default App;
