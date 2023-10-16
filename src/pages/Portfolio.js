import React from 'react'
import portfolioData from '../data/portfolioData.json';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Portfolio = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <h1>My Portfolio</h1>
     <MDBContainer>
      <MDBRow>
       
            {portfolioData.projects.map((project) => (
        <>
             <MDBCol size='4' className='pb-5'>
                <img onClick={handleShow} src={project.image} alt={project.name}></img></MDBCol>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{project.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img onClick={handleShow} src={project.image} alt={project.name}></img>
                        <h3>{project.techstack}</h3>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
        
        </>

    ))}
        
      </MDBRow>
    </MDBContainer>
    </>
  )
}

export default Portfolio;