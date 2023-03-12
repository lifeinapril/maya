/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Message from "../Items/Message";
import app from "../../Config";
import "../../css/Chat.css";
import SmallBox from "../Items/SmallBox";
import { RiSunFill} from "react-icons/ri";
import 'react-toastify/dist/ReactToastify.css';
import Text from "../Inputs/Text";
import Mic from "../Inputs/Mic";


function ChatBox(props) {
    const [isLoading, startLoader] = useState(false);
    
    
    useEffect(() => {
        const objDiv = document.getElementById("chat");
        objDiv.scrollTop = objDiv.scrollHeight+200;
    },[props.messages])

    

    function Speak(input) {
        console.log("text to speech ......");
        console.log(input);
        fetch('https://texttospeech.googleapis.com/v1beta1/text:synthesize', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer AIzaSyDp9FzWUtN3bhDHd-9V9_nP1rmejKo68CI`
         },
         body: JSON.stringify({
           input: { input },
           voice: { languageCode: 'en-US', ssmlGender: 'FEMALE' },
           audioConfig: { audioEncoding: 'MP3' }
         })
       }).then(response => response.json())
       .then((data) => {
        console.log("playing......");
        console.log(data);
         const audioUrl = URL.createObjectURL(`data:audio/mp3;base64,${data.audioContent}`);
         audioUrl.play();
       })
       .catch((err) => {
       console.log(err.message);
       });
     }


     
    function ask(id,question){
        if(!id){
            console.log("no chat");
            localStorage.removeItem("chatID");
        }else if(!question){
            console.log("no question");
        }else{
            startLoader(true);
            fetch(app.api+'ask',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body:JSON.stringify({_id:id, text: question})
                }).then(response => response.json())
                .then((Data) => {
                    startLoader(false);
                    if(Data.success){
                        props.loadChat(Data.data);
                        if(props.speechMode){
                            Speak(Data.data.conversations[Data.data.conversations.length-1].output);
                        }
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
                    {props.messages.length > 0 ?
                        props.messages.map(function(message,i){
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
            <div className={"footer "+(props.dark ? "bg-dark":"bg-light")}>     
                <div className="center_convo">
                {props.inputMode==="text" && (<Text action={ask} id={props.id} dark={props.dark} loading={isLoading}/>)}
                 {props.inputMode==="mic" && (<Mic action={ask} id={props.id} dark={props.dark} loading={isLoading}/>)}
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