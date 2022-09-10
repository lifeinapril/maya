import React from 'react';
import {Button,Row,Col,Stack} from 'react-bootstrap';
import {RiAccountCircleFill,RiApps2Fill} from "react-icons/ri";
import SettingsButton from '../Buttons/SettingsButton';
import "../../css/Header.css";

const Tray = (props) => {
return (
<div>
<Stack direction="horizontal" gap={3}>
 <SettingsButton dark={props.dark} setTheme={props.setTheme}/>
  <Button variant={props.dark ? 'transparent':null}>
  <RiApps2Fill/> 
  </Button>
  <Button variant={props.dark ? 'transparent':null}>
  <RiAccountCircleFill/>
  </Button>
</Stack>
</div>
)
}


export default Tray;