import React from 'react'
import './Main.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image1 from'./images/logo.jpg'
export default function MainFunction  () {

    return(
        <>
  
  <Navbar bg="dark" style={{width:"100%"}}>
  <Container>
    <Navbar.Brand href="#home">
      <img
        src={image1}
        width="300"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"/>
    </Navbar.Brand>
  </Container>
  </Navbar>


  <Navbar bg="dark" variant="dark" className="nav-container">
    <Container>
    <Nav className="me-auto">
      <Nav.Link  href="#home" className="me-auto1">HOME</Nav.Link>
      <Nav.Link href="#features" className="me-auto1">TV SHOWS</Nav.Link>
      <Nav.Link href="#pricing" className="me-auto1">MOVIES</Nav.Link>
      <Nav.Link href="#pricing" className="me-auto1">KIDS</Nav.Link>
      <Nav.Link href="#pricing" className="me-auto1">WEB SERIES</Nav.Link>
      <Nav.Link href="#pricing" className="me-auto1">LANGUAGES</Nav.Link>
      <Nav.Link href="#pricing" className="me-auto1">SETTINGS</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <br/>
  <Container>
  <Row sm={4}  >
    <Col   className="col-container">
    <img
        src={image1}
        alt="React Bootstrap logo"/>
    </Col>
    <Col  className="col-container"> 
      <img
        src={image1}
       
       
        alt="React Bootstrap logo"/>
        </Col>

        <Col  className="col-container">
        <img
        src={image1}
    
        alt="React Bootstrap logo"/>
        </Col>
  </Row>
 
</Container>
  

  
  
</>
  

 


    )
}