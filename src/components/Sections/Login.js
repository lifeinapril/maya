


import React from 'react';
import {
    Button,Form,FormLabel
} from 'react-bootstrap';

import "../../css/Form.css";

const Login = (props) => {
return (
    <>
     <Form className='text-left'>
           <Form.Group className="mb-3">
               <Form.Label>Email</Form.Label>
               <br/>
               <input name='email' type="email" />
           </Form.Group>
           <Form.Group className="mb-3">
               <FormLabel>Password</FormLabel>
               <br/>
               <input name='password' type="password" />
           </Form.Group>
           <Form.Group className="mb-3">
               <Button variant='dark'>Login</Button>
           </Form.Group>
       </Form>
</>

);

};

export default Login;
