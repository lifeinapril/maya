


import React from 'react';
import "../../css/MayaIcon.css";

const MayaIcon = (props) => {
return (
  <div style={{width:props.size,height:props.size}} className={"maya-icon icon-"+(props.variant ? props.variant:"red")+" "+(props.spin ? "spin-icon":null)}> 
  </div>
);
};

export default MayaIcon;
