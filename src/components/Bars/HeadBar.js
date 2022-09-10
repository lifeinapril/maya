import React from 'react';
import "../../css/Header.css";
import {
Navbar,
Container,
Nav
} from 'react-bootstrap';
import MayaInput from '../Items/MayaInput';
import Tray from '../Items/Tray';
import MiniBar from './Minibar';
import {RiVideoFill,RiPinDistanceFill,RiNewspaperFill,RiUserVoiceFill,RiImage2Fill,RiUserSearchFill} from "react-icons/ri";
import {BsIntersect} from "react-icons/bs";

class HeadBar extends React.Component{
  constructor(props) {
    super();
  }

  render(){

 
return (
<>
      <Navbar sticky="top" variant={this.props.dark ? "dark":"light"} expand="lg" className={this.props.dark ? 'bg-dark headbar':'bg-light headbar'}>
            <Navbar.Brand href="/">
            {this.props.icon ? 
            <>
                      <img
                        alt="logo"
                        src={this.props.icon}
                        style={{height:30,margin:"auto"}}
                      />&nbsp;{this.props.name}
            </>:null
              }

            </Navbar.Brand>
      <Navbar.Toggle/>
      {this.props.name ? 
        <>
        <MayaInput dark={this.props.dark}/>
        </>:null
      }
      <Container style={{margin:"auto"}}>
      </Container>
  <Navbar.Collapse>
     <Tray dark={this.props.dark} setTheme={this.props.setTheme}/>
  </Navbar.Collapse>
      </Navbar>

      {this.props.name ? 
      <>
      <MiniBar dark={this.props.dark} headerLinks={
        [
        { title: 'Voice', path: '#',icon:<RiUserVoiceFill/> },
        { title: 'Faces', path: '#',icon:<RiUserSearchFill/>  },
        { title: 'Content', path: '#',icon:<BsIntersect/> },
        { title: 'Places', path: '#',icon:<RiPinDistanceFill/> },
        { title: 'News', path: '#',icon:<RiNewspaperFill/> },
        { title: 'Entertainment', path: '#',icon:<RiVideoFill/> }
        ]
      }/>
      </>:null
      }
    </>

);

  }

};

export default HeadBar;
