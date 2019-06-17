import React,{Component} from 'react';
import '../../../css/layout.css'

class TypeBox extends Component{
    change_text(str){
        if (str.length === 0) return ;
        var replaced = str.replace(/\s/g,'_');
        return replaced;
    }
    render(){
        var style = {
            color : "grey",
        };

    
        return(
        <div className="container">
            <div clasName="row ">
                    <p className="text-center">
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