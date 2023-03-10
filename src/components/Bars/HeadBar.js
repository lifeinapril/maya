import React,{useState} from 'react';
import "../../css/Header.css";
import {
Navbar,Nav,Offcanvas
} from 'react-bootstrap';
import LoginButton from "../Buttons/LoginButton";
import Settings from '../Items/Settings';
import { RiSettings2Line } from 'react-icons/ri';

function HeadBar(props) {
  const [show , showSettings ] = useState(false);
  const CloseSettings = () => showSettings(false);
  const OpenSettings= () => showSettings(true);

var changeMode=function(){
  props.changeMode();
}
 
return (
<>
      <Navbar fixed="top" variant={props.dark ? "dark":"light"} expand="lg" className={"headbar justify-content-around "+(props.dark ? " bg-dark":" bg-light")}>  
       <Navbar.Brand>
       <RiSettings2Line style={{border:"none",marginLeft:-20}} onClick={OpenSettings}/>
     &nbsp;
     &nbsp;
                      <img 
                        alt="logo"
                        src={props.icon}
                        style={{height:30,marginLeft:0}}
                      />
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

       <Offcanvas variant={props.dark ? "dark":"light"} className={props.dark ? "offcanvas-dark":"offcanvas-light"} show={show} onHide={CloseSettings} placement="start">
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Settings changeMode={changeMode} clearChat={props.clearChat} dark={props.dark}/>
          </Offcanvas.Body>
      </Offcanvas>
      
    </>

);

  }

export default HeadBar;
