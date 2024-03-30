import React, { useState } from 'react';
import './Calculator.css'; // Importe o arquivo CSS para aplicar estilos

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  const updateDisplay = (value) => {
    setDisplayValue(displayValue + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  return (
    <div className="calculator">
      <h1>Minha calculadora</h1>
      <input type="text" value={displayValue} readOnly />
      <div>
        <button className="button" onClick={() => updateDisplay('1')}>1</button>
        <button className="button" onClick={() => updateDisplay('2')}>2</button>
        <button className="button" onClick={() => updateDisplay('3')}>3</button>
        <button className="button operator" onClick={() => updateDisplay('+')}>+</button>
      </div>
      <div>
        <button className="button" onClick={() => updateDisplay('4')}>4</button>
        <button className="button" onClick={() => updateDisplay('5')}>5</button>
        <button className="button" onClick={() => updateDisplay('6')}>6</button>
        <button className="button operator" onClick={() => updateDisplay('-')}>-</button>
      </div>
      <div>
        <button className="button" onClick={() => updateDisplay('7')}>7</button>
        <button className="button" onClick={() => updateDisplay('8')}>8</button>
        <button className="button" onClick={() => updateDisplay('9')}>9</button>
        <button className="button operator" onClick={() => updateDisplay('*')}>*</button>
      </div>
      <div>
        <button className="button" onClick={() => updateDisplay('0')}>0</button>
        <button className="button clear" onClick={() => clearDisplay()}>C</button>
        <button className="button equals" onClick={() => calculateResult()}>=</button>
        <button className="button operator" onClick={() => updateDisplay('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
