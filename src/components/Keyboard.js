
import React, { Component } from 'react'
import './layout.css';

class Keyboard extends Component {

  render() {
    return (
    <div className="main-keyboard">
      <div className="keyboardBox">
            {/*Whole svg is loaded here so as to be able to use the passed color */}
        
            <svg width='840px'
                height='341px'
                viewBox='0 80 840 381' className="KeyBoard">

                
                <defs>
                <linearGradient id="DCS">
                    <stop offset="0%" stopColor="black" stopOpacity="0"/>
                    <stop offset="40%" stopColor="black" stopOpacity="0.1"/>
                    <stop offset="60%" stopColor="black" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="black" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="SPACE" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="black" stopOpacity="0.1"/>
                    <stop offset="20%" stopColor="black" stopOpacity="0.0"/>
                    <stop offset="40%" stopColor="black" stopOpacity="0.0"/>
                    <stop offset="100%" stopColor="black" stopOpacity="0.1"/>
                </linearGradient>
                <radialGradient id="DSA">
                    <stop offset="0%" stopColor="black" stopOpacity="0.1"/>
                    <stop offset="10%" stopColor="black" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="black" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="SA" href="#DSA" />
                </defs>

                <g transform='translate(10,10)'>
                <rect width="820" height="361"
                        fill="#222222" rx="6"/>
                <g transform='translate(5,5)'>
                    
            <g className='  keycap' data-key="Backquote">
                {/*OuterFill*/}
                <rect x="1" y="83"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                
                {/*Innner Border*/}
                <rect x="7" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                    <rect x="7" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Backquote}/>
                
                        <rect x="7" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>

                <text kerning="-2" x="27" y="105" fill="#ffff" fontSize="12">~</text>
                
            </g>

            <g className='  keycap' data-key="Digit1">

                {/*OuterFill*/}
                <rect x="55" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
   
                {/*Innner Border*/}
                <rect x="61" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="61" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit1}/>
          
                    <rect x="61" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="81" y="105" fill="#fff" fontSize="12">1</text>

            </g>

            <g className='  keycap' data-key="Digit2">

                {/*OuterFill*/}
                <rect x="109" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>

