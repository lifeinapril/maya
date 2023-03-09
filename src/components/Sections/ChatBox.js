/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import Message from "../Items/Message";
import app from "../../Config";
import "../../css/Chat.css";
import SmallBox from "../Items/SmallBox";
import {RiSendPlane2Fill, RiSunFill} from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ChatBox(props) {
    const [input, setInput] = useState('');
    const [body, setBody] = useState();
    const [isLoading, startLoader] = useState(false);
    const [chat, setChat] = useState({conversations:[]});
    
    useEffect(() => {
        const objDiv = document.getElementById("chat");
        objDiv.scrollTop = objDiv.scrollHeight+200;
    },[chat])
    
    useEffect(() => {
        setBody({ _id: chat._id, text: input });
    },[input]);

        useEffect(() => {
            if(props.id){
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
               notify(err.message);
            });
        }
    }, [props.id]);

    const notify = (msg) => toast(msg);

    var ask = (e) => {
        e.preventDefault();
        if(!chat._id || !input){
            console.log("no chat");
            localStorage.removeItem("chatID");
        }else{
            startLoader(true);
            console.log("Body:");
            console.log(body);
            fetch(app.api+'ask',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify(body)
                }).then(response => response.json())
                .then((Data) => {
                    setInput("");
                    startLoader(false);
                    console.log("Asked:");
                    console.log(Data);
                    notify(Data.message);
                    if(Data.success){
                        setChat(Data.data);
                    }else{
                        localStorage.removeItem("chatID");
                    }
                })
                .catch((err) => {
                console.log(err.message);
                });
        }
     };

     

return (
            <>
            <div className={"chat_board "+(props.dark ? "grade-dark":"grade-white")} id="chat">
                <div className="center_convo">
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
                    <div className={props.dark ? "bg-dark":"bg-light"} style={{margin:"auto",maxWidth:450,padding:10}}>
                        {/* <img alt="logo" src={app.icon}  className={isLoading ? "appicon":null} style={{height:50,margin:16}}/>
                        <h3>{app.name}</h3>
                        <br/> */}
                        <div className="text-left">
                            <h6><RiSunFill/> Examples</h6>
                        </div>
                        <SmallBox dark={props.dark} text="`Is it possible to teach machines ethics, empathy or compassion?`" />
                        <br/>
                        <SmallBox dark={props.dark} text="`Name three things you really want to recommend to me`" />
                        <br/>
                        <SmallBox dark={props.dark} text="`Who is the fastest man alive?`" />
                    </div>
                    }
                    <div className="gap"></div>
                </div>
            </div>   
            <ToastContainer />
            <div className={"footer "+(props.dark ? "bg-dark":"bg-light")}>     
                <div className="center_convo">
                        <Form onSubmit={ask}>
                                <div className="input-group">
                                <Form.Control className={"maya-input "+(props.dark ? "bg-grey":"bg-light")} disabled={isLoading} value={input} onChange={e => setInput(e.target.value)} placeholder="Ask me anything" />
                                <Button disabled={isLoading || !input} variant="clear" type="submit" size='lg'>
                                    {isLoading ? (
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
                        <div className="text-center">
                            <small style={{fontSize:13}}>
                                &copy; {new Date().getFullYear()} Copyright: DeenDevs. Designed for learning & development
                            </small>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                </div>
            </div>
            </>
)
}


export default ChatBox;