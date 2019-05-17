import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import TypeBox from './components/TypeBox';

import './App.css';

import {special_characters, changed_characters, colors} from './utility';

class App extends Component {
    /*
    
    */
    get_text(x){
       // gets the text from server
       //for now x is the argument to get a text with maximum character 'x' on it
       //useful for enhancing your speed on a particular character
       //this function is called 2 times over a cycle, 1st when app loads second
       //when string becomes empty
       return "And who is gonna save you when I am gone";
    }

    state = {
       text : this.get_text(),
       span_text : "",
       //define color for each keykk
       color : colors
    }
   
    get_key = (tes) => {    
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
        var k = this.get_key(raw);

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

        if (x.length === 0){
            this.setState({text : this.get_text()});
            this.setState({span_text : ""});
        }
        //Space handling poor 
        if(x.charAt(0) === raw){
            var str = x.charAt(0);
            this.setState({text : x.substring(1)})
            var span_text = this.state.span_text;
            span_text = span_text + str;
            this.setState({span_text : span_text});
        }
    }

    onkeyUp = (e) => {
        var raw = e.key;
        var k = this.get_key(raw);

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

    /*
     *Renderes Two component
     *Keyboard : which is where the svg resides
     *TypeBox : which is where the user types.
     Keyboard is passed the state's 'color' as property => used by the svg innerFill
     TypeBox is passed the state's 'text' as propery.

     ===========================================
     Whenever a keyDown event is triggered, Following changes in the state
     1. The 'text' if the key pressed is same as the position we are on the text string
     2. The color of that key.

     On KeyUp event, 'color' is reverted back it its previous state

     ====Idea for the game=====================
     Advanced stuff => WRITE YOUR IDEAS !
     */
    return (
    <div className="Outer">
        <header className="Header">
        </header>
        <div className="container" onKeyDown={this.onkeyDown} onKeyUp={this.onkeyUp} tabIndex="0" >
            <TypeBox main_text={this.state.text} span_text={this.state.span_text}/>
            <Keyboard color={this.state.color}/>
        </div>
    </div>
    );
  }
}

export default App;
