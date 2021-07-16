import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Container, Form, Button, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { Router } from 'react-router'
import { getOrganizationDetails, organizationsUpdateProfile } from '../../actions/organizationActions'
import ReactDOM from 'react-dom';

import Loader from '../../components/Loader'
import Message from '../../components/Message'


import { ORGANIZATION_UPDATE_PROFILE_RESET } from '../../constants/organizationConstants'
function OrganizationUpdateDetailsScreen({ history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    // const [addressStreet, setAddressStreet] = useState('')
    const [addressLocation, setAddressLocation] = useState('')
    const [chairman, setChairman] = useState('')




    const dispatch = useDispatch()

    const organizationDetails = useSelector(state => state.organizationDetails)
    const { loading, organization } = organizationDetails

    const organizationLogin = useSelector(state => state.organizationLogin)
    const { organizationInfo } = organizationLogin

    const organizationUpdateProfile = useSelector(state => state.organizationUpdateProfile)

    const { error, success } = organizationUpdateProfile


    useEffect(() => {
        if (!organizationInfo) {
            history.push('/OrganizationLoginScreen')
        } else {
            if (!organization || !organization.username || success || organizationInfo._id !== organization._id) {
                dispatch({ type: ORGANIZATION_UPDATE_PROFILE_RESET })
                dispatch(getOrganizationDetails(organizationInfo._id))

            } else {
                setUsername(organization.username)
                setEmail(organization.email)
                // setAddressStreet(organization.addressStreet)
                setAddressLocation(organization.addressLocation)
                setChairman(organization.chairman)


            }
        }






    }, [dispatch, history, organizationInfo, organization, success])

    const submitHandler = (e) => {
        e.preventDefault()



        dispatch(organizationsUpdateProfile(organizationInfo._id, username, email, password, addressLocation, chairman))

    }




    return (
        <div>

            <h2 className='my-3 p-2' style={{ 'text-align': 'center' }} >The Organization Updates Details Page </h2>
            {error && <Message variant='danger'>{error}</Message>}
            {/* {loading && <Loader />} */}
            {/* {!loading && <Alert className='my-3 p-2' style={{ 'max-width': '70%', margin: '0 auto' }} > {memberInfo.email} details are succesfully updated</Alert>} */}
            <Form onSubmit={submitHandler} className='my-3 p-2' style={{ 'max-width': '70%', margin: '0 auto' }}>

                <Form.Group controlId="formGridUsername" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" style={{ width: '70%' }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formGridEmail" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" disabled style={{ width: '70%' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formGridPassword" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{ width: '70%' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formGridchairman" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}> Organization Chairman</Form.Label>
                    <Form.Control type="text" placeholder="Enter chairman " style={{ width: '70%' }}
                        value={chairman}
                        onChange={(e) => setChairman(e.target.value)} />
                </Form.Group>

                {/* <Form.Group controlId="formGridAddressStreet" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Address Street</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address Street" style={{ width: '70%' }}
                        value={addressStreet}
                        onChange={(e) => setAddressStreet(e.target.value)} />
                </Form.Group> */}
                <Form.Group controlId="formGridAddressLocation" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}><i class="fas fa-map-marker-alt"></i> Address Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address Location" style={{ width: '70%' }}
                        value={addressLocation}
                        onChange={(e) => setAddressLocation(e.target.value)} />
                </Form.Group>








                <Button variant="primary" type="submit" style={{ 'background-color': '#4bbf73' }}>
                    Update details
                    </Button>


            </Form >
        </div>
    )
}

export default OrganizationUpdateDetailsScreen
