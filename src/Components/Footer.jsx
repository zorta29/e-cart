import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div className='mt-5'>
     <MDBFooter bgColor='primary' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>

        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="store" className="me-3" />
                E-Cart
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a  className='text-reset'>
                  Home Page
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  Wishlist 
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  Cart
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
                <a  className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                React Bootstrap
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  Bootswatch
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact US</h6>
              <div>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a  className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
