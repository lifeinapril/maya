import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MayaIcon from '../Items/MayaIcon';


class LoginButton extends React.Component{
  constructor(props) {
    super();
    this.state = {
        path:""
        }
  }

  render(){

return (
            <>
            <Button as={Link} to={this.state.path} variant="light" size='lg'>Login with Maya&nbsp;<MayaIcon/></Button>
            </>

);

  }

};

export default LoginButton;
