import React from 'react'
import './Main.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Offcanvas from  'react-bootstrap/Offcanvas'
import Carousel from 'react-bootstrap/Carousel'
import {useState,useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import RoutePage from './route'
import logo  from'./images/logo2.jpg'
import img1 from'./images/image1.jpg'
import img2 from'./images/image2.jpg'
import img3 from'./images/image6.jpg'
import img4 from'./images/image7.jpg'
import img5 from'./images/image10.jpg'
import img6 from'./images/image5.jpg'
import img7 from'./images/image8.jpg'
import img8 from'./images/image9.jpg'
import img9 from'./images/image3.jpg'
import img10 from'./images/image4.jpg'
import img12 from'./images/image12.jpg'
import img11 from'./images/image11.jpg'
import img14 from'./images/image14.jpg'
import img13 from'./images/image13.jpg'



import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';
//import Item from ' @mui/material/Item'
import Grid from '@mui/material/Grid';
import DescriptionPage from './DescriptionPage'
export default function MainFunction  () {



  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  // master changed this line
  // and commented it
   name : master

    let history=useHistory()

    const HandleClick = (e) => {
       useEffect(()=>{
       console.log("description page") 
        history.push('/DescriptionPage')
       })
  
        }
      
    return(
        <>
  
  <Navbar bg="dark" style={{ backgroundColor:"rgb(32 48 55)"}}>
  <Container>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="200"
        height="70"
        margin="0px 0px 0px 0px"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"/> 

    </Navbar.Brand>
  </Container>
  </Navbar>


  <Container className="main-Container"> 
  <Navbar bg="dark" variant="dark" className="nav-container">
    <Container>
    <Nav className="me-auto">
      <Nav.Link  href="#home" className="me-auto1">HOME</Nav.Link>
      <Nav.Link href="#TV SHOWS" className="me-auto1">TV SHOWS</Nav.Link>
      <Nav.Link href="#MOVIES" className="me-auto1">MOVIES</Nav.Link>
      <Nav.Link href="#CHANNELS" className="me-auto1">CHANNELS</Nav.Link>
     
      <NavDropdown title="CATEGORIES" className="me-auto1" >

        <NavDropdown.Item eventKey="4.1" >LANGUAGES</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" >KIDS</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Amazon originals</NavDropdown.Item>
        
   
      </NavDropdown>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search">

          </FormControl>
       
          <Button variant="outline-success">Search</Button>
      
        
      </Form>

    </Nav>
    </Container>
  </Navbar>

  

  <Container >
  <Row className="row-container">  
    <Col   className="col-container">
    <img
        src={img1}
        width ="100%"
        height="250px"
        alt="React Bootstrap logo"/>
    </Col>
    </Row>
    </Container>

    

  <Container>
  <h2 style={{color:"white" ,margin:"0px 0px 10px 30px"}}> Continue Watching</h2>
  <Row sm={4}  >
    <Col   className="col-container2">
    <img
        src={img2}
        width ="280px"
        height="150px">
        </img>
        <Nav.Link  href="/DescriptionPage" path="/DescriptionPage" className="me-auto1" 
         onClick={ HandleClick}>Watch Now</Nav.Link>
        
   
    </Col>
    <Col  className="col-container2"> 
      <img
        src={img3}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
        </Col>

        <Col  className="col-container2">
        <img
        src={img13}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>

        </Col>
        <Col  className="col-container2">
        <img
        src={img12}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
        </Col>
  </Row>
  
</Container>
</Container>

<Container className="main-Container2"> 
<h2 style={{color:"white" ,margin:"0px 0px 10px 30px"}}> Latest Movies </h2>
  <Container>

  <Row sm={4}  >
   
    <Col   className="col-container2">
    <img
        src={img5}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
    </Col>
    <Col  className="col-container2"> 
      <img
        src={img6}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
        </Col>

        <Col  className="col-container2">
        <img
        src={img7}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
        </Col>
        
        <Col  className="col-container2">
        <img
        src={img11}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
        </Col>
  </Row>
  
</Container>


</Container>

<Container className="main-Container2"> 
<h2 style={{color:"white" ,margin:"0px 0px 00px 30px"}}> Amazon Originals </h2>
  <Container>

  <Row sm={4}  >
   
    <Col   className="col-container2">
    <img
        src={img8}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
    </Col>
    <Col  className="col-container2"> 
      <img
        src={img9}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
        </Col>

        <Col  className="col-container2">
        <img
        src={img10}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
        </Col>
        
        <Col  className="col-container2">
        <img
        src={img14}
        width ="280px"
        height="150px"
        alt="React Bootstrap logo"/>
        </Col>
  </Row>
  
</Container>


</Container>


{/* <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */}


  
  
</>
  

 


    )
  }
