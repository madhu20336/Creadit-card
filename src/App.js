import React from 'react'
import './App.css';
import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
// The function createDefaultMaskGenerator that always return a static string mask.


const mask = "9999 9999 9999 9999";
const maskGenerator = createDefaultMaskGenerator(mask);

function App() {
  const [value, setvalue] = React.useState("");


  return (
    <>
      <h1>Credit card:</h1>
      <MaskedInput
        // MaskedInput takes an object as its parameter and returns an onChange function 
        className='input-number'
        maskGenerator={maskGenerator}
        value={value}
        onChange={setvalue}
      />
      <h2>value : {value}</h2>
    </>
  );
}

export default App;