                {/*Innner Border*/}
                <rect x="115" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="115" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit2}/>
   
                    <rect x="115" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="135" y="105" fill="#fff" fontSize="12">2</text>

            </g>

            <g className='  keycap' data-key="Digit3">

                {/*OuterFill*/}
                <rect x="163" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="169" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="169" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit3}/>
                
                
                    
                    
                    <rect x="169" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="189" y="105" fill="#fff" fontSize="12">3</text>

                
            
            </g>

            <g className='  keycap' data-key="Digit4">

                {/*OuterFill*/}
                <rect x="217" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="223" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="223" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit4}/>
                
                
                    
                    
                    <rect x="223" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="243" y="105" fill="#fff" fontSize="12">4</text>

                
            
            </g>

            <g className='  keycap' data-key="Digit5">

                {/*OuterFill*/}
                <rect x="271" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="277" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="277" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit5}/>
                
                
                    
                    
                    <rect x="277" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="297" y="105" fill="#fff" fontSize="12">5</text>

                
            
            </g>

            <g className='  keycap' data-key="Digit6">

                {/*OuterFill*/}
                <rect x="325" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="331" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="331" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit6}/>
                
                
                    
                    
                    <rect x="331" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="351" y="105" fill="#fff" fontSize="12">6</text>

                
            
            </g>

            <g className='  keycap' data-key="Digit7">

                {/*OuterFill*/}
                <rect x="379" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="385" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="385" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit7}/>
                
                
                    
                    
                    <rect x="385" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="405" y="105" fill="#fff" fontSize="12">7</text>

                
            
            </g>

            <g className='  keycap' data-key="Digit8">

                {/*OuterFill*/}
                <rect x="433" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="439" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="439" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit8}/>
                
                
                    
                    
                    <rect x="439" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="459" y="105" fill="#fff" fontSize="12">8</text>

                
            
            </g>

            <g className='  keycap' data-key="Digit9">

                {/*OuterFill*/}
                <rect x="487" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="493" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="493" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit9}/>
                
                
                    
                    
                    <rect x="493" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="513" y="105" fill="#fff" fontSize="12">9</text>

                
            
            </g>

            <g className='  keycap' data-key="Digit0">

                {/*OuterFill*/}
                <rect x="541" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="547" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="547" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Digit0}/>
                
                
                    
                    
                    <rect x="547" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="567" y="105" fill="#fff" fontSize="12">0</text>

                
            
            </g>

            <g className='  keycap' data-key="Minus">

                {/*OuterFill*/}
                <rect x="595" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="601" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="601" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Minus}/>
                
                
                    
                    
                    <rect x="601" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="621" y="105" fill="#fff" fontSize="12">-</text>

                
            
            </g>

            <g className='  keycap' data-key="Equal">

                {/*OuterFill*/}
                <rect x="649" y="82"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="655" y="85"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="655" y="85"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Equal}/>
                
                
                    
                    
                    <rect x="655" y="85"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="675" y="105" fill="#fff" fontSize="12">=</text>

                
            
            </g>

            <g className='  keycap' data-key="Backspace">

                {/*OuterFill*/}
                <rect x="703" y="82"
                    width="106" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="709" y="85"
                        width="94" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="709" y="85"
                        width="94" height="40"
                        rx="5" fill={this.props.color.Backspace}/>
                
                
                    
                    
                    <rect x="709" y="85"
                        width="94" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="729" y="105" fill="#fff" fontSize="12">Backspace</text>

                
            
            </g>

            <g className='  keycap' data-key="Tab">

                {/*OuterFill*/}
                <rect x="1" y="136"
                    width="79" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="7" y="139"
                        width="67" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="7" y="139"
                        width="67" height="40"
                        rx="5" fill={this.props.color.Tab}/>
                
                
                    
                    
                    <rect x="7" y="139"
                        width="67" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="40.5" y="159" fill="#fff" fontSize="12">Tab</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyQ">

                {/*OuterFill*/}
                <rect x="82" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="88" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="88" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyQ}/>
                
                
                    
                    
                    <rect x="88" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="108" y="159" fill="#fff" fontSize="12">Q</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyW">

                {/*OuterFill*/}
                <rect x="136" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="142" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="142" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyW}/>
                
                
                    
                    
                    <rect x="142" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="162" y="159" fill="#fff" fontSize="12">W</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyE">

                {/*OuterFill*/}
                <rect x="190" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="196" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="196" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyE}/>
                
                
                    
                    
                    <rect x="196" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="216" y="159" fill="#fff" fontSize="12">E</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyR">

                {/*OuterFill*/}
                <rect x="244" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="250" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="250" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyR}/>
                
                
                    
                    
                    <rect x="250" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="270" y="159" fill="#fff" fontSize="12">R</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyT">

                {/*OuterFill*/}
                <rect x="298" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="304" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="304" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyT}/>
                
                
                    
                    
                    <rect x="304" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="324" y="159" fill="#fff" fontSize="12">T</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyY">

                {/*OuterFill*/}
                <rect x="352" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="358" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="358" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyY}/>
                
                
                    
                    
                    <rect x="358" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="378" y="159" fill="#fff" fontSize="12">Y</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyU">

                {/*OuterFill*/}
                <rect x="406" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="412" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="412" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyU}/>
                
                
                    
                    
                    <rect x="412" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="432" y="159" fill="#fff" fontSize="12">U</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyI">

                {/*OuterFill*/}
                <rect x="460" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="466" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="466" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyI}/>
                
                
                    
                    
                    <rect x="466" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="486" y="159" fill="#fff" fontSize="12">I</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyO">

                {/*OuterFill*/}
                <rect x="514" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="520" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="520" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyO}/>
                
                
                    
                    
                    <rect x="520" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="540" y="159" fill="#fff" fontSize="12">O</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyP">

                {/*OuterFill*/}
                <rect x="568" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="574" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="574" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyP}/>
                
                
                    
                    
                    <rect x="574" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="594" y="159" fill="#fff" fontSize="12">P</text>

                
            
            </g>

            <g className='  keycap' data-key="BracketLeft">

                {/*OuterFill*/}
                <rect x="622" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="628" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="628" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.BracketLeft}/>
                
                
                    
                    
                    <rect x="628" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="648" y="159" fill="#fff" fontSize="12">[</text>

                
            
            </g>

            <g className='  keycap' data-key="BracketRight">

                {/*OuterFill*/}
                <rect x="676" y="136"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="682" y="139"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="682" y="139"
                        width="40" height="40"
                        rx="5" fill={this.props.color.BracketRight}/>
                
                
                    
                    
                    <rect x="682" y="139"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="702" y="159" fill="#fff" fontSize="12">]</text>

                
            
            </g>

            <g className='  keycap' data-key="Backslash">

                {/*OuterFill*/}
                <rect x="730" y="136"
                    width="79" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="736" y="139"
                        width="67" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="736" y="139"
                        width="67" height="40"
                        rx="5" fill={this.props.color.Backslash}/>
                
                
                    
                    
                    <rect x="736" y="139"
                        width="67" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="756" y="159" fill="#fff" fontSize="12">\</text>

                
            
            </g>

            <g className='  keycap' data-key="Capslock">

                {/*OuterFill*/}
                <rect x="1" y="190"
                    width="92.5" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="7" y="193"
                        width="80.5" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="7" y="193"
                        width="80.5" height="40"
                        rx="5" fill={this.props.color.Capslock}/>
                
                
                    
                    
                    <rect x="7" y="193"
                        width="80.5" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="27.5" y="213" fill="#fff" fontSize="12">Capslock</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyA">

                {/*OuterFill*/}
                <rect x="95.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="101.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="101.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyA}/>
                
                
                    
                    
                    <rect x="101.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="121.5" y="213" fill="#fff" fontSize="12">A</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyS">

                {/*OuterFill*/}
                <rect x="149.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="155.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="155.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyS}/>
                
                
                    
                    
                    <rect x="155.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="175.5" y="213" fill="#fff" fontSize="12">S</text>

                
            
            </g>

            <g className='  keycap' data-key="KeyD">

                {/*OuterFill*/}
                <rect x="203.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                

                
                {/*Innner Border*/}
                <rect x="209.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="209.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyD}/>
                
                
                    
                    
                    <rect x="209.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="229.5" y="213" fill="#fff" fontSize="12">D</text>
            
            </g>

            <g className='  keycap' data-key="KeyF">

                {/*OuterFill*/}
                <rect x="257.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="263.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="263.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyF}/>
            
                    <rect x="263.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="283.5" y="213" fill="#fff" fontSize="12">F</text>
            
            </g>

            <g className='  keycap' data-key="KeyG">

                {/*OuterFill*/}
                <rect x="311.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="317.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="317.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyG}/>
            
                    <rect x="317.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
            
                <text kerning="-2" x="337.5" y="213" fill="#fff" fontSize="12">G</text>
            
            </g>

            <g className='  keycap' data-key="KeyH">

                {/*OuterFill*/}
                <rect x="365.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="371.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="371.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyH}/>
            
                    <rect x="371.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="391.5" y="213" fill="#fff" fontSize="12">H</text>
            
            </g>

            <g className='  keycap' data-key="KeyJ">

                {/*OuterFill*/}
                <rect x="419.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="425.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="425.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyJ}/>
            
                    <rect x="425.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="445.5" y="213" fill="#fff" fontSize="12">J</text>
            
            </g>

            <g className='  keycap' data-key="KeyK">

                {/*OuterFill*/}
                <rect x="473.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="479.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="479.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyK}/>
            
                    <rect x="479.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="499.5" y="213" fill="#fff" fontSize="12">K</text>
            
            </g>

            <g className='  keycap' data-key="KeyL">

                {/*OuterFill*/}
                <rect x="527.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="533.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="533.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyL}/>
            
                    <rect x="533.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="553.5" y="213" fill="#fff" fontSize="12">L</text>

            
            </g>

            <g className='  keycap' data-key="Semicolon">

                {/*OuterFill*/}
                <rect x="581.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="587.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="587.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Semicolon}/>
            
                    <rect x="587.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="607.5" y="213" fill="#fff" fontSize="12">;</text>
            
            </g>

            <g className='  keycap' data-key="Quotes">

                {/*OuterFill*/}
                <rect x="635.5" y="190"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="641.5" y="193"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="641.5" y="193"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Quotes}/>
            
                    <rect x="641.5" y="193"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="661.5" y="213" fill="#fff" fontSize="12">'</text>
            
            </g>

            <g className='  keycap' data-key="Enter">

                {/*OuterFill*/}
                <rect x="689.5" y="190"
                    width="119.5" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="695.5" y="193"
                        width="107.5" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="695.5" y="193"
                        width="107.5" height="40"
                        rx="5" fill={this.props.color.Enter}/>
            
                    <rect x="695.5" y="193"
                        width="107.5" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="715.5" y="213" fill="#fff" fontSize="12">Enter</text>
            
            </g>

            <g className='  keycap' data-key="ShiftLeft">

                {/*OuterFill*/}
                <rect x="1" y="244"
                    width="119.5" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="7" y="247"
                        width="107.5" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="7" y="247"
                        width="107.5" height="40"
                        rx="5" fill={this.props.color.ShiftLeft}/>
            
                    <rect x="7" y="247"
                        width="107.5" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="27.5" y="267" fill="#fff" fontSize="12">Shift</text>
            
            </g>

            <g className='  keycap' data-key="KeyZ">

                {/*OuterFill*/}
                <rect x="122.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                
                {/*Innner Border*/}
                <rect x="128.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="128.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyZ}/>
            
                    <rect x="128.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="148.5" y="267" fill="#fff" fontSize="12">Z</text>

            
            </g>

            <g className='  keycap' data-key="KeyX">

                {/*OuterFill*/}
                <rect x="176.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="182.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="182.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyX}/>
                
            
                    <rect x="182.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="202.5" y="267" fill="#fff" fontSize="12">X</text>

            </g>

            <g className='  keycap' data-key="KeyC">

                {/*OuterFill*/}
                <rect x="230.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                
                {/*Innner Border*/}
                <rect x="236.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="236.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyC}/>
            
                    <rect x="236.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="256.5" y="267" fill="#fff" fontSize="12">C</text>

            </g>

            <g className='  keycap' data-key="KeyV">

                {/*OuterFill*/}
                <rect x="284.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                
                {/*Innner Border*/}
                <rect x="290.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="290.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyV}/>
                
                    <rect x="290.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                
                <text kerning="-2" x="310.5" y="267" fill="#fff" fontSize="12">V</text>

            </g>

            <g className='  keycap' data-key="KeyB">

                {/*OuterFill*/}
                <rect x="338.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                
                {/*Innner Border*/}
                <rect x="344.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="344.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyB}/>
                
                    <rect x="344.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="364.5" y="267" fill="#fff" fontSize="12">B</text>

            </g>

            <g className='  keycap' data-key="KeyN">

                {/*OuterFill*/}
                <rect x="392.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
                
                {/*Innner Border*/}
                <rect x="398.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="398.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyN}/>
            
                    <rect x="398.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
            
                <text kerning="-2" x="418.5" y="267" fill="#fff" fontSize="12">N</text>

            </g>

            <g className='  keycap' data-key="KeyM">

                {/*OuterFill*/}
                <rect x="446.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="452.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="452.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.KeyM}/>
            
                    <rect x="452.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                
                <text kerning="-2" x="472.5" y="267" fill="#fff" fontSize="12">M</text>

            </g>

            <g className='  keycap' data-key="Comma">

                {/*OuterFill*/}
                <rect x="500.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>

                {/*Innner Border*/}
                <rect x="506.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="506.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Comma}/>
            
                    <rect x="506.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="526.5" y="267" fill="#fff" fontSize="12">,</text>

            </g>

            <g className='  keycap' data-key="Period">

                {/*OuterFill*/}
                <rect x="554.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>

                {/*Innner Border*/}
                <rect x="560.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="560.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Period}/>
            
                    <rect x="560.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="580.5" y="267" fill="#fff" fontSize="12">.</text>

            </g>

            <g className='  keycap' data-key="Slash">

                {/*OuterFill*/}
                <rect x="608.5" y="244"
                    width="52" height="52"
                    rx="5" fill="#08090a"/>
            
                {/*Innner Border*/}
                <rect x="614.5" y="247"
                        width="40" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="614.5" y="247"
                        width="40" height="40"
                        rx="5" fill={this.props.color.Slash}/>

                    <rect x="614.5" y="247"
                        width="40" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="634.5" y="267" fill="#fff" fontSize="12">/</text>

            </g>

            <g className='  keycap' data-key="ShiftRight">

                {/*OuterFill*/}
                <rect x="662.5" y="244"
                    width="146.5" height="52"
                    rx="5" fill="#08090a"/>

                {/*Innner Border*/}
                <rect x="668.5" y="247"
                        width="134.5" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="668.5" y="247"
                        width="134.5" height="40"
                        rx="5" fill={this.props.color.ShiftRight}/>

                    <rect x="668.5" y="247"
                        width="134.5" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="688.5" y="267" fill="#fff" fontSize="12">Shift</text>

            </g>

            <g className='  keycap' data-key="ControlLeft">

                {/*OuterFill*/}
                <rect x="1" y="298"
                    width="65.5" height="52"
                    rx="5" fill="#08090a"/>

                {/*Innner Border*/}
                <rect x="7" y="301"
                        width="53.5" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="7" y="301"
                        width="53.5" height="40"
                        rx="5" fill={this.props.color.ControlLeft}/>
                
                    <rect x="7" y="301"
                        width="53.5" height="40"
                        rx="5" fill="url(#DCS)"/>
                

                <text kerning="-2" x="33.5" y="321" fill="#fff" fontSize="12">Ctrl</text>

            </g>

            <g className='  keycap' data-key="AltLeft">

                {/*OuterFill*/}
                <rect x="68.5" y="298"
                    width="65.5" height="52"
                    rx="5" fill="#08090a"/>
                
                {/*Innner Border*/}
                <rect x="74.5" y="301"
                        width="53.5" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="74.5" y="301"
                        width="53.5" height="40"
                        rx="5" fill={this.props.color.AltLeft}/>
                
                    <rect x="74.5" y="301"
                        width="53.5" height="40"
                        rx="5" fill="url(#DCS)"/>
                
                <text kerning="-2" x="100.5" y="321" fill="#fff" fontSize="12">Alt</text>

            </g>

            
            <g className='  keycap' data-key="SpaceBar">

                {/*OuterFill*/}
                <rect x="136" y="298"
                    width="538" height="52"
                    rx="5" fill="#08090a"/>
                
                {/*Innner Border*/}
                <rect x="139.5" y="301"
                        width="530" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="209.5" y="301"
                        width="385" height="40"
                        rx="5" fill={this.props.color.SpaceBar}/>
                
                    <rect x="209.5" y="301"
                        width="323.5" height="40"
                        rx="5" fill="url(#SPACE)"/>

            </g>

            <g className='  keycap' data-key="AltRight">

                {/*OuterFill*/}
                <rect x="676" y="298"
                    width="65.5" height="52"
                    rx="5" fill="#08090a"/>
                
                {/*Innner Border*/}
                <rect x="682" y="301"
                        width="53.5" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="682" y="301"
                        width="53.5" height="40"
                        rx="5" fill={this.props.color.AltRight}/>
                
                    <rect x="682" y="301"
                        width="53.5" height="40"
                        rx="5" fill="url(#DCS)"/>
                
                <text kerning="-2" x="708" y="321" fill="#fff" fontSize="12">Alt</text>

            </g>

            <g className='  keycap' data-key="ControlRight">

                {/*OuterFill*/}
                <rect x="743.5" y="298"
                    width="65.5" height="52"
                    rx="5" fill="#08090a"/>

                {/*Innner Border*/}
                <rect x="749.5" y="301"
                        width="53.5" height="40"
                        rx="5" fill="#2f2f2f" className="inner border"/>
                
                {/*Inner Fill*/}
                <rect x="749.5" y="301"
                        width="53.5" height="40"
                        rx="5" fill={this.props.color.ControlRight}/>

                    <rect x="749.5" y="301"
                        width="53.5" height="40"
                        rx="5" fill="url(#DCS)"/>

                <text kerning="-2" x="775" y="321" fill="#fff" fontSize="12">Ctrl</text>
            
            </g>

                </g>
                </g>
            </svg>

      </div>
    </div>
    );
  }
}

export default Keyboard
