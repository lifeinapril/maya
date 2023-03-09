


import React from 'react';
import {
Card
} from 'react-bootstrap';
import "../../css/Box.css";

const SmallBox = (props) => {
return (
  <div style={{marginBottom:2}}>
    <Card className={'example '+(props.dark ? "bg-dark":"bg-white")} style={{minHeight:"auto",padding:10}}>
    {/* <Card.Body className={props.variant}> */}
      <Card.Text>
          {props.text ? props.text:null}
      </Card.Text>
    {/* </Card.Body> */}
  </Card>
  </div>
);
};

export default SmallBox;
