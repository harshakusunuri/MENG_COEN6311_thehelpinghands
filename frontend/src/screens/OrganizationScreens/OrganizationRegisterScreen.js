import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Container, Form, Button, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { Router } from 'react-router'
import ReactDOM from 'react-dom';

import { organizationsRegister } from '../../actions/organizationActions'

import Loader from '../../components/Loader'
import Message from '../../components/Message'

function OrganizationRegisterScreen() {
    //{ location, history }
    // const a = { "_id": 16, "username": "sadasd", "email": "sdsa@asdas.sdfs", "password": "asdasd", "Address_line": null, "city_state_country": null, "createdAt": "2021-04-19T22:11:52.795653Z", "isOrganizationMember": true, "yearOfEstablishment": null, "chairman": null }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [addressLocation, setAddressLocation] = useState('')

    const dispatch = useDispatch()

    //const redirect = location.search ? location.search.split('=')[1] : '/'

    const organizationRegister = useSelector(state => state.organizationRegister)
    const { error, loading, organizationInfo } = organizationRegister

    useEffect(() => {
        //if (organizationInfo) {
        //   history.push(redirect)
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(organizationsRegister(email, password, username, addressLocation))
    }
    return (

        <div className='my-3 p-2' style={{ 'text-align': 'center' }}>
            <h2> Register as an Organization </h2>
            {error && <Message variant='danger'>{error}</Message>}
            {/* {loading && <Loader />} */}

            {organizationInfo && <Alert  > {organizationInfo.username} is registered succesfully</Alert>}
            <Form onSubmit={submitHandler} className='my-3 p-2' style={{ 'max-width': '70%', margin: '0 auto' }}>

                <Form.Group controlId="formGridUsername" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" style={{ width: '70%' }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formGridEmail" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{ width: '70%' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGridPassword" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{ width: '70%' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGridAddressLocation" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Address Location</Form.Label>
                    <Form.Control type="text" placeholder="Address Location" style={{ width: '70%' }}
                        value={addressLocation}
                        onChange={(e) => setAddressLocation(e.target.value)} />
                </Form.Group>



                <Alert variant="success" >
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        Kindly note that details can be updated any time in the update details page. Have a good day!
    </p>

                </Alert>
                <Button variant="primary" type="submit" style={{ 'background-color': '#4bbf73' }}>
                    Register as an Organization
            </Button>


            </Form>
            <Link to='/OrganizationLoginScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Already regsitered? Click for Member Login screen</Link>
        </div >
    )
}


export default OrganizationRegisterScreen
