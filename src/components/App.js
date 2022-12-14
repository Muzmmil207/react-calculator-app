import CalculatorInput from './Calculate'
import Numbers from './Numbers'
import Marks from './Marks'
import React , {useEffect, useState } from 'react';


function App(){
  const [inputValue, setInputValue] = useState('');
  const [calculation, setCalculation] = useState({});
  
  // Functions
  const handleClick = (event) =>{
    setInputValue(inputValue + event.target.textContent);
  }
  const result = (e) =>{
    let value1 = parseInt(calculation.value)
    let value2 = parseInt(inputValue)

    switch(calculation.mark){
      case '+':
        var newValue = value1 + value2
        break
      case '-':
        var newValue = value1 - value2
        break
      case 'x':
        var newValue = value1 * value2
        break
      case '/':
        var newValue = value1 / value2
        break
    }
    
    setCalculation({
      value: newValue,
      mark: calculation.mark,
    });
    setInputValue(newValue);  
  }

  // Use Effects
  useEffect(()=>{
    const elements = document.querySelectorAll('.value');
    elements.forEach((e)=>{
      e.addEventListener('click', handleClick);
    });
  }, [inputValue]);
  
  return (
    <div className="App card bg-info container" style={{height: '100vh'}}>
      <br></br>
      <CalculatorInput 
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <br></br>
      <div className='row'>
     <div className="col-6">
          <Numbers
            result={result}
          />
        </div>
        <div className="col-6">
          <Marks
            calculation={calculation}
            setCalculation={setCalculation}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
      </div>
    </div>
  );
  
}

export default App;