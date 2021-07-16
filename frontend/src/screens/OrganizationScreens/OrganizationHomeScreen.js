import React from 'react'

import { Link } from 'react-router-dom'
import MotoOfOurOrganizationScreen from '../MotoOfOurOrganizationScreen'

function OrganizationHomeScreen() {
    return (
        <div> <h3>Currently viewing Organization Home screen</h3>
            <div id='Organization_homeScreenContents'  >
                <h5>Links:</h5>
                <Link to='/OrganizationRegisterScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Organization Registration Screen</Link>

                <Link to='/OrganizationLoginScreen' className='my-1 p-1' style={{}}><i className="fas fa-user my-2 p-2"></i>Organization Login Screen</Link>

                {/* <Link to='/OrganizationUpdateDetailsScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Organization Update Details Screen</Link>

                <Link to='/OrganizationViewMembersScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Organization View Members Screen </Link>

                <Link to='/OrganizationPostsViewPostsScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Organization Posts View Posts Screen </Link>

                <Link to='/OrganizationPostsCreatePostsScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Organization Posts Create posts Screen </Link> */}

                {/* <Link to='/OrganizationRegisterScreen' className='my-1 p-1' style={{}}><i className="fas fa-user my-2 p-2"></i>Organization Login Screen</Link> */}





                {/* <MotoOfOurOrganizationScreen /> */}
            </div>
        </div>
    )
}

export default OrganizationHomeScreen
