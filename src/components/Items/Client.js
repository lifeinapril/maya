import React from 'react';
import { Col} from 'react-bootstrap';
import Avatar from 'react-avatar';
import { MDBTypography } from 'mdb-react-ui-kit';
import "../../css/Box.css"

const CLient = function(props) {
 
return (
  <Col className='text-left padding'>
      <MDBTypography blockquote style={{maxWidth:700,margin:"auto"}}>
        <i>
          `{props.comment}`
          </i>
      </MDBTypography>
      <br/>
      <br/>
      <Col className="text-left">
        <Avatar className='avatar' src={props.image} round={true} size="40" name={props.name}/> 
        &nbsp;&nbsp;<b> {props.name} </b>
        <small>
          {props.from}
        </small>
      </Col>
  </Col>
    
);

};



export default CLient;
