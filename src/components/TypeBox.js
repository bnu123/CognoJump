import React,{Component} from 'react';
import './layout.css'
class TypeBox extends Component{
    render(){
        return(
        <div className="textBox">
            <div className="box1">
                <p >{this.props.text}</p>
            </div>
        </div>
        );
    }
}
export default TypeBox