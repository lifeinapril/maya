import {React, useState } from 'react';

import "../../css/MayaInput.css";
import {Form, Container
} from 'react-bootstrap';


const MayaInput = (props) => {
    const [input, setInput] = useState('');
    var search = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/search',{
        method: 'POST',
        body: JSON.stringify({
                    term: input,
                    a_id: Math.random().toString(36).slice(2),}),
        headers: {'Content-type': 'application/json; charset=UTF-8',}
        })
        .then((data) => {
            //
           console.log("searching.......");
        })
        .catch((err) => {
           console.log(err.message);
        });
     };

return (
    <Container style={{margin:"auto"}}>
        <Form onSubmit={search}>
            <Form.Control className="maya-input" value={input} onSubmit={search} onChange={e => setInput(e.target.value)} placeholder="What can i do for you today?" />
        </Form>
    </Container>
)
}

export default MayaInput;