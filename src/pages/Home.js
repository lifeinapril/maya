
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import ChatBox from '../components/Sections/ChatBox';

function Home() {
    const { param_id } = useParams();
    const [id, setID] = useState(null);
    useEffect(() => {
            if(param_id){
                setID(param_id);
            }else{
                fetch(demo.api+'chat/new',{
                    method: 'POST'
                    })
                    .then(response => response.json())
                    .then((Data) => {
                            if(Data.success){
                                setID(Data.data);
                            }
                    })
                    .catch((err) => {
                       console.log(err.message);
                    });
            }
      }, []);
                  
        return (
            <>
            <div className="d-center align-items-center justify-content-center text-center min-vh-100">
                        <Container>
                            <Row>
                                <Col md={3} lg={3} sm={false} xs={false}>  
                                </Col>
                                <Col md={6} lg={6} sm={12} xs={12}>  
                                    <ChatBox id={id} />
                                </Col> 
                                <Col md={2} lg={2} sm={false} xs={false}>  
                                </Col>
                            </Row>
                        </Container>
                        <Foot name={demo.name} icon={demo.icon}/>
            </div>
            </>
        );

}

export default Home;
