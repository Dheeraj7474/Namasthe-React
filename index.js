import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { Body } from './Body';
import { countries } from './countries';

const Root = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    if (selectedCountry) {
      const country = countries.find(country => country['Country/Region'] === selectedCountry);
      console.log("Country is: ",country)
      setCountryData(country)
    }
    else{
      const country = countries.find(country => country['Country/Region'] === "Afghanistan")
      setCountryData(country)
    }
  }, [selectedCountry]);
  console.log("countryData is : ",countryData)
  return (
    <React.StrictMode>
      <App selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
      <div className='div'>
        <Body heading="Total Cases" number={countryData["Confirmed"]} color="brown" />
        <Body heading="Total Recovered" number={countryData["Recovered"]} color="green" />
        <Body heading="Total Active" number={countryData["Active"]} color="grey" />
        <Body heading="Total Deaths" number={countryData["Deaths"]} color="cyan" />
      </div>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
