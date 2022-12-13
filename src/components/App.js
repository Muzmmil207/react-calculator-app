import CalculatorInput from './Calculate'
import Numbers from './Numbers'
import Marks from './Marks'
import React , {useEffect, useState } from 'react';


function App(){
  const [inputValue, setInputValue] = useState('');

  const handleClick = (event) =>{
    setInputValue(inputValue+event.target.textContent);
    console.log( event.target.textContent);
  }

  useEffect(()=>{
    const elements = document.querySelectorAll('.value');
    elements.forEach((e)=>{
      e.addEventListener('click', handleClick);
    });

    return () => {
      elements.forEach((e)=>{
        e.removeEventListener('click', handleClick);
      });
    }
  });
  
  return (
    <div className="App card bg-info container" style={{height: '100vh'}}>
      <br></br>
      <CalculatorInput inputValue={inputValue} setInputValue={setInputValue} />
      <br></br>
      <div className='row'>
        <div className="col-6">
          <Numbers />
        </div>
        <div className="col-6">
          <Marks />
        </div>
      </div>
    </div>
  );
  
}

export default App;