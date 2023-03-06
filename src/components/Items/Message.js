


import React from 'react';
import "../../css/Box.css";

const Message= (props) => {


function highlightCode(text) {  
  const regex1 = /`([\s\S]+?)`/g;
const newText = text.replace(regex1, '<div>$1</div>');
console.log(newText);
return newText;
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
            {highlightCode(props.output)}
           </div>
      </div>
    </div>
    </>
);
};

export default Message;
