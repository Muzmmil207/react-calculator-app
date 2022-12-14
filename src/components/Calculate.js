import React  from 'react';

function CalculatorInput ({setInputValue, inputValue}){
    const inputValueHandler = (e)=>{
        setInputValue(e.target.value);
    }

    return(
        <div className="card  center-block">
            <input onChange={inputValueHandler} value={inputValue} type="text" className="form-control"/>
        </div>
    );
    
}
export default CalculatorInput;
