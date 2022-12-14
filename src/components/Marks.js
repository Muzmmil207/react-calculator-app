import React from 'react';


function Marks ({calculation, setCalculation, inputValue, setInputValue}) {
    const handleClick = (event) =>{
        if(calculation.value === undefined){
            setCalculation({
                value: inputValue,
                mark: event.target.textContent,
            });
        
    } else {
            let value1 = parseInt(calculation.value)
            let value2 = parseInt(inputValue)

            switch(calculation.mark){
                case '+':
                    var newValue = value1 + value2
                    console.log(newValue)
                    break
                case '-':
                    var newValue = value1 - value2
                    console.log(newValue)
                    break
                case 'x':
                    var newValue = value1 * value2
                    console.log(newValue)
                    break
                case '/':
                    var newValue = value1 / value2
                    console.log(newValue)
                    break
            }
            setCalculation({
                value: newValue,
                mark: event.target.textContent,
            });
        }
        setInputValue('');
        console.log(calculation)
    }

    return(
        <div className="row">
            <div className="card col-12 bg-primary" >
                <h5 onClick={handleClick} className="card-body text-center">
                    +
                </h5>
            </div>
            <div className="card col-12 bg-primary" >
                <h5 onClick={handleClick} className="card-body text-center">
                    -
                </h5>
            </div>
            <div className="card col-12 bg-primary" >
                <h5 onClick={handleClick} className="card-body text-center">
                    x
                </h5>
            </div>
            <div className="card col-12 bg-primary" >
                <h5 onClick={handleClick} className="card-body text-center">
                    /
                </h5>
            </div>
        </div>
    );

}
export default Marks;
