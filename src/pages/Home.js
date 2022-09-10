import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import MayaInput from '../components/Items/MayaInput';
import { Col, Container, Row } from 'react-bootstrap';
import Foot from '../components/Bars/Foot';
import demo from "../Config";
import Bot from '../components/Items/Bot';


class Home extends React.Component {
  render() {
        return (
            <>
              <div  className={this.props.dark ? 'bg-dark':'bg-light'}>
            <div className="d-center align-items-center justify-content-center text-center min-vh-100">
            <HeadBar dark={this.props.dark} setTheme={this.props.setTheme}/>
                      <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <img alt="logo" src={this.props.icon} style={{height:130,margin:16}}/>
                        <h3>{this.props.name}</h3>
                        <br/>
                        <Container>
                            <Row>
                                <Col md={3} lg={3} sm={false} xs={false}>  
                                </Col>
                                <Col md={6} lg={6} sm={12} xs={12}>  
                                    <MayaInput />
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

}

export default Home;
