


import React from 'react';
import {
Container
} from 'react-bootstrap';

import "../../css/Jumbo.css";

const Jumbo = (props) => {
return (
<Container fluid className='box text-left' style={{backgroundImage: `url(${props.image}`}}>
<br/><br/>
      <br/><br/>
      <br/><br/>
        <b style={{fontSize:50,maxWidth:"600px"}}>{props.title}</b>
        <p style={{maxWidth:"600px"}}>
        {props.body}
        </p>
        <p>
          <br/>
                {
                props.button ? props.button:null
                }
        </p>

      <br/><br/>
      <br/><br/>
</Container>

);

};

export default Jumbo;
