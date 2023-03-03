import React from "react";
import {
Container
} from 'react-bootstrap';
import "../../css/Header.css";
class Foot extends React.Component{
  render(){
  return (
    <>
      <Container className={`text-center padding footer`}>
           <small>&copy; {new Date().getFullYear()} Copyright: Deen Developers</small>
           <br/>
           <br/>
      </Container>
    </>
  );
  }
}

export default Foot;