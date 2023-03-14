import React,{useState,useEffect} from 'react';
import {  ListGroup,Form } from 'react-bootstrap';
import { RiMoonFill,RiSunFill, RiChatDeleteFill, RiLogoutBoxFill } from "react-icons/ri";

function Settings(props) {
  const [voices, setVoices] = useState([]);
  var Mode=function(){
    props.changeMode();
  }

  var ChangeInput=function(value){
    props.changeInput(value);
  }

  var ChangeSpeech=function(value){
    props.changeSpeech(value);
  }
  var ChangeVoice=function(value){
    console.log(value);
    props.changeVoice(value);
  }

  var ClearConvo=function(){
    props.clearChat();
  }

  var Logout=function(){
    localStorage.removeItem("account");
    ClearConvo();
    window.location.reload();
  }

  useEffect(() => {
    const voices = window.speechSynthesis.getVoices();
    setVoices(voices);
  }, []);
  
  
  
        return (
            <>
              <ListGroup as="ol">
                <ListGroup.Item as="li" onClick={ClearConvo} className={"d-flex "+(props.dark ? "bg-dark":"bg-light")}>
                  <small> <RiChatDeleteFill/>&nbsp;&nbsp;&nbsp;Clear conversation </small> 
                </ListGroup.Item>
                <br/>
                <ListGroup.Item as="li" onClick={Mode} className={"d-flex "+(props.dark ? "bg-dark":"bg-light")}>
                  <small> {props.dark ?  <RiSunFill/>: <RiMoonFill/>}&nbsp;&nbsp;&nbsp;{props.dark ? "Light Mode":"Dark Mode"}</small> 
                </ListGroup.Item>
                <br/>
                <Form.Label><small>Select your input mode</small></Form.Label>
                 <Form.Select className={props.dark ? "bg-grey":"bg-light"}  value={props.inputMode} onChange={e => ChangeInput(e.target.value)}>
                    <option value="mic">Mic</option>
                    <option value="text">Text</option>
                </Form.Select>
                <br/>

             

                <Form.Label><small>Speech Synthesis</small></Form.Label>
                 <Form.Select className={props.dark ? "bg-grey":"bg-light"}  value={props.speechMode} onChange={e => ChangeSpeech(e.target.value)}>
                    <option value={true}>Enabled</option>
                    <option value={false}>Disabled</option>
                </Form.Select>

                <br/>
                  {props.speechMode && (
                    <>
                    <Form.Label><small>Select Voice</small></Form.Label>
                    <Form.Select className={props.dark ? "bg-grey":"bg-light"}  value={props.voiceMode} onChange={e => ChangeVoice(e.target.value)}>
                        {voices.map((voice, index) => (
                              <option key={index} value={index}>
                                {voice.name} ({voice.lang}) {voice.default && ' [Default]'}
                              </option>
                            ))}
                    </Form.Select>
                    </>
                  )}
                <br/>


                {/* <br/>

                {props.user && (
                <ListGroup.Item as="li" onClick={Logout} className={"d-flex "+(props.dark ? "bg-dark":"bg-light")}>
                  <small className='red'><RiLogoutBoxFill/>&nbsp;&nbsp;&nbsp;Logout</small> 
                </ListGroup.Item>
                )} */}

              </ListGroup>
            </>
        );

}




export default Settings;
