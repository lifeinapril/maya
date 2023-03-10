
import React, { useState, useEffect } from "react";
import demo from "../Config";
import ChatBox from '../components/Sections/ChatBox';
import HeadBar from "../components/Bars/HeadBar";

function Home(props) {
    const [id, setID] = useState(null);
    const [user, setUser] = useState(null);
    const [ip, setIP] = useState(null);
    const [body,setBody] = useState({ip:ip});
    const [dark_mode,changeMode] = useState(true);


    var Mode=function(){
        changeMode(!dark_mode);
        localStorage.setItem('mood',dark_mode);
    }
    var clearChat=function(){
        setID(null);
        localStorage.removeItem('chatID');
    }
   
    useEffect(() => {
                changeMode(localStorage.getItem('mood'));
    }, []);

  useEffect(() => {
            fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then(response => {
                        setIP(response.ip);
                        const account = localStorage.getItem('account');
                        if(account){
                            setUser(account);
                        }
                        const chatid = localStorage.getItem('chatID');
                        if(chatid){
                            setID(chatid);
                        }else{
                            if(user){
                                setBody({user:user._id,ip:ip})
                            }
                            fetch(demo.api+'chat/new',{
                                method: 'POST',
                                body:body
                                })
                                .then(response => response.json())
                                .then((Data) => {
                                        if(Data.success){
                                            setID(Data.data);
                                            localStorage.setItem('chatID',Data.data);
                                        }
                                })
                                .catch((err) => {
                                console.log(err.message);
                                });
                        }
            });
      }, [id]);
                  
        return (
            <>
                <HeadBar icon={demo.icon} name={demo.name} dark={dark_mode} user={props.user} changeMode={Mode} clearChat={clearChat}/>
                <ChatBox id={id} dark={dark_mode} user={props.user}/>
            </>
        );

}

export default Home;
