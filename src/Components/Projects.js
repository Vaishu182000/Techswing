import React from "react";
import {  MDBContainer,MDBRow, MDBTypography, MDBCol, MDBBox } from "mdbreact";
import fire from "./Firebase";
import Aos from 'aos';
import "aos/dist/aos.css";
class Projects extends React.Component{
        constructor(props){
                super(props);
                this.state={
                        users:[]
                };
        }
        componentDidMount(){
                const db=fire.firestore();
                db.collection("Project")
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
                                <MDBContainer id="project">
                                        <MDBTypography tag="h1" variant="h1" className="text-center mt-5" colorText="blue-grey"><strong>Projects</strong></MDBTypography>
                                        <input type="range" className="custom-range" id="customRange1"/>
                                </MDBContainer>
                                {users.map(user=>(
                                        <MDBContainer style={{marginTop:30}}>
                                       { user.id % 2 === 0 ?(
                                        <MDBRow>
                                                <MDBCol lg="8" md="12" sm="12">
                                                        <MDBBox data-aos="fade-right" data-aos-id="super-duper">
                                                        <MDBTypography variant="h1" tag="h1">{user.Project_Name}</MDBTypography>  
                                                        <MDBTypography variant="h3" tag="h3">{user.Company_Name}</MDBTypography> 
                                                        <MDBTypography variant="p" tag="p" style={{textAlign:"justify"}}>&nbsp;&nbsp;&nbsp;&nbsp;{user.Description}</MDBTypography>
                                                        </MDBBox>
                                                </MDBCol>
                                                <MDBCol lg="4" md="12" sm="12" data-aos="fade-left">
                                                <img src={user.Img} alt="project2"/>
                                                </MDBCol>
                                        </MDBRow>
                                       )
                                        :
                                        (
                                        <MDBRow>
                                                <MDBCol lg="4" md="12" sm="12" data-aos="fade-right">
                                                        <img src={user.Img} alt="project2"/>
                                                </MDBCol>
                                                <MDBCol lg="8" md="12" sm="12">
                                                        <MDBBox data-aos="fade-left">
                                                        <MDBTypography variant="h1" tag="h1">{user.Project_Name}</MDBTypography>  
                                                        <MDBTypography variant="h3" tag="h3">{user.Company_Name}</MDBTypography> 
                                                        <MDBTypography variant="p" tag="p" style={{textAlign:"justify"}}>&nbsp;&nbsp;&nbsp;&nbsp;{user.Description}</MDBTypography>
                                                        </MDBBox>
                                                </MDBCol>
                                        </MDBRow>
                                        )}
                                        </MDBContainer>
                                ))}
                        </div>
                );
        }
}
export default Projects;