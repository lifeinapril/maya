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
      <Navbar fixed="top" variant="dark" expand="lg" className="headbar bg-dark text-center justify-content-evenly">
            <a href="/" style={{marginTop:5}}>
                       <img
                        alt="logo"
                        src={this.props.icon}
                        style={{height:30,margin:"auto"}}
                      />
            </a>
      </Navbar>
    </>

);

  }

};

export default HeadBar;
