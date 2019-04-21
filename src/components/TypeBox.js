import React,{Component} from 'react';
import './layout.css'
class TypeBox extends Component{
    render(){
        return(
            <div>
                <div className="TextAreaDiv">
                <input type="text" placeholder={this.props.text} />
                </div>
            </div>
            
        );
    }
}
export default TypeBox