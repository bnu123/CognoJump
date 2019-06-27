import React from 'react'
import '../../../css/indicator.css'

const Indicators = (
               props 
            ) => {
    return (
        <div className="container">
           <div className="row">
                <div className="col-md-2 ">
                    <span className="indicator-text">Speed :                </span>
                    <span className="indicator-value">{props.speed_value}</span>
                </div>
                <div className="col-md-2">
                    <span className="indicator-text">Errors : </span>
                    <span className="indicator-value">{props.error_count}</span>
                </div>
                <div className="col-md-2">
                    <span className="indicator-text">Gain : </span>
                    <span className="indicator-value">{props.gain}</span>
                </div>
                <div className="col-md-4 text-right" >
                   <button className="btn btn-primary"type="button">Advance Settings</button> 
                </div>
            
           </div> 
           <hr />
        </div>
    )
}
export default Indicators