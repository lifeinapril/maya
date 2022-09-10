import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../css/Slider.css";
import maya from "../../App.json";
import MayaIcon from '../Items/MayaIcon';

const Slider = function(props) {
    return(
    <Carousel controls={false} loop={true} autoPlay={true} interval={4000}>
        {maya.slides ?
        maya.slides.map(function(slide,i){
                return(
                <Carousel.Item key={i} style={{backgroundImage: `url(${slide.image}`}}>
                    <div className='slider-caption'>
                        <h4>{slide.title}</h4>
                        <div className='slider-body'>
                            <MayaIcon spin={true} variant="light"/>&nbsp;&nbsp;{slide.body}
                        </div>
                    </div>
                </Carousel.Item>
            )
        }):null}
    </Carousel>
    );

};



export default Slider;
