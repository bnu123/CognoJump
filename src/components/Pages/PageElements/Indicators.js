import React from 'react'
import '../../../css/indicator.css'

const Indicators = (
               {speed_value, 
                error_count,
                gain,
                keyVal} 
            ) => {
    return (
        <div className="container">
           <div className="row">
                <div className="col-md-2 ">
                    <span className="indicator-text">Speed :                </span>
                    <span className="indicator-value">{speed_value}</span>
                </div>
                <div className="col-md-2">
                    <span className="indicator-text">Errors : </span>
                    <span className="indicator-value">{error_count}</span>
                </div>
                <div className="col-md-2">
                    <span className="indicator-text">Gain : </span>
                    <span className="indicator-value">{gain}</span>
                </div>
                <div className="col-md-2">
                    <span className="indicator-text">Key : </span>
                    <span className="indicator-value">{keyVal}</span>
                </div>
            
           </div> 
           <hr />
        </div>
    )
}
export default Indicators