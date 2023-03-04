/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import Message from "../Items/Message";
import app from "../../Config";
import "../../css/Chat.css";
import SmallBox from "../Items/SmallBox";
import {RiSendPlane2Fill, RiSunFill} from "react-icons/ri";

function ChatBox(props) {
    const [input, setInput] = useState('');
    const [isLoading, startLoader] = useState(false);
    const [chat, setChat] = useState({
        _id:props.id,
        conversations:[]
    });
    
    useEffect(() => {
        fetch(app.api+'chat/'+props.id,{
            method: 'GET'
            }).then(response => response.json())
            .then((Data) => {
                console.log("chat data:");
                console.log(Data);
                if(Data.success){
                    setChat(Data.data);
                }
            })
            .catch((err) => {
               console.log(err.message);
            });
    }, [props.id]);

    var ask = (e) => {
        e.preventDefault();
        if(input){
            startLoader(true);
            fetch(app.api+'ask',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ _id: props.id, text: input })
                }).then(response => response.json())
                .then((Data) => {
                    setInput("");
                    startLoader(false);
                    console.log("Asked:");
                    console.log(Data);
                    if(Data.success){
                        setChat(Data.data);
                    }
                    const objDiv = document.getElementById("chat");
                        objDiv.scrollTop = objDiv.scrollHeight+700;
                })
                .catch((err) => {
                console.log(err.message);
                });
        }
     };

     

return (
            <>
            <div className="chat_board" id="chat">
                    <div className="gap"></div>   
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
                        {/* <img alt="logo" src={app.icon}  className={isLoading ? "appicon":null} style={{height:50,margin:16}}/>
                        <h3>{app.name}</h3>
                        <br/> */}
                        <div className="text-left">
                            <h6><RiSunFill/> Examples</h6>
                        </div>
                        <SmallBox text="`Is it possible to teach machines ethics, empathy or compassion?`" />
                        <br/>
                        <SmallBox text="`Name three things you really want to recommend to me`" />
                        <br/>
                        <SmallBox text="`Who is the fastest man alive?`" />
                    </div>
                    }
                    <div className="gap"></div>
            </div>   
            <div className="footer">     
                        <Form onSubmit={ask}>
                                <div className="input-group">
                                <Form.Control className="maya-input" disabled={isLoading} value={input} onSubmit={ask} onChange={e => setInput(e.target.value)} placeholder="Ask me anything" />
                                
                                <Button disabled={isLoading || !input} variant="clear" type="submit" size='lg'>
                                    {isLoading ? (
                                            <Spinner  as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true" variant="danger" />
                                    ) : (
                                            <RiSendPlane2Fill/>
                                        )}
                                    </Button>
                            </div>
                        </Form>
                        <div className="text-center">
                            <small style={{fontSize:13}}>
                                &copy; {new Date().getFullYear()} Copyright: DeenDevs. Designed for learning & development
                            </small>
                            <br/>
                            <br/>
                            <br/>
                        </div>
            </div>
            </>
)
}


export default ChatBox;