import React,{useState,useEffect} from 'react';
import "../../css/Header.css";
import {
Navbar,Nav,Offcanvas
} from 'react-bootstrap';
import app from "../../Config";
import LoginButton from "../Buttons/LoginButton";
import Settings from '../Items/Settings';
import { RiSettings2Line } from 'react-icons/ri';

function HeadBar(props) {
  const [user , setUser ] = useState(null);
  const [show , showSettings ] = useState(false);

  const CloseSettings = () => showSettings(false);
  const OpenSettings= () => showSettings(true);
  useEffect(() => {
                const account = localStorage.getItem('account');
                if(account){
                    fetch(app.api+'user/info',{
                      method: 'GET',
                      headers: {
                          'Content-Type': 'application/json',
                          'token': account
                        }
                      }).then(response => response.json())
                      .then((Data) => {
                          if(Data.success){
                            setUser(Data.data);
                          }
                      })
                      .catch((err) => {
                      console.log(err.message);
                      });
                }
}, []);


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
                        md={false}
                        style={{height:30,marginLeft:0}}
                      />
            </Navbar.Brand>
            <Nav></Nav>
            <Nav></Nav>
            <Nav id="menu" className="justify-content-end">
                {user ? 
                <>
                  <h5>Hello <b>{user.user_name}</b></h5>
                </>:
                <LoginButton style={{float:"right"}}/>}
            </Nav>
            
      </Navbar>

       <Offcanvas variant={props.dark ? "dark":"light"} className={props.dark ? "offcanvas-dark":"offcanvas-light"} show={show} onHide={CloseSettings} placement="start">
          <Offcanvas.Header variant={props.dark ? "dark":"light"} closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Settings changeMode={changeMode} clearChat={props.clearChat} dark={props.dark}/>
          </Offcanvas.Body>
      </Offcanvas>
      
    </>

);

  }

export default HeadBar;
