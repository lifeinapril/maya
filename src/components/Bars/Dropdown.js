import React from 'react';
import "../../css/Header.css";
import {
NavDropdown
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import  { FcPlus } from "react-icons/fc";

class DropDown extends React.Component{

  render(){
return (
    <>
<NavDropdown menuVariant='light' title={this.props.name}>
{this.props.list ?
this.props.list.map(function(Item,Key){
       return( 
       <NavDropdown.Item as={Link} to={'/service'} state={Item} className="dropitem" key={Key}>
        <FcPlus/> &nbsp;&nbsp; {Item.title}
       </NavDropdown.Item>
       )
}):null
}
</NavDropdown>
    </>
)

  }

}


export default DropDown;