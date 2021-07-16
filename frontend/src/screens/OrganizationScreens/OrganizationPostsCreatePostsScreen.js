import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Container, Form, Button, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { Router } from 'react-router'
import ReactDOM from 'react-dom';

import { organizationsPostsCreatePost } from '../../actions/organizationActions'
import { listMembers } from '../../actions/memberActions'

import Loader from '../../components/Loader'
import Message from '../../components/Message'

import Dropdown from 'react-dropdown';
function OrganizationPostsCreatePostsScreen({ history }) {




    const [requirementInformation, setRequirementInformation] = useState('')
    const [addressLocation, setAddressLocation] = useState('')
    const [addressStreet, setAddressStreet] = useState('')
    const [MemberSelected_id, setMemberSelected_id] = useState('')
    const [postedByOrganization_id, setpostedByOrganization_id] = useState('')
    const [post_id, setPost_id] = useState('')

    const dispatch = useDispatch()

    const organizationLogin = useSelector(state => state.organizationLogin)
    const { organizationInfo } = organizationLogin

    // const memberList = useSelector(state => state.memberList)
    // const { error, loading, members } = memberList

    // const organizationPostList = useSelector(state => state.organizationPostList)
    // const { error, loading, organizationPosts } = organizationPostList


    const organizationPostCreatePost = useSelector(state => state.organizationPostCreatePost)
    const { error, loading, organizationPostsCreatePost } = organizationPostCreatePost

    useEffect(() => {
        if (!organizationInfo) {
            history.push('/OrganizationLoginScreen')
        } else {
            dispatch(listMembers())

        }
    }, [dispatch, history, organizationInfo])


    const submitHandler = (e) => {
        e.preventDefault()



        dispatch(organizationsPostsCreatePost(organizationInfo._id, requirementInformation, organizationInfo.email, addressLocation))

    }


    return (
        <div className='my-3 p-2' style={{ 'text-align': 'center' }}>
            <h2> The Organization Posts Create Screen</h2>
            {error && <Message variant='danger'>{error}</Message>}
            {/* {loading && <Loader />} */}

            {/* {organizationInfo && <Alert  > {organizationInfo.username} is registered succesfully</Alert>} */}
            <Form onSubmit={submitHandler} className='my-3 p-2' style={{ 'max-width': '70%', margin: '0 auto' }}>

                <Form.Group controlId="formGridUsername" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Requirement Information</Form.Label>
                    <Form.Control type="text" placeholder="Enter requirement Information" style={{ width: '70%' }}
                        value={requirementInformation}
                        onChange={(e) => setRequirementInformation(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formGridUsername" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}><i class="fas fa-map-marker-alt"></i>Address Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address Location" style={{ width: '70%' }}
                        value={addressLocation}
                        onChange={(e) => setAddressLocation(e.target.value)} />
                </Form.Group>
                {/* <Form.Group controlId="formGridUsername" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Address Street</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" style={{ width: '70%' }}
                        value={addressStreet}
                        onChange={(e) => setAddressStreet(e.target.value)} />
                </Form.Group> */}
                {/* <Form.Group controlId="formGridUsername" style={{ display: 'flex' }}>
                    <Form.Label style={{ width: '30%' }}>Member Selected_id</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" style={{ width: '70%' }}
                        value={MemberSelected_id}
                        onChange={(e) => setMemberSelected_id(e.target.value)} />
                </Form.Group> */}

                {/* <Dropdown
                    title="Select Member"
                    list={members.username}
                    toggleItem={toggleItem}
                /> */}


                {/* <Alert variant="success" >
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        Kindly note that details can be updated any time in the update Posts details page. Have a good day!
</p>

                </Alert> */}
                <Button variant="primary" type="submit" style={{ 'background-color': '#4bbf73' }}>
                    Post requirement
                    </Button>


            </Form>
            <Link to='/OrganizationPostsViewPostsScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Already Created? Click to check Created Posts Screen</Link>

        </div >
    )
}

export default OrganizationPostsCreatePostsScreen
