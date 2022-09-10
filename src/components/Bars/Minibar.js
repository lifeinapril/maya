import React from 'react';
import "../../css/Header.css";
import {
Navbar,Nav,
Container
} from 'react-bootstrap';

class MiniBar extends React.Component{
  constructor(props) {
    super();
  }

  render(){

 
return (
      <Navbar variant={this.props.dark ? "dark":"light"} className={this.props.dark ? 'mini-dark minibar':'mini-light minibar'}>
      <Container fluid  className="justify-content-between">

    <Navbar.Collapse id="minibar">
                <Navbar.Text>Built for &nbsp;&nbsp;</Navbar.Text>
                {this.props.headerLinks ?
                this.props.headerLinks.map(function(Link,i){
                    return(  
                        <Nav  key={i}>
                        <Nav.Link  key={i} href={Link.path}  className={({ isActive }) => (isActive ? "link-active" : "link")} activeStyle={{color:'orange'}} to={Link.path}>
                        &nbsp;{Link.icon} &nbsp;{Link.title} &nbsp; &nbsp;
                        </Nav.Link>
                        </Nav>
                    )
                }):null
                }

           </Navbar.Collapse>

        </Container>
      </Navbar>
);

  }

};

export default MiniBar;
