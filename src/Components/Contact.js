import React from 'react';
import fire from "./Firebase";
import Aos from 'aos';
import "aos/dist/aos.css";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBContainer, MDBTypography, MDBBox } from 'mdbreact';
class Contact extends React.Component{
  constructor(props){
    super(props);
    this.feedback=this.feedback.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.state={
      name:"",
      email:"",
      subject:"",
      message:""
    }
  }
  handleChange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  feedback(e){
    e.preventDefault();
    const db = fire.firestore();
        const userRef = db.collection("Feedback").add({
        name: this.state.name,
        email:this.state.email,
        subject:this.state.subject,
        message:this.state.message,
        });
  }
  componentDidMount(){
    Aos.init({
      duration : 1500,
      mirror: true
  });
  }
  render(){
    return(
      <MDBContainer style={{ marginTop:100 }} id="contact">
        <MDBContainer>
          <MDBTypography tag="h1" variant="h1" className="text-center pt-4 pb-2" colorText="blue-grey">Contact Us</MDBTypography>
        <input type="range" className="custom-range" id="customRange1"/>
      <MDBRow className="mx-auto">
        <MDBCol lg="5" md="12" className="mx-auto">
        <MDBBox className="justify-content-center align-items-center mx-auto mt-lg-5 pt-5">
          <div style={{display:"flex"}}>
            <MDBIcon icon="map-marker-alt" size="2x" className="grey-text pt-3" style={{marginRight:23}}/><MDBTypography tag="h4" variant="h4" colorText="grey">Techswing Solutions</MDBTypography>
          </div>
          <MDBTypography tag="h4" variant="h4" className="ml-5" colorText="grey">660-A6, Telugu Street,</MDBTypography>
          <MDBTypography tag="h4" variant="h4" className="ml-5" colorText="grey">Coimbatore, TN,</MDBTypography>
          <MDBTypography tag="h4" variant="h4" className="ml-5 pb-2" colorText="grey">India - 641001</MDBTypography>
          <hr className="hr-dark pt-2 pb-2"/>
          <div style={{display:"flex"}}>
          <MDBIcon icon="envelope" size="2x" className="grey-text" style={{marginRight:20}}/><MDBTypography tag="h4" variant="h4" colorText="grey">techswingsolutions@gmail.com</MDBTypography>
          </div>
          <hr className="hr-dark pt-2 pb-2"/>
          <div style={{display:"flex"}}>
          <MDBIcon icon="mobile-alt" size="2x" className="grey-text" style={{marginRight:20}}/><MDBTypography tag="h4" variant="h4" className="pb-5" colorText="grey">+91 94897 73812</MDBTypography>
          </div>
        </MDBBox>
        </MDBCol>
        <MDBCol lg="1"></MDBCol>
        <MDBCol lg="6" md="11">
        <MDBCard className="mt-3 pt-3 rare-wind-gradient">
              <MDBCardBody className="mx-3">
                <div className="text-center">
                  <h3 className="black-text mb-5"><strong>Contact</strong></h3>
                </div>
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong" success="right" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" name="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" name="subject" id="subject" onChange={this.handleChange} value={this.state.subject}/>
                <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
                <div className="text-center mb-1">
                  <MDBBtn type="button" style={{borderRadius:25, fontWeight:"bold", fontSize:"15px" }} className="ripe-malinka-gradient" onClick={this.feedback}>Send<MDBIcon far icon="paper-plane" size="1x" className="ml-1" /></MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol style={{ marginTop:70, textAlign:"center" }}>
          <iframe src="https://maps.google.com/maps?q=660,telugu%20street,coimbatore,TamilNadu,India&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style={{width:1000, height: 400}}/><a href="https://embedgooglemap.github.io"></a>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      </MDBContainer>
    );
  }
}
export default Contact;