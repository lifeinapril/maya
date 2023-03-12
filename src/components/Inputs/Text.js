/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import "../../css/Chat.css";
import {RiSendPlane2Fill} from "react-icons/ri";
import 'react-toastify/dist/ReactToastify.css';


function Text(props) {
    const [input, setInput] = useState('');
    function ask(e){
        e.preventDefault();
        props.action(input);
        setInput("");
    }
    return (
    <Form onSubmit={ask}>
        <div className="input-group">
            <Form.Control className={"maya-input "+(props.dark ? "bg-grey":"bg-light")} disabled={props.loading} value={input} onChange={e => setInput(e.target.value)} placeholder="Ask me anything" />
            <Button disabled={props.loading || !input} variant="clear" type="submit" size='lg'>
                {props.loading ? (
                        <Spinner  as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true" variant={props.dark ? "light":"danger"} />
                ) : (
                        <RiSendPlane2Fill color={props.dark ? "#fff":"#000"}/>
                    )}
            </Button>
        </div>
    </Form>
    );
                                    }



export default Text;