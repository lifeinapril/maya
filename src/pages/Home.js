
import React, { useState, useEffect } from "react";
import { Col, Row } from 'react-bootstrap';
import demo from "../Config";
import ChatBox from '../components/Sections/ChatBox';
import HeadBar from "../components/Bars/HeadBar";

function Home() {
    const [id, setID] = useState(null);
    const [user, setUser] = useState(null);
    const [ip, setIP] = useState(null);

  useEffect(() => {
            fetch('https://api.ipify.org/?format=json')
            .then(response => response.json())
            .then(response => {
                        setIP(response.ip);
                        const account = localStorage.getItem('account');
                        if(account){
                            setUser(account);
                        }
                        const chatid = localStorage.getItem('chatID');
                        if(chatid){
                            setID(chatid);
                        }else{
                            const body={
                                ip:ip
                            };
                            if(user){
                                body.user=user._id;
                            }
                            fetch(demo.api+'chat/new',{
                                method: 'POST',
                                body:body
                                })
                                .then(response => response.json())
                                .then((Data) => {
                                        if(Data.success){
                                            setID(Data.data);
                                            localStorage.setItem('chatID',Data.data);
                                        }
                                })
                                .catch((err) => {
                                console.log(err.message);
                                });
                        }
            });
      }, []);
                  
        return (
            <>
            <HeadBar icon={demo.icon} name={demo.name}/>
            <Row className="bg-silver">
            <Col md={3} sm={false} xs={false}>     
            </Col>
            <Col md={6} sm={12}>  
                <ChatBox id={id} user={user}/>
            </Col> 
            <Col md={3} sm={false} xs={false}>  
            </Col>
            </Row>
            </>
        );

}

export default Home;
