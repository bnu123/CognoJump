//react imports 
import React, { Component } from 'react';

//components import 
import Keyboard from './PageElements/Keyboard';
import TypeBox from './PageElements/TypeBox';
import {special_characters, changed_characters, colors} from '../../utility';
import Indicators from './PageElements/Indicators';
import Navbar from './PageElements/Navbar';

import '../../css/SpeedPage.css';

const get_key = (tes) => {    
    //check if special character
    var parsed_key = parseInt(tes);
    var key = tes;

    if (tes in special_characters){
        key = special_characters[tes];
        return key;
    }

    if (tes.length === 1){
        //check for digit
        if(!isNaN(parsed_key)){
            key = `Digit${tes}`;
        }
        //Normal key pressed
        else{
            //capitalise key e.g. a--> 
            var capital = tes.toUpperCase();
            key = `Key${capital}`;
        }
    }

    else {
        if (key in changed_characters){
            key = changed_characters[key];
        }

        else
            key = tes;
    }

    return key;
}

class SpeedPage extends Component {
    error = 0;
    state = {
       text : this.get_text(),
       span_text : "",
       
       //define color for each keykk
       color : colors,
       textLength : this.get_text().length,
       initialLength : this.get_text().length,
       speed : 0,
       start_time : 0,
       end_time : 0,
       error_count : 0,
    }


    get_text(char){
        // text from server //api callback 
       return "He, who have seen the glory in death, chaos in life and misery in rich shall become god";
    }


    onkeyDown = (e) => {
        e.preventDefault();
        let raw = e.key;
        let k = get_key(raw);
        let current_text = this.state.text;
        let { textLength, initialLength, color} = this.state;
        //first key is clicked
        if(textLength === initialLength){
            this.setState((state)=>({...state,start_time : new Date()})); 
        }
        //Keyboard key color change handler
        if (k in color){
            this.setState(prevState => (
                {
                    color : {
                        ...prevState.color,
                        [k] : '#aaa'
                    }
                }
            ))
        }
        // General cases : change text color only
        if(current_text.charAt(0) === raw && textLength !== 1){
            var str = current_text.charAt(0);
            var span_text = this.state.span_text;
            span_text = span_text + str;
            let l = textLength - 1;

            this.setState((prevState)=>({
                ...prevState,
                text : current_text.substring(1),
                span_text : span_text,
                textLength : l, 
            }));

            return ;
        }
        /*
            Last character handler
            if at last character : do following:
                                    ~ calculate values(speed, errors,etc ).
                                    ~ get new text.
        */
        if(textLength === 1 && current_text.charAt(0) === raw){
            this.setState((prevState)=>({...prevState,end_time : new Date()}), 
                ()=>{
                    let time_elapsed = ((this.state.end_time - this.state.start_time)/1000)/60; //minutest
                    let speed = Math.round(((this.state.initialLength/5)/time_elapsed));

                    this.setState((prevState)=>(
                        {...prevState,
                        speed : speed,
                        text : this.get_text(),
                        span_text : "",
                        textLength : this.get_text().length,
                        error_count : this.error
                    }));
                });
                this.error = 0;
            return ; 
        }

        //key pressed is wrong one
        if(!(k in changed_characters)){
            this.error = this.error + 1;
        }
    }


    onkeyUp = (e) => {
        var raw = e.key;
        var k = get_key(raw);
        //just change key color 
        if (k in this.state.color){
            this.setState(prevState => (
                {
                    color : {
                        ...prevState.color,
                        [k] : "#2f2f2f" 
                    }
                }
            ))
        }
    }
    
  render() {

    return (
        <div className="some-class active">
            <Navbar />
            <header className="Header">
            </header>
            <div  onKeyDown={this.onkeyDown} onKeyUp={this.onkeyUp} tabIndex="0" >
                <Indicators speed_value={this.state.speed} error_count={this.state.error_count}/>
                <TypeBox main_text={this.state.text} span_text={this.state.span_text} />
                <Keyboard color={this.state.color}/>
            </div>
        </div>
    );
  }
}

export default SpeedPage;
