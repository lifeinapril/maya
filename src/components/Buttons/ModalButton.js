import React,{useState} from 'react';
import {
    Button,Modal
} from 'react-bootstrap';
import "../../css/Buttons.css";
import Box from '../Items/Box';



function ModalButton(props) {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant="green" onClick={() => setShow(true)}>
          {props.title}
        </Button>
  
        {props.content ?
        <Modal variant="dark"
        size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Box bg="bg-light" variant="dark" image={props.noimage ? null:props.content.image} title={props.content.title} body={props.content.body} />        
        </Modal>:null
            }
      </>
    );
  }
  


  export default ModalButton;
