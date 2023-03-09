
import React from "react";
import {  ListGroup } from 'react-bootstrap';
import { RiMoonFill,RiSunFill, RiChatDeleteFill } from "react-icons/ri";

function Settings(props) {
  
          var Mode=function(){
            props.changeMode();
          }
 
        return (
            <>
              <ListGroup as="ol">
                <small style={{margin:10}}><b>Settings</b></small>
                <ListGroup.Item as="li" className={"d-flex "+(props.dark ? "bg-dark":"bg-light")}>
                  <small> <RiChatDeleteFill/>&nbsp;&nbsp;&nbsp;Clear conversation </small> 
                </ListGroup.Item>
                <ListGroup.Item as="li" onClick={Mode} className={"d-flex "+(props.dark ? "bg-dark":"bg-light")}>
                  <small> {props.dark ?  <RiSunFill/>: <RiMoonFill/>}&nbsp;&nbsp;&nbsp;{props.dark ? "Light Mode":"Dark Mode"}</small> 
                </ListGroup.Item>
              </ListGroup>
            </>
        );

}




export default Settings;
