import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Container, Form, Button, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap'
import { Link, Switch, Redirect } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { Router } from 'react-router'

import ReactDOM from 'react-dom';

import Loader from './Loader'
import Message from './Message'
import { organizationsLogout } from '../actions/organizationActions'
import { membersLogout } from '../actions/memberActions'
function Header({ history }) {

    const memberLogin = useSelector(state => state.memberLogin)
    const { memberInfo } = memberLogin


    const organizationLogin = useSelector(state => state.organizationLogin)
    const { organizationInfo } = organizationLogin

    const dispatch = useDispatch()

    const logoutHandler = history => () => {


        dispatch(organizationsLogout())
        dispatch(membersLogout())


    }



    return (<Navbar bg="" variant='dark' expand="lg" collapseOnSelect style={{ 'background-color': '#007931' }}>
        <Container>
            <LinkContainer to="/" className='my-1 p-1' >
                <Navbar.Brand><i class="fas fa-hands-helping "   ></i>The Helping Hands</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ 'justify-content': 'flex-end' }}>


                {organizationInfo ? (

                    <NavDropdown title={organizationInfo.email} id='email' className='my-1 p-1'>
                        <LinkContainer to='/OrganizationUpdateDetailsScreen'>
                            <NavDropdown.Item>Organization Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/OrganizationViewMembersScreen'>
                            <NavDropdown.Item>View Members Profile Details</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/OrganizationPostsViewPostsScreen'>
                            <NavDropdown.Item>View Organization Posts details</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/OrganizationPostsCreatePostsScreen'>
                            <NavDropdown.Item>Create Organization Posts</NavDropdown.Item>
                        </LinkContainer>



                        <NavDropdown.Item onClick={logoutHandler(history)}>Logout</NavDropdown.Item>

                    </NavDropdown>
                ) : memberInfo ? (

                    <NavDropdown title={memberInfo.email} id='email' className='my-1 p-1'>
                        <LinkContainer to='/MemberUpdateDetailsScreen'>
                            <NavDropdown.Item>Member Profile</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/MemberViewTasksScreen'>
                            <NavDropdown.Item>View Member's Assigned Task Details</NavDropdown.Item>
                        </LinkContainer>



                        <NavDropdown.Item onClick={logoutHandler(history)}>Logout</NavDropdown.Item>

                    </NavDropdown>
                ) : (<Nav className="" style={{ 'justify-content': 'flex-end', 'margin-right': '0px' }}>
                    <LinkContainer to='/MemberHomeScreen' className='my-1 p-1'>
                        <Nav.Link ><i className="fas fa-user my-2 p-2"></i>Member Register/Login Screen</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/OrganizationHomeScreen' className='my-1 p-1'>
                        <Nav.Link ><i className="fas fa-user my-2 p-2"></i>Organization Register/Login HomeScreen</Nav.Link>
                    </LinkContainer>

                </Nav>
                )}






            </Navbar.Collapse>
        </Container>
    </Navbar >
    )
}

export default Header
