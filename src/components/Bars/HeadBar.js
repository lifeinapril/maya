import React,{useState} from 'react';
import "../../css/Header.css";
import {
Navbar,Nav
} from 'react-bootstrap';
import LoginButton from "../Buttons/LoginButton";
import { RiSettings4Fill } from 'react-icons/ri';

function HeadBar(props) {
  const OpenSettings= () => props.openSettings(true);
return (
<>
      <Navbar fixed="top" variant={props.dark ? "dark":"light"} expand="lg" className={"headbar justify-content-around "+(props.dark ? " bg-dark":" bg-light")}>  
       <Navbar.Brand>
       <RiSettings4Fill style={{border:"none",marginLeft:-20,cursor:"pointer"}} onClick={OpenSettings}/>
     &nbsp;
     &nbsp;
                      <img 
                        alt="logo"
                        src={props.icon}
                        style={{height:30,marginLeft:0}}/>
            </Navbar.Brand>
            <Nav></Nav>
            <Nav></Nav>
            <Nav id="menu" className="justify-content-end">
                {props.user ? 
                <>
                  <small>Hello <b>{props.user.first_name}</b></small>
                </>:
                <LoginButton style={{float:"right"}}/>}
            </Nav>
            
      </Navbar>

      
    </>

);

  }

export default HeadBar;
