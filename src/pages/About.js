import React from 'react';
import Brief from '../components/Sections/Brief';
import maya from "../App.json";
import LoginButton from '../components/Buttons/LoginButton';
import Slider from '../components/Sections/SliderBox';
import HeadBar from '../components/Bars/HeadBar';
import demo from "../Config";
import Bot from '../components/Items/Bot';
class About extends React.Component {
  render() {
        return (
            <>
             <HeadBar dark={this.props.dark} setTheme={this.props.setTheme} name={demo.name} icon={demo.icon}/>
  
                <Slider items={maya.slides}/>
                {
                maya.about.map(function(about,index){
                return (<Brief key={index} icon={about.icon} align={(index % 2) ? "text-right":"text-left"}  button={(index % 2) ? <LoginButton />:null}  full={false} dark={(index % 2) ? false:true} data={about} set={(index % 2) ? "first":"last"} image={about.image}/>)
                })
                }
            <Bot/>
            </>
        );
    }

}

export default About;
