

import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Splash from './components/Sections/Splash';
import { BrowserRouter } from 'react-router-dom';
import demo from "./Config";
import 'bootstrap/dist/css/bootstrap.min.css';
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
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    setTimeout(() =>{
      setLoader(false);
    },4000);
    const account = localStorage.getItem('account');
    if(account){
        fetch(demo.api+'user/info',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'token': account,
              'appid': demo.token
            },
            body: JSON.stringify({ token: account })
          }).then(response => response.json())
          .then((Data) => {
            console.log("user:");
            console.log(Data);
              if(Data.success){
                setUser(Data.data);
              }else{
                setUser(null);
              }
          })
          .catch((err) => {
          console.log(err.message);
          });
    }
    }, []);

return (
  <>
  {
  isLoading ?
  <TransitionGroup component={null}> 
  <CSSTransition classNames={"splash"} appear={isLoading} in={isLoading} timeout={600}>
       <>
          <Splash dark={true} />
       </> 
  </CSSTransition>
  </TransitionGroup>
   :
     <>
     <BrowserRouter basename="/maya">
      <Routes>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/auth/:token' element={<Auth/>}/>
      <Route path='/' element={<Home user={user}/>}/>
      <Route path='/:id' element={<Home user={user}/>}/>
      </Routes>
    </BrowserRouter>
  </>
}
</>
)

}
export default Maya;
