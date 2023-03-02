import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Message from "../Items/Message";
import app from "../../Config";

function Chat(props) {
    const [input, setInput] = useState('');
    const [chat, setChat] = useState([]);
    const [socket, setSocket] = useState(null);


    var LoadChat=(id)=>{
        fetch(props.api+'chat/'+id,{
            method: 'GET',
            headers: {'Content-type': 'application/json; charset=UTF-8',}
            })
            .then((Data) => {
                console.log(Data.data);
                setChat(Data.data);
            })
            .catch((err) => {
               console.log(err.message);
            });
    }


    useEffect(() => {
      const newSocket = io(props.api);
      setSocket(newSocket);
      LoadChat(props.id);
      return () => newSocket.disconnect();
    }, []);

    var ask = (e) => {
        e.preventDefault();
        socket.emit("ask", { _id: props.id, text: input });
        setInput("");
     };

     if (socket) {
        socket.on("answer", () => {
            LoadChat(props.id);
        });
      }

return (
    <Container className="my-5">
      <Row>
        <Col md={12}>
            {chat.conversations.length > 0 ?
                chat.conversations.map(function(message,i){
                    if(message){
                        return(
                            <Message key={i} input={message.input} output={message.output}/>
                        )
                    }else{
                        return null;
                    }
                })
                : 
                <div>
                    <img alt="logo" src={app.icon} style={{height:130,margin:16}}/>
                    <h3>{app.name}</h3>
                </div>
            }
        </Col>
        <Col md={12}>
        <Form onSubmit={ask}>
            <Form.Control className="maya-input" value={input} onSubmit={ask} onChange={e => setInput(e.target.value)} placeholder="Ask me anything" />
        </Form>
        </Col>
      </Row>
    </Container>
)
}


export default Chat;