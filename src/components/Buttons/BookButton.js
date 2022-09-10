import React,{useState} from 'react';
import "../../css/Buttons.css";
import {
Button,Offcanvas,Form,Alert
} from 'react-bootstrap';
import appicon from "../../logo.png";
import ilightct from "../../App.json";
import API from '../../API';

function BookButton(props){

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, selectService] = useState('');
  const [resBody, setBody] = useState({});
  

  const [Loading, startLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showAlert, setAlert] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendrequest = event => {
                                startLoading(true);
                                var data={
                                  full_name:name,
                                  phone:phone,
                                  email:email,
                                  service:service
                                };
                                API.post(`services/request`,data).then(res =>{
                                  console.log(res);
                                  console.log(data);
                                  setBody(res.data);
                                  setAlert(true);
                                  startLoading(false);
                                });
                                event.preventDefault();
                              }

return (
 <>

<Alert show={showAlert}  variant={resBody.status ? "success":""}>
  <Alert.Heading>{resBody.message}</Alert.Heading>
</Alert>



            <Button onClick={handleShow} variant="teal" href={props.path} size='lg'>Book Appointment</Button>
            <Offcanvas variant="dark" show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title style={{color:"teal"}}>Book Appointment</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                <div className='text-center padding'>
                            <img
                        alt="logo"
                        src={appicon}
                        style={{height:30}}
                        className="d-inline-block align-top"
                      />
                      <br/>
                      <br/>
                            <small>Please fill in the request form below, we would respond to you before 24 hours via email or phone call</small>
                          </div>

                <Form onSubmit={e => {sendrequest(e)}}>
                      
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" name='name' value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="tel"  name='phone' value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"  name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email/phone number with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Select a service</Form.Label>
                        <Form.Select  name='service' onChange={e => selectService(e.target.value)}>
                          {
                              ilightct.services.map(function(Item,Key){
                                    return( 
                                    <option key={Key} value={Item.title}>{Item.title}</option>
                                    )
                              })
                          }
                        </Form.Select>
                      </Form.Group>


                      <br/>
                      <Button disabled={Loading} variant="teal" size='lg' style={{width:"100%"}} type="submit">
                       {Loading ? "loading...":"Submit"}
                      </Button>
                    </Form>
                </Offcanvas.Body>
              </Offcanvas>
            </>

);

};

export default BookButton;
