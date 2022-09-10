import React from 'react';
import HeadBar from '../components/Bars/HeadBar';
import { Col, Container, Row } from 'react-bootstrap';
import Foot from '../components/Bars/Foot';
import demo from "../Config";


class Result extends React.Component {
  render() {
        return (
            <>
              <div  className={this.props.dark ? 'bg-dark':'bg-light'}>
            <div className="d-center align-items-center justify-content-center text-center min-vh-100">
            <HeadBar dark={this.props.dark} setTheme={this.props.setTheme}/>
                        <Container>
                            <Row>
                                <Col md={10} lg={10} sm={12} xs={12}>  

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

export default Result;
