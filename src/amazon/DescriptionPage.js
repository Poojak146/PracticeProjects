import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img2 from'./images/image2.jpg'
import './Main.css'

export default function DescriptionPage () {

return(
<>
<Container >
  <Row className=" Des-Container" >  
  <div style= {{ height:"600px", width:"100%" , backgroundColor:" rgb(32 48 55)",margin:" 0px 0px 0px 0px"}}>
    <Col   className="">
<img
        src={img2}
        width ="100%"
        height="300px"
        alt="React Bootstrap logo"/>  
        
    </Col>
    
    <h1 style= {{ color:"white" ,opacity:"0.8", margin:"10px 20px 0px 20px"}} > Wheel of Time</h1>
    
    <p style= {{ color:"white" ,opacity:"0.5", margin:"10px 20px 0px 20px"}}>The Wheel of Time follows Moiraine (Rosamund Pike), a member of the Aes Sedai,
     a sect of women endowed with magical gifts as she embarks on a dangerous journey spanning the globe.</p>

<p style= {{ color:"white" ,opacity:"0.5", margin:"10px 20px 0px 20px"}}>Director:
Uta Briesewitz, Wayne Yip, Salli Richardson Whitfield, Ciaran Donnelly
Writer:
Rafe Judkins, Amanda Shuman, The Clarkson Twins, Dave Hill, Celine Song, Justine Juel Gillmer
Producer:
Rafe Judkins, Rick Selvage, Larry Mondragon, Ted Field, Mike Weber, Darren Lemke</p>
<p style= {{ color:"white" ,opacity:"0.5", margin:"10px 20px 0px 20px"}}>19 November 2021</p>
<button style= {{ height:"50px",width:"150px",backgroundColor:"#3dcfca", color:"black" ,opacity:"0.9",
margin:"10px 20px 0px 20px"}}>Watch NOW</button>
<button style= {{ height:"50px",width:"150px",backgroundColor:"white",opacity:"0.9",
margin:"10px 20px 0px 20px"}}>Add to Watchlist</button>
   
   </div>

   </Row>

    


    </Container>
    
    


</>
)
}