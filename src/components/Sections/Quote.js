import React from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';
import "../../css/Quote.css";
import "../../css/Custom.scss";

 class Quote extends React.Component {
     render(){
  return (
    <figure className='text-center padding'>
      <MDBTypography blockquote style={{maxWidth:700,margin:"auto"}}>
        <h1>{this.props.body}</h1>
      </MDBTypography>
      <br/><br/>
      <figcaption className='blockquote-footer mb-0'>
        {this.props.by} <cite title='Source Title'>{this.props.source}</cite>
      </figcaption>
    </figure>
  );
}
 }

export default Quote;