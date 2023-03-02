
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Chat from '../components/Sections/Chat';
import { useParams } from "react-router-dom";

function Home(props) {
    const { param_id } = useParams();
    const [id, setID] = useState(null);
    useEffect(() => {
            if(param_id){
                setID(param_id);
            }else{
                fetch(props.api+'chat/new',{
                    method: 'GET',
                    headers: {'Content-type': 'application/json; charset=UTF-8',}
                    })
                    .then((Data) => {
                        console.log(Data.data);
                        setID(Data.data);
                    })
                    .catch((err) => {
                       console.log(err.message);
                    });
            }
      }, []);
                  
        return (
            <>
              <div  className={this.props.dark ? 'bg-dark':'bg-light'}>
            <div className="d-center align-items-center justify-content-center text-center min-vh-100">
                        <Container>
                            <Row>
                                <Col md={3} lg={3} sm={false} xs={false}>  
                                </Col>
                                <Col md={6} lg={6} sm={12} xs={12}>  
                                    <Chat api={props.api} id={id} />
                                </Col> 
                                <Col md={2} lg={2} sm={false} xs={false}>  
                                </Col>
                            </Row>
                        </Container>
                        <Foot bg={this.props.dark ? "light":null} name={demo.name} icon={demo.icon}/>
            </div>
            </div>
            </>
        );

}

export default Home;
