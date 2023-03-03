import React from 'react';
import "../../css/Header.css";
import {
Navbar
} from 'react-bootstrap';

class HeadBar extends React.Component{
  constructor(props) {
    super();
  }

  render(){

 
return (
<>
      <Navbar fixed="top" variant="light" expand="lg" className="headbar bg-light text-center justify-content-evenly">
            <Navbar.Brand href="/" style={{textAlign: 'center'}}>
                       <img
                        alt="logo"
                        src={this.props.icon}
                        style={{height:30,margin:"auto"}}
                      />
                      <br/>
                      <small>{this.props.name}</small>
            </Navbar.Brand>
      </Navbar>
    </>

);

  }

};

export default HeadBar;
