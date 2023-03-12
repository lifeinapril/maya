
import {  ListGroup,Form } from 'react-bootstrap';
import { RiMoonFill,RiSunFill, RiChatDeleteFill } from "react-icons/ri";

function Settings(props) {
  
  var Mode=function(){
    props.changeMode();
  }

  var ChangeInput=function(value){
    props.changeInput(value);
  }

  var ChangeSpeech=function(value){
    props.ChangeSpeech(value);
  }


  var ClearConvo=function(){
    props.clearChat();
  }

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

                <Form.Label><small>Speak</small></Form.Label>
                 <Form.Select className={props.dark ? "bg-grey":"bg-light"}  value={props.speechMode} onChange={e => ChangeSpeech(e.target.value)}>
                    <option value={true}>Enabled</option>
                    <option value={false}>Disabled</option>
                </Form.Select>

              </ListGroup>
            </>
        );

}




export default Settings;
