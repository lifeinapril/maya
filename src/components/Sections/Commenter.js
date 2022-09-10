import React from 'react';
import {  Container,Row,Col } from 'react-bootstrap';
import "../../css/Commenter.css";
import CLient from '../Items/Client';

const Commenter = function(props) {
 
return (
<Container>
            <Row>
            {props.items ?
            props.items.slice(0,3).map(function(item,i){
                return(
                    <Col className='text-center' key={i} xs={12} md={4}>
                         <CLient key={i} image={item.image} comment={item.comment} name={item.name} from={item.from} />
                    </Col>
                )
            }):null}
            </Row>
</Container>
    
);

};



export default Commenter;
