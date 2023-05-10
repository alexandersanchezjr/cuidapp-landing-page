import React from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBInput,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Form() {
  return (
    <div className='d-flex justify-content-center p-5 vh-100' style={{ background:'linear-gradient(to bottom, #ffaaf8, #591ab1', fontFamily: 'Simply Rounded' }}>
        <MDBCard className='w-25'>
            <MDBCardBody>
                <form className='h-100 position-relative'>
                    <MDBCardTitle>¡Estemos en contacto!</MDBCardTitle>
                    <MDBInput id='form4Example1' wrapperClass='mb-4' label='Nombre' />
                    <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email' />
                    <MDBInput wrapperClass='mb-4' textarea id='form4Example3' style={{ height: '10rem' }} label='Mensaje' />

                    <MDBCheckbox
                        wrapperClass='d-flex justify-content-center mb-4'
                        id='form4Example4'
                        label='Enviar copia de mensaje'
                        defaultChecked
                    />

                    <MDBBtn type='submit' className='position-absolute bottom-0' block>
                        Enviar
                    </MDBBtn>
                </form>
            </MDBCardBody>
        </MDBCard>
        
    </div>

  );
}