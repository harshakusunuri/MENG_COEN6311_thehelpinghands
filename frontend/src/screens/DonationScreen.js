import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import HomeScreen from "./HomeScreen";
import MotoOfOurOrganizationScreen from "./MotoOfOurOrganizationScreen";
function DonationScreen() {
    return (
        <div><h2 className='my-2 p-2' style={{margin:'0 auto','text-align': 'center'}}> Make a donation </h2>
            <h4 className='my-2 p-2'>

                Type of donations 
                
            </h4>
           <li className='my-2 p-1' style={{'font-size': '20px'}}>Financial Help</li>
           <li className='my-2 p-1' style={{'font-size': '20px'}}>Food Donations </li>
           <li className='my-2 p-1' style={{'font-size': '20px'}}>Medicinies </li>
           <li className='my-2 p-1' style={{'font-size': '20px'}}>Materials, Clothings etc. </li>
           <li className='my-2 p-1' style={{'font-size': '20px'}}>Blood donations</li>
           <li className='my-2 p-1' style={{'font-size': '20px'}}>Can volunteer in activities by <Link disabled to='/' style={{
                        color: 'rgb(50 55 39)', 'background-color': '#4bbf73'
                    }} ><i class="fas fa-user"></i>(Register as a Member for volunteering in Member Registration Page)</Link></li>
            
            <h5 className='my-2 p-2'> Kindly contact this email for the donations link: <a href=''>'thehelpinghands@gmail.com'</a></h5>
            {/* <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_96397258_Full.jpg?crop=0,708,4000,1250&amp;wid=3200&amp;hei=1000&amp;scl=1.25" alt="The morning clouds and fog lift off the small towns in the lower Himalaya mountains." class="image-position-desktop__center-middle image-position-mobile__center-middle hero-img-ie-fix whiteText"></img> */}
            <h6><LinkContainer to='/' className='my-1 p-1'>
                <Nav.Link >Back to '<i class="fas fa-crosshairs"></i>Motto of our Organization' page</Nav.Link>
            </LinkContainer>
            </h6></div >
    )
}

export default DonationScreen
