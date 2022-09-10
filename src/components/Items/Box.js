


import React from 'react';
import {
Card
} from 'react-bootstrap';
import "../../css/Box.css";

const Box = (props) => {
return (
  <div style={{marginBottom:15}}>
    <Card className={props.bg} style={{minHeight:200,paddingTop:40}}>
    {props.image ? <Card.Img style={{minHeight:300,maxHeight:300}} className={props.border ? `${props.border}`:null} src={props.image} />:null}
    <Card.Body className={props.variant}>
      <Card.Title>{props.image ? <h2>{props.title}</h2>:props.title}</Card.Title>
      <Card.Text height={40}>
          {props.body ? props.body:null}...
      </Card.Text>
                 {
                props.sub ? props.sub:null
                }
      {
                props.button ? props.button:null
                }
    </Card.Body>
  </Card>
  </div>
);
};

export default Box;
