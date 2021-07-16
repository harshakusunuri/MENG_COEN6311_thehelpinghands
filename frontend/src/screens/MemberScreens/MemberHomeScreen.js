import React from 'react'
import { Link } from 'react-router-dom'
import MotoOfOurOrganizationScreen from '../MotoOfOurOrganizationScreen'


function MemberHomeScreen() {
    return (
        <div> <h3>Currently viewing Member Home screen</h3>
            <div id='member_homeScreenContents' >
                <h5>Links:</h5>
                <Link to='/MemberRegisterScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Member Registration Screen</Link>

                <Link to='/MemberLoginScreen' className='my-1 p-1' style={{}}><i className="fas fa-user my-2 p-2"></i>Member Login Screen</Link>

                {/* <Link to='/MemberUpdateDetailsScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Member Update Details Screen</Link> */}

                {/* <Link to='/MemberViewTasksScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Member View Task Details Screen</Link> */}


                {/* <MotoOfOurOrganizationScreen /> */}
            </div>
        </div>
    )
}

export default MemberHomeScreen
