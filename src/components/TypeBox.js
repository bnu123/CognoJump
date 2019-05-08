import React,{Component} from 'react';
import './layout.css'
class TypeBox extends Component{
    change_text(){
        var x  = this.props.text;
        var replaced = x.replace(/\s/g,'_');
        return replaced;
    }
    render(){
        return(
        <div className="textBox">
            <div className="box1">
                
                <p >{this.change_text()}</p>
            </div>
        </div>
        );
    }
}
export default TypeBox