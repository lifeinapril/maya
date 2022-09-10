import React from 'react';
import "../../css/MayaInput.css";
import {Form,Button,Stack, Container
} from 'react-bootstrap';
import {RiMicFill} from "react-icons/ri";


const MayaInput = (props) => {
return (
    <Container style={{margin:"auto"}}>
    <Stack direction="horizontal" gap={1}>
        <Form.Control className="maya-input" placeholder="What can i do for you today?" />
        <Button variant={props.dark ? 'dark-coral':"light-coral"} style={{marginTop:5}}>
        <RiMicFill/>
        </Button>
    </Stack>
    </Container>
)
}

export default MayaInput;