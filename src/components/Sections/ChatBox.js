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
import Screen from "../Items/Screen";
import image1 from "../../images/art.jpeg";


function ChatBox(props) {
    const [isLoading, startLoader] = useState(false);
    
    
    useEffect(() => {
        if(props.messages){
            if(props.messages.length > 0){
            const objDiv = document.getElementById("chat");
            objDiv.scrollTop = objDiv.scrollHeight+200;
        }
    }
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


     
    function ask(question){
        if(!props.id){
            console.log("no chatID found");
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
                  body:JSON.stringify({_id:props.id, text: question})
                }).then(response => response.json())
                .then((Data) => {
                    startLoader(false);
                    if(Data.success){
                        props.loadChat(Data.data);
                        if(props.speechMode){
                            Speak(Data.data.conversations[Data.data.conversations.length-1].output);
                        }
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
                    <div  style={{margin:"auto",maxWidth:450,padding:10,marginTop:80}}>
                          {!props.user && (<Screen title="Maya" url={app.authurl} body="Need an assistant that understands your needs? From answering questions to performing tasks. Start a conversation with maya today." image={image1} icon={app.icon}/>)}
                      <div className="text-left">
                            <h6 className={props.dark ? "light":"dark"}><RiSunFill/> Examples</h6>
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
                    <br/>
                {props.inputMode==="text" && (<Text action={ask} dark={props.dark} loading={isLoading}/>)}
                 {props.inputMode==="mic" && (<Mic action={ask} dark={props.dark} loading={isLoading}/>)}
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