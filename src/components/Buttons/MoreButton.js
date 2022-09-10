import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class MoreButton extends React.Component{
  constructor(props) {
    super();
    this.state = {
        }
  }

  render(){

return (
            // <Link to={this.props.path}>
             <Button variant='green' as={Link} to={this.props.path || this.props.path.to} state={this.props.path.state ? this.props.path.state:null} size='md'>Learn More</Button>
            // </Link>

);

  }

};

export default MoreButton;
