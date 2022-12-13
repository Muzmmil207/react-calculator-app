import React from 'react';
import ReactDOM from 'react-dom/client';

class Marks extends React.Component {
    render(){
        return(
            <div className="row">
                    <div className="card col-12 bg-primary" >
                        <div className="card-body text-center">
                            <h5 className="card-text">+</h5>
                        </div>
                    </div>
                    <div className="card col-12 bg-primary" >
                        <div className="card-body text-center">
                            <h5 className="card-text">-</h5>
                        </div>
                    </div>
                    <div className="card col-12 bg-primary" >
                        <div className="card-body text-center">
                            <h5 className="card-text">x</h5>
                        </div>
                    </div>
                    <div className="card col-12 bg-primary" >
                        <div className="card-body text-center">
                            <h5 className="card-text">/</h5>
                        </div>
                    </div>
            </div>
        );
    };
}
export default Marks;
