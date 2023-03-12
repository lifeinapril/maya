
import React, { useState, useEffect } from "react";
import demo from "../Config";
import ChatBox from '../components/Sections/ChatBox';
import { ToastContainer, toast } from 'react-toastify';

function Chat(props) {
    const [chat, loadChat] = useState({conversations:[]});
    const notify = (msg) => toast(msg);
   
    function loadchat(data){
        loadChat(data);
    }

    useEffect(() => {
        if(props.id){
            console.log("props.id:");
            console.log(props.id);
            fetch(demo.api+'chat/'+props.id,{
                method: 'GET'
                }).then(response => response.json())
                .then((Data) => {
                    if(Data.success){
                        loadChat(Data.data);
                    }
                })
                .catch((err) => {
                notify(err.message);
                });
            }
    }, [props.id]);
                  
    return (
        <>
                <ToastContainer />
                <ChatBox messages={chat.conversations} user={props.user} id={props.id} loadChat={loadchat} dark={props.darkMode} inputMode={props.inputMode}  speechMode={props.speechMode}/>
        </>
    );

}

export default Chat;
