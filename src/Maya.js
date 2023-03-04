

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

const Maya = function(){
  const [isLoading,setLoader] = useState(true);
  const [dark, setTheme] = useState(false);
    useEffect(()=>{
      setTimeout(() =>{
        setLoader(false);
      },4000);
    }, []);

return (
  <>
  {
  isLoading ?
  <TransitionGroup component={null}> 
  <CSSTransition classNames={"splash"} appear={isLoading} in={isLoading} timeout={600}>
       <>
          <Splash dark={dark} />
       </> 
  </CSSTransition>
  </TransitionGroup>
   :
     <>
     <BrowserRouter basename="/maya">
      <Routes>
      <Route path='/' element={<Home name={demo.name} setTheme={setTheme} icon={demo.icon} dark={dark}/>}/>
      <Route path='/:id' element={<Home name={demo.name} setTheme={setTheme} icon={demo.icon} dark={dark}/>}/>
      </Routes>
    </BrowserRouter>
  </>
}
</>
)

}
export default Maya;
