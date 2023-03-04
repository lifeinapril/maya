
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import demo from "../Config";
import ChatBox from '../components/Sections/ChatBox';
import HeadBar from "../components/Bars/HeadBar";
import SmallBox from "../components/Items/SmallBox";

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
            <HeadBar icon={demo.icon} name={demo.name}/>
            <Row>
            <Col md={3} sm={false} xs={false}>     
            </Col>
            <Col md={6} sm={12}>  
                <ChatBox id={id} />
            </Col> 
            <Col md={3} sm={false} xs={false}>  
            </Col>
            </Row>
            </>
        );

}

export default Home;
