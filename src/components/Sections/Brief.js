import React from 'react';
import {
Container,
Row,
Col
} from 'react-bootstrap';
import "../../css/Brief.css";
import List from '../Items/List';


class Brief extends React.Component {
    constructor(props) {
        super();
        this.ref = React.createRef();
      }
    
    render(){
        const bg={
            backgroundImage:`url(${this.props.image}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight:300,
            padding:70
        }

return (
   
<div className={this.props.dark ? 'brief-dark':'brief-light'}>
    <Container fluid style={this.props.full ? bg:null}>
        <Row className={this.props.align}>
            <Col  xs={12} sm={12} md={{span:6,order: this.props.set }} className={ this.props.dark ? 'brief-dark brief-round padding':'brief-light brief-round  padding'}>
                <br/><br/>
          
            <div ref={this.ref} className={"sec "+this.props.align}>
                   
                {
                this.props.icon ? (<div className={'brief-icon '+ (this.props.dark ? 'light':'dark')}>{this.props.icon}</div>):null
                }
               
                {
                    this.props.data.title ?
                    <div className='brief-head'>
                        <b className={this.props.dark ? 'light':'dark'}>{this.props.data.title}</b>
                    </div>:null
                }
                <br/>
                <div className='brief-body'>
                    <p className={this.props.dark ? 'light':'dark'}>
                    {this.props.data.body}
                    </p>
                </div>
                {
                this.props.list ? <List items={this.props.list}/>:null
                }
                <br/>
                {
                this.props.button ? this.props.button:null
                }
                    
                <br/>
                <br/>
            </div>
            </Col>
            <Col  xs={12} md={6} className={this.props.border ? `${this.props.border}`:null}  style={this.props.full ? null:bg}>
            </Col>
        </Row>  
    </Container>
</div>
);
            }

};

export default Brief;
