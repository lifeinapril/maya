import React from 'react';
import "../../css/Section.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
class Section extends React.Component {
    constructor(props) {
        super();
      }
    render(){
return (
   <> 
        <Row className={"hidden-md hidden-lg maya-section " + (this.props.dark ? 'section-dark':'section-light')}>
                {this.props.info ? this.props.info:null}
        </Row>  
    </>
)
            }

};

export default Section;
