import React, { Component } from 'react';
import Keyboard from './PageElements/Keyboard';
import TypeBox from './PageElements/TypeBox';

import '../../css/SpeedPage.css';

import {special_characters, changed_characters, colors} from '../../utility';
import Indicators from './PageElements/Indicators';

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

    state = {
       text : this.get_text(),
       span_text : "",
       
       //define color for each keykk
       color : colors,
       textLength : this.get_text().length,

    }

    get_text(char){
        // text from server
       return "He, who had seen the glory in death, curse in life and loneliness around people shall achieve greatness in life";
    }


    onkeyDown = (e) => {
        /*
        Initial Thoughts : 
                convert the  key into say
                when 'e' is pressed, it should become KeyE
                when Ctrl is pressed, it should become .
                
        Then Found Out : https://javascript.info/keyboard-events#summary
                There is 'code' which displays the key position, so now no
                need to convert it. 
    
        Then Again found out : e.code does not work, it gives undefined as return
        */
        e.preventDefault();
        var raw = e.key;
        var k = get_key(raw);

        if (k in this.state.color){
            this.setState(prevState => (
                {
                    color : {
                        ...prevState.color,
                        [k] : '#aaa'
                    }
                }
            ))
        }

        var x = this.state.text;

        if(this.state.textLength === 1 && x.charAt(0) === raw){
            this.setState((prevState)=>({
                        ...prevState,
                        text : this.get_text(),
                        span_text : "",
                        textLength : this.get_text().length,
            }
            ));
            return ; 
        }

        
        if(x.charAt(0) === raw){
            var str = x.charAt(0);
            var span_text = this.state.span_text;
            span_text = span_text + str;
            let length = this.state.textLength - 1;

            this.setState((prevState)=>({
                ...prevState,
                text : x.substring(1),
                span_text : span_text,
                textLength : length, 

            }));
            return ;
        }

       
    }

    onkeyUp = (e) => {
        var raw = e.key;
        var k = get_key(raw);

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
    
    <div>
        <header className="Header">
        </header>
        <div  onKeyDown={this.onkeyDown} onKeyUp={this.onkeyUp} tabIndex="0" >
            <Indicators />
            <TypeBox main_text={this.state.text} span_text={this.state.span_text} />
            <Keyboard color={this.state.color}/>
            
        </div>
    </div>
   
    );
  }
}

export default SpeedPage;
