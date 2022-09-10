


import React from 'react';
import {
Container
} from 'react-bootstrap';

import "../../css/Jumbo.css";

const Display = (props) => {
return (
<Container fluid className='text-center border-curve light tint' style={{backgroundImage: `url(${props.image}`}}>
<br/>
<br/>
<br/>

        <h1 style={{fontSize:70}}>{props.title}</h1>
        <p>
        {props.body}
        </p>
        <p>
          <br/>
                {
                props.button ? props.button:null
                }
        </p>
        <br/>
        <br/>

</Container>

);

};

export default Display;
