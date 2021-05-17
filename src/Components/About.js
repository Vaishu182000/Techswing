import React, { userEffect, useEffect } from "react";
import { MDBContainer,MDBTypography, MDBRow, MDBCol, MDBBox, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
    useEffect(()=>{
        Aos.init({duration:2000,mirror: true},[]);
    })
    return(
        <div>
            <MDBContainer id="about">
                <MDBTypography tag="h1" variant="h1" className="text-center mt-5" colorText="blue-grey"><strong>About Us</strong></MDBTypography>
                <input type="range" className="custom-range" id="customRange1"/>
            </MDBContainer>
            <MDBContainer style={{marginTop:30}}>
                <MDBRow>
                    <MDBCol>
                        <MDBBox lg="12" style={{textAlign:"Justify"}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We handle Electronic System Hardware & Software Design for Automation Applications. We
offer embedded solutions for Industrial, Scientific, Defence and Electronic Warfare (EW). Our
professional staff is always at your service. We believe in constant improvement and
enhancement of our services to better serve our clients. Leverage our On-Demand Support and
flexible Maintenance Support Services. Make a head start with our Industry's best practice
Solutions. Let us help you gain greater value from your business.
                        </MDBBox>
                    </MDBCol>
                </MDBRow>
                <MDBRow style={{marginTop:30}}>
                    <MDBCol>
                    <MDBCard style={{ width: "30rem" }} border="default" className="aqua-gradient white-text" data-aos="fade-right">
                        <MDBCardBody>
                            <MDBCardTitle className="text-center" style={{fontWeight:"bold", fontSize:30}}>Semiconductor</MDBCardTitle>
                            <MDBCardText className="white-text" style={{fontWeight:"bold"}}>
                                <ul type="square">
                                    <li>Everything Post-Silicon</li>
                                    <li>Characterization / Post-Silicon Validation</li>
                                    <li>Production Test Engineering</li>
                                    <li>IC Evaluation Kits / Reference Designs</li>
                                </ul>
                            </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                    <MDBCard style={{ width: "30rem" }} border="default" className="aqua-gradient white-text" data-aos="fade-left">
                        <MDBCardBody>
                            <MDBCardTitle className="text-center" style={{fontWeight:"bold", fontSize:30}}>Platform Solutions</MDBCardTitle>
                            <MDBCardText className="white-text" style={{fontWeight:"bold"}}>
                                <ul type="square">
                                    <li>Code Less. Do More</li>
                                    <li>Test & Measurement Automation</li>
                                    <li>Embedded Systems, IoT Solutions</li>
                                    <li>Web Technologies & Data Analytics</li>
                                </ul>
                            </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                        <MDBCol sm="12">
                            <MDBCard className="p-3 m-2 mt-4 winter-neva-gradient" data-aos="zoom-out">
                                <MDBCardBody>
                                    <MDBCardText style={{fontWeight:"bold",fontSize:20}}>
                                    "We are dedicated to constant improvement and enhancement of our services. Each
client is a valued customer, and an opportunity for us to improve the delivery of our
services.”
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
        </div>
    );
};
export default About;