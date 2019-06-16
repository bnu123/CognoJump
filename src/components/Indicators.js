import React from 'react'
import '../css/indicator.css'

const Indicators = (
                {speed_value = 10,
                error_value = 20 ,
                error_frequency_key = 'Q',
                }
            ) => {
    return (
        <div className="container">
           <div className="row">
                <div className="col-2 text-center">
                    <span className="indicator-text">Speed :                </span>
                    <span className="indicator-value">{speed_value}</span>
                </div>
                <div className="col-2">
                    <span className="indicator-text">Errors : </span>
                    <span className="indicator-value">{error_value}</span>
                </div>
                <div className="col-2">
                    <span className="indicator-text">Gain : </span>
                    <span className="indicator-value">{error_frequency_key}</span>
                </div>
                <div className="col-4 text-right" >
                   <button className="btn btn-primary"type="button">Advance Settings</button> 
                </div>
            
           </div> 
           <hr />
        </div>
    )
}
export default Indicators