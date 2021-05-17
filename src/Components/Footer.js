import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBTypography, MDBIcon } from "mdbreact";
import { Link } from 'react-scroll';

const FooterPagePro = () => {
  return (
    <MDBFooter color="grey darken-4" className="page-footer font-small pt-0 mt-5">
      <div style={{ backgroundColor: "#00e676" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h5 className="mb-0 white-text font-weight-bold">
                Get connected with us on social networks!
              </h5>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0" href="#">
                <i className="fab fa-facebook-f white-text mr-4"> </i>
              </a>
              <a className="tw-ic" href="#">
                <i className="fab fa-twitter white-text mr-4"> </i>
              </a>
              <a className="gplus-ic" href="#">
                <i className="fab fa-google-plus-g white-text mr-4"> </i>
              </a>
              <a className="li-ic" href="#">
                <i className="fab fa-linkedin-in white-text mr-4"> </i>
              </a>
              <a className="ins-ic" href="#">
                <i className="fab fa-instagram white-text mr-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="4" lg="5" xl="4" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Techswing Solutions</strong>
            </h6>
            <hr className="green accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "80px" , height:"2px" }} />
            <p style={{textAlign:"justify"}}>
            "We are dedicated to constant improvement and enhancement of our services. Each client is a valued customer, and an opportunity for us to improve the delivery of our services.”
            </p>
          </MDBCol>
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="green accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" , height:"2px"}} />
            <p>
            <Link to="about" smooth={true} duration={1500} offset={-75}><a href="#!"><MDBIcon far icon="address-card" className="mr-2" />About</a></Link>
            </p>
            <p>
            <Link to="services" smooth={true} duration={1500} offset={-75}><a href="#!"><MDBIcon far icon="handshake" className="mr-2"/>Services</a></Link>
            </p>
            <p>
            <Link to="project" smooth={true} duration={1500} offset={-75}><a href="#!"><MDBIcon icon="laptop" className="mr-2"/>Projects</a></Link>
            </p>
            <p>
            <Link to="job" smooth={true} duration={1500} offset={-60}><a href="#!"><MDBIcon icon="user-plus" className="mr-2"/>Job Availability</a></Link>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="green accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" , height:"2px" }} />
            <p>
              <i className="fa fa-home mr-3" /> 660-A6, Telugu Street,Coimbatore
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> techswingsolutions@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 91 94897 73812
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          <MDBTypography variant="p" tag="p">Designed and Maintained by KEC</MDBTypography>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;