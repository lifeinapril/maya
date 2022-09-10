


import React from 'react';
import {
Image, Card
} from 'react-bootstrap';
import "../../css/Box.css";


const Fill = (props) => {
return (
<Image as={Card}
src={props.image}
style={{height:50,margin:"auto"}}
/>
);
};

export default Fill;
