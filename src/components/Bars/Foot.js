import React from "react";
import {
Container
} from 'react-bootstrap';
import "../../css/Header.css";
class Foot extends React.Component{
  render(){
  return (
    <>
      <Container fluid className={`text-center padding footer`}>
           <br/>
           <small>&copy; {new Date().getFullYear()} Copyright: DeenDevs</small>
           <br/>
           <br/>
      </Container>
    </>
  );
  }
}

export default Foot;