import axios from 'axios';
//react imports 
import React, { Component } from 'react';
//components import 
import Keyboard from './PageElements/Keyboard';
import TypeBox from './PageElements/TypeBox';
import Indicators from './PageElements/Indicators';
import Navbar from './PageElements/Navbar';
//css files
import '../../css/SpeedPage.css';
import { colors, get_key, changed_characters } from '../../utility';



class SpeedPage extends Component {

    error = 0;
    state = {
       text : "", 
       span_text : "",
       initial_text : "",
       //define color for each keykk
       color : colors,
       textLength : 0,
       initialLength : 0,
       speed : 0,
       start_time : 0,
       end_time : 0,
       error_count : 0,
       gain : 0,
       key : "e",
       chrArr : [],
       curr : 0,
    }

    componentDidMount(){
        // text from server //api callback 
    //    return "He, who have seen the glory in death, chaos in life and misery in rich shall become god";
       axios.get('/type-text',{
           params : {
               chr : this.state.key 
           }
       })
       .then(response=>{
           this.setState((state)=>
           ({...state,
            chrArr : response.data.chr,
            curr : response.data.chr.length - 1,
        }));
       }
       )
       .then(()=>{
           this.setState(state=>({
            ...state,
            text: this.state.chrArr[this.state.curr],
            initial_text : this.state.chrArr[this.state.curr],
            textLength : this.state.chrArr[this.state.curr].length,
            initialLength : this.state.chrArr[this.state.curr].length,
            gain : 1
           }));
       });
       
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
                let old_speed = this.state.speed;
                //check if curr position is valid.
                this.setState((prevState)=>({...prevState,
                    end_time : new Date(),
                    curr : this.state.curr - 1, 
                }),
                    (prevState)=>{
                        let time_elapsed = ((this.state.end_time - this.state.start_time)/1000)/60; //minutest
                        let new_speed = Math.round(((this.state.initialLength/5)/time_elapsed));
                        // let old_speed = prevState.speed; 
                        if(this.state.curr === 0){
                            axios.get('/type-text',{
                                params : {
                                    chr : 'a',
                                }
                            })
                            .then(res=>{
                                this.setState(state=>({...state,
                                    chrArr : res.data.chr,
                                    curr : res.data.chr.length - 1
                                }))
                            })
                            .then(()=>{
                                this.setState((prevState)=>(
                                    {...prevState,
                                    speed : new_speed,
                                    text : this.state.chrArr[this.state.curr],
                                    span_text : "",
                                    textLength : this.state.chrArr[this.state.curr].length,
                                    error_count : this.error,
                                    gain : Math.floor(new_speed*100/(old_speed+1)*100)/100,
                                    key : 'a'
                                }));
                            });
                        }
                        else{
                            this.setState(state=>({
                                ...state,
                                speed : new_speed,
                                text : this.state.chrArr[this.state.curr],
                                span_text : "",
                                textLength : this.state.chrArr[this.state.curr].length,
                                error_count : this.error,
                                gain : Math.floor(new_speed*100/(old_speed+1)*100)/100,
                            }));
                        }
                        
                    });
                return ; 
            }

            //key pressed is wrong one
            if(!(k in changed_characters) && current_text.charAt(0) !== raw){
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
    
    onClick = ()=>{
        
    }

  render() {
    
    const { speed, error_count, gain, text, span_text, color,key }  =  this.state;
    return (
        <div className="some-class active">
            <Navbar />
            <header className="Header">
            </header>
    
            <div  onKeyDown={this.onkeyDown} onKeyUp={this.onkeyUp} tabIndex="0" >
                <Indicators 
                 speed_value={speed} 
                 error_count={error_count} 
                 gain={gain}
                 keyVal = {key}
                 />
                <TypeBox main_text={text} span_text={span_text} />
                <Keyboard color={color}/>
            </div>
        </div>
    );
  }
}

export default SpeedPage;
