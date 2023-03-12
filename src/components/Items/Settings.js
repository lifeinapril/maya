
import {useEffect,useState} from "react";
import {  ListGroup } from 'react-bootstrap';
import { RiMoonFill,RiSunFill, RiChatDeleteFill } from "react-icons/ri";

function Settings(props) {
  
  const [settings,changeSettings] = useState({dark:true,mode:"mic"});

useEffect(() => {
          if(localStorage.getItem('settings')){
              changeSettings(localStorage.getItem('settings'));
          }
        },[]);

  var Mode=function(){
    props.changeMode();
  }

  var ChangeInput=function(){
 
  }


  var ClearConvo=function(){
    props.clearChat();
  }

        return (
            <>
              <ListGroup as="ol">
                <small style={{margin:10}}><b>Settings</b></small>
                <ListGroup.Item as="li" onClick={ClearConvo} className={"d-flex "+(props.dark ? "bg-dark":"bg-light")}>
                  <small> <RiChatDeleteFill/>&nbsp;&nbsp;&nbsp;Clear conversation </small> 
                </ListGroup.Item>
                <ListGroup.Item as="li" onClick={Mode} className={"d-flex "+(props.dark ? "bg-dark":"bg-light")}>
                  <small> {props.dark ?  <RiSunFill/>: <RiMoonFill/>}&nbsp;&nbsp;&nbsp;{props.dark ? "Light Mode":"Dark Mode"}</small> 
                </ListGroup.Item>
                <ListGroup.Item as="li" onClick={ChangeInput} className={"d-flex "+(props.dark ? "bg-dark":"bg-light")}>
                  <small>&nbsp;&nbsp;&nbsp;{settings.mode==="text" && ("Use Mic")}{settings.mode==="mic" && ("Use Text")}</small> 
                </ListGroup.Item>
              </ListGroup>
            </>
        );

}




export default Settings;
