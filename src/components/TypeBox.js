import React,{Component} from 'react';
import './layout.css'
class TypeBox extends Component{
    change_text(str){
        var replaced = str.replace(/\s/g,'_');
        return replaced;
    }
    render(){
        var style = {
            color : 'red'
        };
        return(
        <div className="textBox">
            <div className="box1">
                <p >
                    <span style={style}>{this.change_text(this.props.span_text)}
                    </span>
                    {this.change_text(this.props.main_text)}
                </p>
            </div>
        </div>
        );
    }
}
export default TypeBox