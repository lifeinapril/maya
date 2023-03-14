

import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import HeadBar from "./components/Bars/HeadBar";
import Settings from './components/Items/Settings';
import Splash from './components/Sections/Splash';
import { BrowserRouter } from 'react-router-dom';
import demo from "./Config";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas } from 'react-bootstrap';
import './App.css';
import './css/Splash.css';
import {CSSTransition,TransitionGroup} from "react-transition-group"; 
import ReactGA from 'react-ga';
import Auth from './pages/Auth';


const TRACKING_ID = "UA-198127599-2"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
const Maya = function(){
  const [user , setUser ] = useState(null);
  const [isLoading,setLoader] = useState(true);
  const [settings,changeSettings] = useState({dark:true,mode:"text",speak:false,voice:110});//147
  const [show , showSettings ] = useState(false);
  const [chatid, setID] = useState();
  const [ip, setIP] = useState(null);

  const CloseSettings = () => showSettings(false);
  const openSettings = () => showSettings(true);


  useEffect(() => {
    console.log('settings changed');
  }, [settings]);

  var changeMode=function(){
    settings.dark=!settings.dark;
    changeSettings(settings);
    CloseSettings();
    localStorage.setItem("settings",settings);
}

var changeInput=function(value){
  settings.mode=value;
  if(value==="mic"){
    settings.speak=true;
  }
  changeSettings(settings);
  CloseSettings();
  localStorage.setItem("settings",settings);
}

var clearChat=function(){
  setLoader(true);
  localStorage.removeItem('chatID');
  CloseSettings();
}


var changeSpeech=function(value){
  settings.speak=value;
  console.log(value);
  changeSettings(settings);
  localStorage.setItem("settings",settings);
  CloseSettings();
}

var changeVoice=function(value){
  settings.voice=value;
  changeSettings(settings);
  CloseSettings();
  localStorage.setItem("settings",settings);
}


  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const token = localStorage.getItem('account');
    fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(response => {
      setIP(response.ip);
    }).catch((err)=>{
      console.log(err.message);
    });
                  if(token){
                      fetch(demo.api+'user/info',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'token': token
                          },
                          body: JSON.stringify({ token: token })
                        }).then(response => response.json())
                        .then((Data) => {
                          setLoader(false);
                            if(Data.success){
                              setUser(Data.data);
                            }else{
                              setUser(null);
                            }
                        })
                        .catch((err) => {
                        console.log(err.message);
                        });
                      fetch(demo.api+'user/chat/'+token,{
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'token': token
                          }
                        })
                        .then(response => response.json())
                        .then((Data) => {
                          console.log("foundddddd");
                                if(Data.data){
                                    setID(Data.data);
                                    localStorage.setItem('chatID',Data.data);
                                }else{
                                    console.log("creating new chat!");
                                    setLoader(true);
                                    fetch(demo.api+'chat/new',{
                                      method: 'POST',
                                      body:JSON.stringify({user:token})
                                      })
                                      .then(response => response.json())
                                      .then((Data) => {
                                        setLoader(false);
                                        console.log(Data);
                                              if(Data.success){
                                                  setID(Data.data);
                                                  localStorage.setItem('chatID',Data.data);
                                              }
                                      })
                                      .catch((err) => {
                                      console.log(err.message);
                                      });
                                }
                        })
                  }else{
                    console.log("no account");
                    if(localStorage.getItem('chatID')){
                        setID(localStorage.getItem('chatID'));
                    }else{
                      console.log("creating new chat!");
                      setLoader(true);
                      fetch(demo.api+'chat/new',{
                        method: 'POST',
                        body:JSON.stringify({ip:ip})
                        })
                        .then(response => response.json())
                        .then((Data) => {
                          setLoader(false);
                          console.log(Data);
                                if(Data.success){
                                    setID(Data.data);
                                    localStorage.setItem('chatID',Data.data);
                                }
                        })
                        .catch((err) => {
                        console.log(err.message);
                        });
                      }
                  }
setLoader(false);
},[]);



return (
  <>
  {
  isLoading ?
  <TransitionGroup component={null}> 
  <CSSTransition classNames={"splash"} appear={isLoading} in={isLoading} timeout={600}>
       <>
          <Splash dark={settings.dark} />
       </> 
  </CSSTransition>
  </TransitionGroup>
   :
     <>
     <BrowserRouter basename="/maya">

     <Offcanvas className={settings.dark ? "offcanvas-dark":"offcanvas-light"} show={show} onHide={CloseSettings} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Settings</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Settings changeMode={changeMode} user={user} changeInput={changeInput} clearChat={clearChat} changeSpeech={changeSpeech} changeVoice={changeVoice} dark={settings.dark}  voiceMode={settings.voice}  inputMode={settings.mode}  speechMode={settings.speak}/>
          </Offcanvas.Body>
     </Offcanvas>
     <HeadBar icon={demo.icon} name={demo.name} user={user} dark={settings.dark} openSettings={openSettings}/>
      <Routes>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/auth/:token' element={<Auth/>}/>
      <Route path='/' element={<Chat user={user} id={chatid} voiceMode={settings.voice} inputMode={settings.mode} speechMode={settings.speak} darkMode={settings.dark}/>}/>
      </Routes>
    </BrowserRouter>
  </>
}
</>
)

}
export default Maya;
