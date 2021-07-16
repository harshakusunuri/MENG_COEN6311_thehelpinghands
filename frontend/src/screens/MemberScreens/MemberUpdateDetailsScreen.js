import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Container, Form, Button, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { Router } from 'react-router'
import { getMemberDetails, membersUpdateProfile } from '../../actions/memberActions'
import ReactDOM from 'react-dom';

import Loader from '../../components/Loader'
import Message from '../../components/Message'


import { MEMBER_UPDATE_PROFILE_RESET } from '../../constants/memberConstants'



function MemberUpdateDetailsScreen({ history }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    // const [addressStreet, setAddressStreet] = useState('')
    const [addressLocation, setAddressLocation] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')




    const dispatch = useDispatch()

    // const redirect = location.search ? location.search.split('=')[1] : '/'

    //const memberRegister = useSelector(state => state.memberRegister)
    const memberDetails = useSelector(state => state.memberDetails)
    const { loading, member } = memberDetails

    const memberLogin = useSelector(state => state.memberLogin)
    const { memberInfo } = memberLogin

    const memberUpdateProfile = useSelector(state => state.memberUpdateProfile)

    const { error, success } = memberUpdateProfile
    // error, 
    //const { error, loading, memberInfo } = memberRegister

    useEffect(() => {
        if (!memberInfo) {
            history.push('/MemberLoginScreen')
        } else {
            if (!member || !member.username || success || memberInfo._id !== member._id) {
                dispatch({ type: MEMBER_UPDATE_PROFILE_RESET })
                dispatch(getMemberDetails(memberInfo._id))

            } else {
                setUsername(member.username)
                setEmail(member.email)
                // setAddressStreet(member.addressStreet)
                setAddressLocation(member.addressLocation)
                setBloodGroup(member.bloodGroup)

            }
        }






    }, [dispatch, history, memberInfo, member, success])

    const submitHandler = (e) => {
        e.preventDefault()
        //dispatch(membersRegister(email, password, username))

        dispatch(membersUpdateProfile(memberInfo._id, username, email, password, addressLocation, bloodGroup))
        // 'id': member._id,
        //     'username': username,
        //         'email': email,
        //             'password': password
    }

    // 


    return (
        <div>

            <h2 className='my-3 p-2' style={{ 'text-align': 'center' }} >The Member Updates Details Page </h2>


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
                <Form.Group controlId="formGridBloodGroup" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Blood Group</Form.Label>
                    <Form.Control type="text" placeholder="Enter Blood Group" style={{ width: '70%' }}
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)} />
                </Form.Group>






                <Button variant="primary" type="submit" style={{ 'background-color': '#4bbf73' }}>
                    Update details
                    </Button>


            </Form >

        </div>
    )
}

export default MemberUpdateDetailsScreen
