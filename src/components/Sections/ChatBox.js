/* eslint-disable react-hooks/exhaustive-deps */
import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Message from "../Items/Message";
import app from "../../Config";
import "../../css/Chat.css";
import SmallBox from "../Items/SmallBox";
import {RiSunFill} from "react-icons/ri";

function ChatBox(props) {
    const [input, setInput] = useState('');
    const [isLoading, startLoader] = useState(false);
    const [chat, setChat] = useState({
        _id:props.id,
        conversations:[]
    });
    const [socket, setSocket] = useState(null);

    
    useEffect(() => {
        const newSocket = io(app.api);
        setSocket(newSocket);
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
        return () => newSocket.disconnect();
    }, [props.id]);

    if (socket) {
        socket.on("answer", () => {
        console.log("answered!");
        fetch(app.api+'chat/'+props.id,{
            method: 'GET'
            }).then(response => response.json())
            .then((Data) => {
                startLoader(false);
                if(Data.success){
                    setChat(Data.data);
                }
            })
            .catch((err) => {
            console.log(err.message);
            });
            });
      }


    var ask = (e) => {
        e.preventDefault();
        startLoader(true);
        socket.emit("ask", { _id: props.id, text: input });
        setInput("");
     };

     

return (
            <>
            {chat.conversations.length > 0 ? <img alt="logo" className={isLoading ? "appicon":null} src={app.icon} style={{height:30,margin:10}}/>:null}
            <div className="chat_board">
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
                        <img alt="logo" src={app.icon}  className={isLoading ? "appicon":null} style={{height:130,margin:16}}/>
                        <h3>{app.name}</h3>
                        <br/>
                        <h6><RiSunFill/> Examples</h6>
                        <SmallBox text="`Is it possible to teach machines ethics, empathy or compassion?`" />
                        <br/>
                        <SmallBox text="`Name three things you really want to recommend to me`" />
                        <br/>
                        <SmallBox text="`Who is the fastest man alive?`" />
                    </div>
                    }
                    <div className="gap"></div>
            </div>

            <div className="message_bar">     
                    <Form onSubmit={ask}>
                        <Form.Control className="maya-input" value={input} onSubmit={ask} onChange={e => setInput(e.target.value)} placeholder="Ask me anything" />
                    </Form>
            </div>
            </>
)
}


export default ChatBox;