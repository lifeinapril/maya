import React,{useState} from 'react';
import {
Modal,Image,Figure
} from 'react-bootstrap';



function FigureItem(props) {
    const [show, setShow] = useState(false);
  
    return (
      <>

<Figure height={200} style={{marginTop:30}}  onClick={() => setShow(true)}>
    {props.image ? <Figure.Image bg="bg-light" style={{height:200}} variant="dark" src={props.image} />:null}
</Figure>


<Modal bg="dark"
  size="lg"
  show={show}
  onHide={() => setShow(false)}
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
    <Image style={{width:"100%"}} src={props.image} />
</Modal>

</>
    )

}


export default FigureItem;
