import React,{useState} from 'react';
import "../../css/Buttons.css";
import {
Button,Offcanvas,Form, Container, ListGroup, Stack
} from 'react-bootstrap';
import {RiSettings5Fill} from "react-icons/ri";
import demo from "../../Config";
import Foot from '../Bars/Foot';
import {VscWorkspaceTrusted,VscSearch} from "react-icons/vsc";

function SettingsButton(props){

  const [Loading, startLoading] = useState(false);

  const [show, setShow] = useState(false);
  
    const handleClose=function(){
        setShow(false);
    }
    const handleShow=function(){
      setShow(true);
    } 
    const changeTheme=function(value){
    props.setTheme(value);
    }

return (
 <>
<Button variant={props.dark ? 'transparent':null} onClick={handleShow}>
<RiSettings5Fill/>
</Button>

            <Offcanvas className={props.dark ? "offcanvas-dark":null} variant={props.dark ? "dark":null} show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Settings</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Container fluid className="align-middle">
                <Form>

                        <Form.Group className="mb-3">
                        <Form.Label>Appearance</Form.Label>
                        <Form.Select className={props.dark ? "input-dark":null} onChange={e => changeTheme(e.target.value)}>
                            <option selected={props.dark} value={true}>Dark Theme</option>
                            <option selected={!props.dark} value={false}>Light Theme</option>
                        </Form.Select>
                      </Form.Group>
                        <br/>
                        <br/>
                      {/* <Form.Group className="mb-3">
                          <Form.Label>Humor Settings</Form.Label>
                          <Form.Range disabled value={0} />
                      </Form.Group> */}
                    </Form>

                  </Container>
                 </Offcanvas.Body>
                  <Foot bg={props.dark ? "bg-darker light":null} name={demo.name} icon={demo.icon}/>
              </Offcanvas>
            </>

);

};

export default SettingsButton;

