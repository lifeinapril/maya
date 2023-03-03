


import React from 'react';
import "../../css/Box.css";

const Message= (props) => {
return (
    <>
    <div className="message">
      <div className='message_a'>
           <div style={{width:"100%",padding:"5px"}}>{props.input}</div>
      </div>
    </div>
    <div className="message">
      <div className='message_b'>
           <div style={{width:"100%",padding:"5px"}}>{props.output}</div>
      </div>
    </div>
    </>
);
};

export default Message;
