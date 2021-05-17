import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBTypography } from 'mdbreact';
import homeimage from './Images/Home.jpg';
import Vision from './Images/Vision1.jpg';
import Mission from './Images/Mission.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
class Home extends React.Component{
    componentDidMount(){
        Aos.init({
            duration : 1500,
            mirror: true
        });
    }
    render(){
        return(
            <MDBContainer fluid style={{ marginTop:85 }} id="home">
                <div className="img-gradient">
                <img src={homeimage} alt="home" width="100%" height="500px" />
                </div>
                <MDBContainer>
                <MDBTypography tag="h1" variant="h1" className="text-center mt-5" colorText="blue-grey"><strong>Welcome to Techswing Solutions</strong></MDBTypography>
                <input type="range" className="custom-range" id="customRange1"/>
                </MDBContainer>
                <MDBContainer className="mt-5">
                        <MDBRow className="mx-auto">
                        <MDBCol lg="8" md="12" sm="12" className="mx-auto">
                        <MDBCard border="default" className="aqua-gradient white-text" data-aos="fade-right">
                        <MDBCardBody>
                            <MDBCardTitle className="text-center" style={{fontWeight:"bold", fontSize:30}}>Vision</MDBCardTitle>
                            <MDBCardText className="white-text" style={{fontWeight:"bold", textAlign:"Justify"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Technology Solutions Provider with standards to set industry benchmarks. A Preferred Long
Term Partner, through creation of high-value for all its associates. An Enriching work place for
employees to excel & grow through process oriented innovation & team work.Responsibility and
sustainability are part of this set of values and thus of our actions.We are motivated by the
desire to develop products that are “Invented for life,” that spark enthusiasm, that improve
quality of life, and that help conserve natural resources.
                            </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                        <MDBCol lg="4" md="12" sm="12" data-aos="zoom-in-left">
                            <img src={Vision} alt="Vision" style={{ height:"212px" }} />
                        </MDBCol>
                        </MDBRow> 
                </MDBContainer>
                <MDBContainer className="mt-5">
                    <MDBRow className="mx-auto">
                    <MDBCol lg="4" md="12" sm="12" data-aos="zoom-in-right">
                            <img src={Mission} alt="Mission" style={{ height:"200px" }} />
                        </MDBCol>
                        <MDBCol lg="8" md="12" sm="12" className="mx-auto">
                        <MDBCard border="default" className="aqua-gradient white-text" data-aos="fade-left">
                        <MDBCardBody>
                            <MDBCardTitle className="text-center" style={{fontWeight:"bold", fontSize:30}}>Mission</MDBCardTitle>
                            <MDBCardText className="white-text" style={{fontWeight:"bold", textAlign:"Justify"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To create sustainable growth with long lasting & high value returns to all stake holders. To
Deliver the best possible reliable system solutions to help our clients improve efficiency,
business Profitability & protecting precious natural resources.Our mission statement reflects
this. It summarizes our values, our strengths, and our strategic orientation.The mission is based
on seven central values, which shape our corporate culture – ranging from a focus on the future
and earnings to cultural diversity.
                            </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer className="mt-5">
                    <MDBRow>
                        <MDBCol lg="4" md="12" sm="12">
                            <MDBCard className="p-1 pb-2 m-2 heavy-rain-gradient" data-aos="fade-right">
                                <MDBCardBody>
                                    <MDBCardTitle className="text-center">Values</MDBCardTitle>
                                    <MDBCardText style={{fontSize:18, textAlign:"Justify"}}>Integrity & Excellence – we do things ethically and aim to be the best at what we do.</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="4" md="12" sm="12">
                            <MDBCard className="p-1 pb-2 m-2 heavy-rain-gradient" data-aos="zoom-out">
                                <MDBCardBody>
                                    <MDBCardTitle className="text-center">Culture</MDBCardTitle>
                                    <MDBCardText style={{fontSize:18, textAlign:"Justify"}}>We are open and respectful, confident and humble, take freedom with responsibility.</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="4" md="12" sm="12">
                            <MDBCard className="p-1 pb-2 m-2 heavy-rain-gradient" data-aos="fade-left">
                                <MDBCardBody>
                                    <MDBCardTitle className="text-center">Delight</MDBCardTitle>
                                    <MDBCardText style={{fontSize:18, textAlign:"Justify"}}>We measure our success in terms of delight, our customer’s and our team’s.</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol sm="12">
                            <MDBCard className="p-3 m-2 mt-4 winter-neva-gradient" data-aos="zoom-out">
                                <MDBCardBody>
                                    <MDBCardText style={{fontWeight:"bold",fontSize:20, textAlign:"Justify"}}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our products and services are designed to spark enthusiasm, improve
quality of life, and help conserve natural resources. We want to deliver
top quality and reliability. In short: we want to create technology that is
“Invented for life.”
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBContainer>
        );
    }
}
export default Home;