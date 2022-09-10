import { Alert,Button } from "react-bootstrap";
import React,{useState} from "react";
import MayaInput from "./MayaInput";
import MayaIcon from "./MayaIcon";
import { Toast } from "react-bootstrap";
import "../../css/Bot.css";

function Bot() {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert className="maya-bot" show={show} variant="dark">
          <Alert.Heading>
              <MayaIcon spin={true} size={20} />
              <br/>
          </Alert.Heading>
          <br/>
            <Toast>
                <Toast.Body className="bg-dark">
                    Hello, world! This is a toast message.
                    <br/>
                <small>11 mins ago</small>
            </Toast.Body>
                
            </Toast>
          <hr />
          <div className="justify-content-bottom">
          <MayaInput/>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
    );
  }
  
export default Bot;