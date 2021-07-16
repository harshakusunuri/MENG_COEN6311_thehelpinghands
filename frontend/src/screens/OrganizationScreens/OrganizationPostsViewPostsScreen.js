import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
// import Moment from 'react-moment';
import moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'
import { Card, Container, Form, Button, Row, Col, Table, Modal } from 'react-bootstrap'
import Select from 'react-select'

import axios from 'axios'
import { organizationPostslist, organizationsPostsUpdatePost } from '../../actions/organizationActions'

import { listMembers } from '../../actions/memberActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'



function OrganizationPostsViewPostsScreen({ organizationPost, history }) {

    //const organizationPost = []
    // const dateToFormat = '1976-04-19T12:59-0500';
    const [editModel, setEditmodel] = useState(false)
    const [selectedPost, setSelectedPost] = useState({})

    const [requirementInformation, setRequirementInformation] = useState('')
    const [addressLocation, setAddressLocation] = useState('')
    const [addressStreet, setAddressStreet] = useState('')
    const [MemberSelected, setMemberSelected] = useState('')
    const [post_id, setPost_id] = useState('')
    const [post, setPost] = useState('')
    const dispatch = useDispatch()

    const memberList = useSelector(state => state.memberList)
    const { error: errorMemberList, loading: loadingMembers, members } = memberList

    const organizationPostList = useSelector(state => state.organizationPostList)
    const { error, loading, organizationPosts } = organizationPostList


    const organizationLogin = useSelector(state => state.organizationLogin)
    const { organizationInfo } = organizationLogin

    const organizationPostUpdateList = useSelector(state => state.organizationPostUpdateList)
    const { error: errorOrganizationPostUpdateList, loading: loadingOrganizationPostUpdateList, organizationPostsUpdatePost } = organizationPostUpdateList

    useEffect(() => {
        if (!organizationInfo) {
            history.push('/OrganizationLoginScreen')
        } else {
            dispatch(listMembers())
            dispatch(organizationPostslist(organizationInfo._id))


        }
    }, [history, organizationPostsUpdatePost, errorOrganizationPostUpdateList])



    const editOrganizationPost = (data) => {

        console.log(data)


        setEditmodel(true)
        setSelectedPost(data)

        setRequirementInformation(data.requirementInformation)
        setAddressLocation(data.addressLocation)
        setMemberSelected(data.MemberSelected)
        setPost_id(data._id)

        console.log(members)

    }
    const handleClose = () => {

        setEditmodel(false)


    }
    const handleChange = (e) => {
        console.log(e)
        setMemberSelected(e.value)
        setPost(e)

    }


    const submitHandler = (e) => {
        e.preventDefault()
        setEditmodel(false)

        console.log(requirementInformation)
        console.log(addressLocation)
        console.log(MemberSelected)
        console.log(post_id)


        dispatch(organizationsPostsUpdatePost(post_id, requirementInformation, addressLocation, MemberSelected))
        // dispatch(organizationsPostsCreatePost(organizationInfo._id, requirementInformation, organizationInfo.email, addressLocation))

    }





    return (
        <div>

            <Card className='my-3 p-3 rounded'>
                {/* {member.name} */}
                {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        :
                        <div class='GetOrganizationPosts'> <h2 style={{ 'textAlign': 'center' }}>The Organization Posts Details </h2>
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th style={{ 'font-size': '13px' }}>Post Id:</th>
                                        <th style={{ 'font-size': '13px' }}>Organization Requirement Information:</th>
                                        <th style={{ 'font-size': '13px' }}>Posted by Organization email:</th>
                                        <th style={{ 'font-size': '13px' }}>Assigned to Member_Id :</th>
                                        <th style={{ 'font-size': '13px' }} > Timeline:</th>

                                    </tr>
                                </thead>

                                {organizationPosts.map(organizationPost => (
                                    // <Row>

                                    //     <Col key={organizationPost._id} sm={12} lg={4} xl={3}>
                                    //         <p> Organization Requirement Information: {organizationPost.requirementInformation}  </p>


                                    //     </Col>
                                    //     <Col key={organizationPost._id} sm={12} lg={4} xl={3}>
                                    //         <p> Posted by: {organizationInfo.username}  </p>


                                    //     </Col>
                                    //     <Col key={organizationPost._id} sm={12} lg={4} xl={3}>
                                    //         <p> Assigned to : {organizationPost.MemberSelected_id ? organizationPost.MemberSelected_id : 'None'}  </p>


                                    //     </Col>
                                    //     <Col key={organizationPost._id} sm={12} lg={4} xl={3}>
                                    //         <p> Timeline : <moment >  </moment> </p>


                                    //     </Col>

                                    // </Row>
                                    <tbody>

                                        <tr>
                                            <td key={organizationPost._id} >
                                                <p>  {organizationPost._id} </p></td>
                                            <td key={organizationPost._id} >
                                                <p>  {organizationPost.requirementInformation} </p></td>
                                            <td key={organizationPost._id} >
                                                <p>  {organizationPost.postedByOrganizationEmail}  </p> </td>
                                            <td key={organizationPost._id}  ><p>{organizationPost.MemberSelected ? (organizationPost.MemberSelected) : 'None'}</p></td>

                                            {/* <td key={organizationPost._id}  >

                                                <input
                                                    type="text"
                                                    placeholder="Company"
                                                    name="company"
                                                    value={organizationPost.MemberSelected}
                                                    onChange={(e) => onChange(e)}
                                                />
                                            </td> */}


                                            <td key={organizationPost._id}><p>
                                                {moment(organizationPost.createdAt).format('DD-MMM-YYYY')}
                                            </p> </td>
                                            <td key={organizationPost._id}>
                                                <p>

                                                    <button type="button" onClick={() => editOrganizationPost(organizationPost)} >Edit Post</button>
                                                </p>
                                            </td>

                                        </tr>
                                        {/* < h1 hidden (organizationPost.MemberSelected ? i++ : 'NULL) /> */}
                                    </tbody>
                                    // getValueOfI(organizationPost)


                                ))}
                            </Table>
                            <h5 className='my-2 p-2' style={{ margin: '0 auto', 'text-align': 'center' }}>
                                Number of Organization Posts: {Object.keys(organizationPosts).length}
                            </h5>
                            <h5 className='my-2 p-2' style={{ margin: '0 auto', 'text-align': 'center' }}>
                                {/* Number of Members assigned: {i} */}
                            </h5>

                        </div >}



                <Modal show={editModel} onHide={handleClose} animation={false} style={{ top: '20vh' }}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ 'max-width': '90%', margin: '0 28px' }} >Organization Post Id: {post_id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {loadingOrganizationPostUpdateList ? <Loader />
                            : errorOrganizationPostUpdateList ? <Message variant='danger'>{errorOrganizationPostUpdateList}</Message> : ''}
                        <Form className='p-2' style={{ 'max-width': '95%', margin: '0 auto' }}>

                            <Form.Group controlId="formGridUsername" style={{ display: 'flex' }}>
                                <Form.Label style={{ width: '30%' }}>Requirement Information:</Form.Label>
                                <Form.Control type="text" placeholder="Enter requirement Information" style={{ width: '70%' }}
                                    value={requirementInformation}
                                    onChange={(e) => setRequirementInformation(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formGridUsername" style={{ display: 'flex' }}>
                                <Form.Label style={{ width: '30%' }}><i class="fas fa-map-marker-alt"></i>  Address Location:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Address Location" style={{ width: '70%' }}
                                    value={addressLocation}
                                    onChange={(e) => setAddressLocation(e.target.value)} />
                            </Form.Group>

                            {/* <Form.Group controlId="formGridMemberSelected" style={{ display: 'flex' }}>
                                <Form.Label style={{ width: '30%' }}>Member Selected_id</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" style={{ width: '70%' }}
                                    value={MemberSelected}
                                    onChange={(e) => setMemberSelected(e.target.value)} />
                            </Form.Group> */}
                            <span>Select Member: </span><Select
                                value={post}
                                onChange={handleChange}
                                options={members && members.map(e => ({ value: e._id, label: e.username + " from " + e.addressLocation }))}
                            />

                        </Form>



                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={submitHandler}  >
                            Edit Post
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/*  Use the a href to navigate through other url-> Load a new windows */}
                {/* <Card.body>
               
                 <Card.text as div>
                    <div className='my-3'>
                        {member.name} </div>
                </Card.text> 

           </Card.body>  */}

            </Card >




        </div >
    )
}


export default OrganizationPostsViewPostsScreen
