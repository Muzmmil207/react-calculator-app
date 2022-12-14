import React from 'react';


function Numbers ({result}) {
    

    return(
        <div className="row">
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        1
                    </h5>
                </div>
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        2
                    </h5>
                </div>
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        3
                    </h5>
                </div>
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        4
                    </h5>
                </div>
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        5
                    </h5>
                </div>
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        6
                    </h5>
                </div>
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        7
                    </h5>
                </div>
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        8
                    </h5>
                </div>
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        9
                    </h5>
                </div>
                <div className="card col-4">
                    <h5 className="card-body text-center value">
                        0
                    </h5>
                </div>
                <div className="card col-sm-8 bg-success">
                    <h5 onClick={result} className="card-body text-center">
                        =
                    </h5>
                </div>
        </div>
    )

}

export default Numbers;
    