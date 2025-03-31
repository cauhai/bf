import React, { useState, useEffect } from 'react';
import duck from '/duck.svg'
import './App.css'

const App = () => {
  const [ data, setData ] = useState();
  useEffect(() => {
    fetch('http://localhost:3000/api/artists')
      .then(res => res.json())
      .then((data) => setData(data));
  }, []);
  if (!data) {
    return <h2>Please wait...</h2>
  }
  return (
    <>
      <img src={duck} height="60" />
      <span>B&F backend and frontend in one codebase</span>
      <h1>All artists</h1>
      {JSON.stringify(data)}
    </>
  );
}

export default App
