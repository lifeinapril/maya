import React from 'react';
import {
Card
} from 'react-bootstrap';
import "../../css/Screen.css";

const Screen = (props) => {
return (
  <div style={{marginBottom:20}}>
    <Card className="screen" style={{minHeight:"auto",padding:10}}>
        <Card.Img src={props.image} />
        <Card.ImgOverlay>
            <Card.Title>
                <img 
                alt="logo"
                src={props.icon}
                style={{height:30,marginBottom:20}}/>
                <br/>
                {props.title ? props.title:null}
            </Card.Title>
            <Card.Text>
               <small> {props.body ? props.body:null} </small>
            </Card.Text>
            <Card.Link href={props.url}>Get started</Card.Link>
        </Card.ImgOverlay>
    </Card>
  </div>
);
};

export default Screen;
