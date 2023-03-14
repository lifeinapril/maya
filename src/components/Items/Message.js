


import React from 'react';
import { Button } from 'react-bootstrap';
import { MdSpeakerPhone, MdVolumeUp } from 'react-icons/md';
import { RiSoundModuleFill, RiSurroundSoundLine } from 'react-icons/ri';
import "../../css/Box.css";

const Message= (props) => {


  function Speak(input) {
      props.speaker(input);
  }
return (
    <>
    <div className="message">
      <div className='message_a'>
           <div style={{width:"100%",padding:"5px"}}>{props.input}</div>
      </div>
    </div>
    <div className="message">
      <div className='message_b'>
           <div style={{width:"100%",padding:"5px"}}>
            {props.output}
           </div>
      </div>
      <Button variant='clear' style={{marginTop:10}} size="sm" onClick={()=>Speak(props.output)}><MdVolumeUp size={18} color='#808080'/></Button>
    </div>
    </>
);
};

export default Message;
