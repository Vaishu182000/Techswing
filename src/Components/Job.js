import React from "react";
import fire from "./Firebase";
import logo from "./Images/logo.jpg";
import Aos from 'aos';
import "aos/dist/aos.css";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBCard, MDBCardImage, MDBCardTitle, MDBCardBody, MDBBtn,  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBCardText, MDBInput } from "mdbreact";
class Job extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.apply=this.apply.bind(this);
        this.state = {
          users: [],
          modal: false,
          name:"",
          email:"",
          phone:"",
          job:"",
          specilization:"",
          experience:"",
          expcompany:""
        };
      }
      handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    apply(e){
        e.preventDefault();
        const db = fire.firestore();
        const userRef = db.collection(this.state.job).add({
            Name:this.state.name,
            Email:this.state.email,
            Phone_Number:this.state.phone,
            Specilization:this.state.specilization,
            Experience:this.state.experience,
            Company_Worked:this.state.expcompany
        });
        alert("Thank You for applying in Techswing!!\n You will be notified if your selected for further activities")
    }
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      componentDidMount() {
        const db = fire.firestore();
            db.collection("Job Availability")
            .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {
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
          const { users }= this.state;
          return(
              <div>
                  <MDBContainer style={{ marginTop:100 }} id="job">
                    <MDBTypography tag="h1" variant="h1" className="text-center pt-4 pb-2" colorText="blue-grey">Job Availability</MDBTypography>
                    <input type="range" className="custom-range" id="customRange1"/>
                  </MDBContainer>
                  <MDBContainer>
                      <MDBRow 
                        justify="flex-start"
                        alignItems="flex-start"
                        style={{marginTop:50}}
                      >
                          {users.map(user=>(
                              <MDBCol md="4" style={{ maxWidth: "22rem", margin:10 }}>
                                  <MDBCard narrow style={{height:450}}>
                                      <MDBCardImage hover top style={{height:200}} className="img-fluid" src={user.Img} waves/>
                                      <MDBCardTitle style={{margin:15, textAlign:"center"}}>{user.Job}</MDBCardTitle>
                                      <MDBCardBody style={{textAlign:"center"}}>
                                          <MDBCardText>Qualification : {user.Qualification}</MDBCardText>
                                          <MDBCardText>Experience : {user.Experience}</MDBCardText>
                                          <MDBBtn onClick={this.toggle}>Apply</MDBBtn>
                                          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                            <MDBModalHeader toggle={this.toggle}>
                                            <MDBCardImage src={logo} className="img-fluid" waves hover top></MDBCardImage>
                                                Apply For A Job At Techswing Solutions
                                            </MDBModalHeader>
                                            <MDBModalBody>
                                            <MDBRow>
                                                    <MDBCol>
                                                    <form>
                                                        <p className="h4 text-center py-4">Enter Your Details Below!!</p>
                                                        <MDBInput label="Your name" group type="text" validate error="wrong" success="right" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>
                                                        <MDBInput label="Your email" group type="email" validate error="wrong" success="right" name="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                                                        <MDBInput label="Your phone" group type="text" validate error="wrong" success="right" name="phone" id="phone" onChange={this.handleChange} value={this.state.phone}/>
                                                        <MDBInput label="Your Specilization" group type="text" validate error="wrong" success="right" name="specilization" id="specilization" onChange={this.handleChange} value={this.state.specilization}/>
                                                        <MDBInput label="No of Years of Experience" group type="number" validate error="wrong" success="right" name="experience" id="experience" onChange={this.handleChange} value={this.state.experience}/>
                                                        <MDBInput label="Name of the company you were working" group type="text" validate error="wrong" success="right" name="expcompany" id="expcompany" onChange={this.handleChange} value={this.state.expcompany}/>
                                                        <label style={{color:"gray"}}>Select Job</label>
                                                        <select id="job" name="job" onChange={this.handleChange} value={this.state.job} style={{width:450, padding:10}}>
                                                            <option value="Embedded Developer In C">Embedded Developer In C</option>
                                                            <option value="Calibration engineer">Calibration engineer</option>
                                                            <option value="Malware Proctection Analyst">Malware Proctection Analyst</option>
                                                            <option value="Safety Calibration Expert">Safety Calibration Expert</option>
                                                            <option value="Full Stack Developer">Full Stack Developer</option>
                                                            <option value="Design Power Electronics">Design Power Electronics</option>
                                                            <option value="Microprocessor Developer For Automotive">Microprocessor Developer For Automotive</option>
                                                        </select>
                                                        <div className="text-center py-4 mt-3">
                                                        <MDBBtn outline type="reset"onClick={this.apply}>
                                                            Send
                                                            <MDBIcon far icon="paper-plane" className="ml-2" />
                                                        </MDBBtn>
                                                        </div>
                                                    </form>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn onClick={this.toggle}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
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
export default Job;