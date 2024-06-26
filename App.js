import { useEffect, useState } from 'react';
import './App.css';
import { countries } from './countries';

export function App({ selectedCountry, setSelectedCountry }) {
  let i = 0;

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> COVID 19 DASHBOARD </h1>
        <div className='div1' key={i++}>
          <select onChange={handleChange}>
            {countries.map((e) => {
              return <option key={i++}>{e['Country/Region']}</option>;
            })}
          </select>
        </div>
      </header>
    </div>
  );
}

export default App;
