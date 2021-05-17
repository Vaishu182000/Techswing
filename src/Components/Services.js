import React from "react";
import { MDBContainer, MDBTypography, MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol, MDBCardText, MDBCardImage } from "mdbreact";
import fire from "./Firebase";
import Aos from 'aos';
import "aos/dist/aos.css";
class Services extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        };
    }
    componentDidMount(){
        const db=fire.firestore();
        db.collection("Services")
        .get()
        .then(querySnapshop=>{
            const data=querySnapshop.docs.map(doc=>{
                const d={
                    id:doc.id,
                    ...doc.data(),
                }
                return d;
            });
            this.setState({ users: data });
        });
        Aos.init({
            duration : 1500,
            mirror: true
        });
    }
    render(){
        const { users } = this.state;
        return(
            <div>
                <MDBContainer id="services">
                    <MDBTypography tag="h1" variant="h1" className="text-center mt-5" colorText="blue-grey"><strong>Services</strong></MDBTypography>
                    <input type="range" className="custom-range" id="customRange1"/>
                </MDBContainer>
                <MDBContainer style={{marginTop:30}}>
                    <MDBRow
                        justify="flex-start"
                        alignItems="flex-start"
                        style={{marginTop:40}}
                    >
                        {users.map(user=>(
                            <MDBCol md="4" style={{ maxWidth: "22rem", margin:10 }}>
                                <MDBCard narrow style={{height:500}} data-aos="zoom-in">
                                    <MDBCardBody>
                                        <MDBCardImage hover top className="img-fluid" waves src={user.Img} style={{height:200}}/>
                                        <MDBCardTitle style={{marginTop:20}}>{user.Service}</MDBCardTitle>
                                        <MDBCardText style={{marginTop:20, paddingBottom:25, textAlign:"justify"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.Description}</MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))}
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}
export default Services;