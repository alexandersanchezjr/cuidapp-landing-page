import React, { useState } from 'react';
import background from '../assets/cleaning-arc.png'
import va from '@vercel/analytics'
import '../styles/HeaderStyles.css'

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function Header() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <header  style={{ background: 'linear-gradient(to right, rgb(255, 247, 173), rgb(255, 170, 248))' }}>
      <MDBNavbar className='shadow-0' expand='lg' style={{ height: '10rem' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand className='purple-navbar-text' href='#'>
            <img
              src='/cuidapp.png'
              height='80'
              className='ms-4'
              alt=''
              loading='lazy'
            />
            CuidApp
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavRight(!showNavRight)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className='navbar-container-buttons'> 
              <MDBNavbarItem className='d-flex align-items-center'>
                <MDBNavbarLink href='#' className='link-text'>INICIAR SESIÓN</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='d-flex align-items-center'>
                <button className='register-button' href='#'>REGISTRO</button>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className='container-main-header'>
        <div>
          <div className='d-flex align-items-center h-100 ms-5'>
            <div className='w-100 text-start'>
              <h4 className='text-wrap'>Afiliación y contratación de servicios domésticos</h4>
              <h1 className='title'>EL APOYO QUE NECESITAS</h1>
              <h4 className='text-wrap'>Estamos para realizar las tareas del hogar por ti, y que puedas disfrutar mas de tus tiempos libres con tranquilidad.</h4>
              <div className='d-flex justify-content-center'>
                <a href='https://forms.gle/p5JLbdwG4WvoRh9h8' target='_blank'>
                  <button onClick={() => {
                      va.track('Call to Action')
                    }} className='my-button'>
                    DESCÚBRELO
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={background} alt="" />
        </div>
      </div>
    </header>
  );
}