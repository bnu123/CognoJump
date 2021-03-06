export const colors = { 
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
};

export const special_characters = {
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
};

export const changed_characters = {
    'Control' : 'ControlLeft',
    'Alt' : 'AltLeft',
    'Shift': 'ShiftLeft'
};

export const get_key = (tes) => {    
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