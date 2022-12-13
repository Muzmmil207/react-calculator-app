import React , {useEffect, useRef } from 'react';


function Numbers () {
    
        const ref = useRef(null)
        useEffect(()=>{
            const e = ref.current

        })

        return(
            <div className="row">
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">1</h5>
                        </h5>
                    </div>
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">2</h5>
                        </h5>
                    </div>
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">3</h5>
                        </h5>
                    </div>
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">4</h5>
                        </h5>
                    </div>
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">5</h5>
                        </h5>
                    </div>
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">6</h5>
                        </h5>
                    </div>
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">7</h5>
                        </h5>
                    </div>
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">8</h5>
                        </h5>
                    </div>
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">9</h5>
                        </h5>
                    </div>
                    <div className="card col-4">
                        <h5 className="card-body text-center value">
                            <h5 className="card-text value">0</h5>
                        </h5>
                    </div>
                    <div className="card col-sm-8 bg-success">
                        <div ref={ref} className="card-body text-center">
                            <h5 className="card-text">=</h5>   
                        </div>
                    </div>
            </div>
        )
    
}

export default Numbers;
    