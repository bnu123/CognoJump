import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import TypeBox from './components/TypeBox';

import './App.css';


class App extends Component {
    /*
    
    */
    get_text(x){
        // gets the text from server
        //for now x is the argument to get a text with maximum character 'x' on it
        //useful for enhancing your speed on a particular character
        //this function is called 2 times over a cycle, 1st when app loads second
        //when string becomes empty
        return "Lorem aisd fasd fasd fasidf asdf adsfiasidf idnf df dif dif ifidsa fi asdfiasfiasdf asdifasdf ";
    }
    state = {
        text : this.get_text(), //This actually gets the title from the backend
        color : {   //Idea is that, whenever key is pressed, the color state of key should be changed.
                    //Makes it easy.

            //In code refactoring, make this a variable outside, so that it doesn't get cluttered here.
            Backquote : "#2f2f2f",
            Digit1 : "#2f2f2f",
            Digit2 : "#2f2f2f",
            Digit3 : "#2f2f2f",
            Digit4 : "#2f2f2f",
            Digit5 : "#2f2f2f",
            Digit6 : "#2f2f2f",
            Digit7 : "#2f2f2f",
            Digit8 : "#2f2f2f",
            Digit9 : "#2f2f2f",
            Digit0 : "#2f2f2f",
            Minus  : "#2f2f2f",
            Equal : "#2f2f2f",
            Backspace : "#2f2f2f",
            Tab : "#2f2f2f",
            KeyQ : "#2f2f2f",
            KeyW : "#2f2f2f",
            KeyE : "#2f2f2f",
            KeyR : "#2f2f2f",
            KeyT : "#2f2f2f",
            KeyY : "#2f2f2f",
            KeyU : "#2f2f2f",
            KeyI : "#2f2f2f",
            KeyO : "#2f2f2f",
            KeyP : "#2f2f2f",
            BracketLeft : "#2f2f2f",
            BracketRight : "#2f2f2f",
            Backslash : "#2f2f2f",
            CapsLock : "#2f2f2f",
            KeyA : "#2f2f2f",
            KeyS : "#2f2f2f",
            KeyD : "#2f2f2f",
            KeyF : "#2f2f2f",
            KeyG : "#2f2f2f",
            KeyH : "#2f2f2f",
            KeyJ : "#2f2f2f",
            KeyK : "#2f2f2f",
            KeyL : "#2f2f2f",
            Semicolon : "#2f2f2f",
            Quotes : "#2f2f2f",
            Enter : "#2f2f2f",
            ShiftLeft : "#2f2f2f",
            KeyZ : "#2f2f2f",
            KeyX : "#2f2f2f",
            KeyC : "#2f2f2f",
            KeyV : "#2f2f2f",
            KeyB : "#2f2f2f",
            KeyN : "#2f2f2f",
            KeyM : "#2f2f2f",
            Comma : "#2f2f2f",
            Period : "#2f2f2f",
            Slash : "#2f2f2f",
            ShiftRight : "#2f2f2f",
            ControlLeft : "#2f2f2f",
            AltLeft : "#2f2f2f",
            SpaceBar : "#2f2f2f",
            AltRight : "#2f2f2f",
            ControlRight : "#2f2f2f"
        }
    }
    special_characters = {
        ';' : 'Semicolon',
        ' ' : 'SpaceBar',
        '`' : 'Backquote',
        '-' : 'Minus',
        '=' : 'Equal',
        '/' : 'Slash',
        '\'': 'Quotes',
        ',' : 'Comma',
        '.' : 'Period',
        '\\' : 'Backslash',
        '[' : 'BracketLeft',
        ']' : 'BracketRight',

    }
    changed_characters = {
        'Control' : 'ControlLeft',
        'Alt' : 'AltLeft',
        'Shift': 'ShiftLeft'
    }

    get_key = (tes) => {
            
        //check if special character
        var parsed_key = parseInt(tes);
        var key = tes;
        if (tes in this.special_characters){
            key = this.special_characters[tes];
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
        else{
            if (key in this.changed_characters){
                key = this.changed_characters[key];
            }
            else
                key = tes;
        }


    
    //key is like 'Tab','Shift'
    
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
        console.log(raw);
        
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
        }
        if(x.charAt(0) === raw){
            var str = x.substring(1);
            this.setState({text : str})
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

     On KeyUp event, 'color' is reverted back it its previous state :D

     ====Idea for the game=====================
     Advanced stuff => WRITE YOUR IDEAS !
     */
    return (
    <div>
        <header className="Header">
        
        </header>
        <div className="container" onKeyDown={this.onkeyDown} onKeyUp={this.onkeyUp} tabIndex="0">
            <TypeBox text={this.state.text} />
            <Keyboard color={this.state.color}/>
        </div>
    </div>
    
    
    
    
    );
  }
}

export default App;
