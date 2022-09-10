import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class ActionButton extends React.Component{
  constructor(props) {
    super();
    this.state = {
        }
  }

  render(){

return (
            <>
            <Button as={Link} to={this.props.path} variant="red" size='lg'>{this.props.name}</Button>
            </>

);

  }

};

export default ActionButton;
