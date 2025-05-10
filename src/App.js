import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [max, setMax] = useState(0);
  const dice = [
    {value: 4, label: 'D3'},
    {value: 5, label: 'D4'},
    {value: 6, label: 'D5'},
    {value: 7, label: 'D6'},
    {value: 8, label: 'D7'},
    {value: 9, label: 'D8'},
    {value: 11, label: 'D10'},
    {value: 21, label: 'D20'},
  ]

  const generateNumber = () => {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(max);
    setNumber(Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled));
  };

  return (
    <div className="container">
      <h1>Würfel</h1>
      <div className="input-group">
        <select options={dice} onChange={(e) => setMax(e.target.value)}>
          {dice.map((dice) => (
            <option key={dice.value} value={dice.value}>
              {dice.label}
            </option>
          ))}
        </select>
        <button onClick={() => generateNumber()} style={{marginLeft: '10px' }}>Roll</button>
      </div>
      <h2>Your Number is: {number}</h2>
    </div>
  );
}

export default App