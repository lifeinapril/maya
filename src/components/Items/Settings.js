
import React, { useState, useEffect } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { RiMoonFill,RiChatDeleteFill } from "react-icons/ri";

function Settings() {
  
        return (
            <>
<ListGroup as="ol">
<br/>
<br/>
<br/>
<small style={{margin:10}}><b>settings</b></small>
<hr/>
<ListGroup.Item as="li" className="d-flex bg-dark justify-content-between align-items-start">
  <small> <RiChatDeleteFill/>&nbsp;&nbsp;&nbsp;Clear conversation </small> 
</ListGroup.Item>
<ListGroup.Item as="li" className="d-flex bg-dark justify-content-between align-items-start">
  <small> <RiMoonFill/>&nbsp;&nbsp;&nbsp;Dark Mode</small> 
</ListGroup.Item>
</ListGroup>

</>
        );

}




export default Settings;
