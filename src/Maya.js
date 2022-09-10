

import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Splash from './components/Sections/Splash';
import demo from "./Config";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/Splash.css';
import {CSSTransition,TransitionGroup} from "react-transition-group";
import Auth from './pages/Auth';
import Result from './pages/Result';
import Apps from './pages/Apps';
import Profile from './pages/Profile';

const Maya = function(props){
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
  <Router>
      <Routes>
      <Route path='/' element={<Home name={demo.name} setTheme={setTheme} icon={demo.icon} dark={dark}/>}/>
      <Route path='/auth' element={<Auth name={demo.name} setTheme={setTheme} icon={demo.icon} dark={dark}/>}/>
      <Route path='/:query' element={<Result name={demo.name} setTheme={setTheme} icon={demo.icon} dark={dark}/>}/>
      <Route path='/apps' element={<Apps name={demo.name} setTheme={setTheme} icon={demo.icon} dark={dark}/>}/>
      <Route path='/profile' element={<Profile name={demo.name} setTheme={setTheme} icon={demo.icon} dark={dark}/>}/>
      </Routes>
  </Router>
  </>
}
</>
)

}
export default Maya;
