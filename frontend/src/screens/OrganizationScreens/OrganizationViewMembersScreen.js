import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'
import { Card, Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'
import { listMembers } from '../../actions/memberActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
function OrganizationViewMembersScreen({ member, history }) {

    // const [members, setMembers] = useState([])
    // useEffect(() => {
    //     console.log('Use Effect triggered')
    //     async function fetchMembers() {
    //         const { data } = await axios.get('/api/organization/viewMembers/') /${member.param.id}
    //         setMembers(data)
    //     }
    //     fetchMembers()
    // }, [])

    const dispatch = useDispatch()
    const memberList = useSelector(state => state.memberList)
    const { error, loading, members } = memberList
    const organizationLogin = useSelector(state => state.organizationLogin)
    const { organizationInfo } = organizationLogin
    useEffect(() => {
        if (!organizationInfo) {
            history.push('/OrganizationLoginScreen')
        } else { dispatch(listMembers()) }
    }, [dispatch, history])

    return (
        <Card className='my-3 p-3 rounded'>
            {/* {member.name} */}
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div class='GetMembers'> <h2 className='my-3 p-2' style={{ 'text-align': 'center' }} >The view member  details page  </h2>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th style={{ 'font-size': '13px' }}>Member Id:</th>
                                    <th style={{ 'font-size': '13px' }}>Member Name:</th>
                                    <th style={{ 'font-size': '13px' }}>Member Email:</th>
                                    <th style={{ 'font-size': '13px' }}>Member Location: </th>
                                    <th style={{ 'font-size': '13px' }}>Blood Group:</th>

                                </tr>
                            </thead>
                            <tbody>
                                {members.map(member => (
                                    // <Row>

                                    //     <Col key={member._id} sm={12} lg={4} xl={3}>
                                    //         <p> Username: {member.username}  </p>


                                    //     </Col>
                                    //     <Col key={member._id} sm={12} lg={4} xl={3}>
                                    //         <p> Email: {member.email}  </p>


                                    //     </Col>
                                    //     <Col key={member._id} sm={12} lg={4} xl={3}>
                                    //         <p> Area: {member.city_state_country}  </p>


                                    //     </Col>


                                    // </Row>


                                    <tr>
                                        <td key={member._id} >
                                            <p>  {member._id} </p></td>
                                        <td key={member._id} >
                                            <p>  {member.username} </p></td>
                                        <td key={member._id} >
                                            <p>  {member.email}  </p> </td>
                                        <td key={member._id}><p>
                                            {member.addressLocation} </p></td>
                                        <td key={member._id}><p>
                                            {/* {moment(member.createdAt).format('YYYY-MMM-DD')} </p></td> */}
                                            {member.bloodGroup} </p></td>
                                    </tr>




                                ))}

                            </tbody>
                        </Table>

                        <h5 classNmae='my-2 p-2' style={{ margin: '0 auto', 'text-align': 'center' }}>
                            Number of Registered Members: {Object.keys(members).length}
                        </h5>
                    </div >}


            {/*  Use the a href to navigate through other url-> Load a new windows */}
            {/* <Card.body>
               
                 <Card.text as div>
                    <div className='my-3'>
                        {member.name} </div>
                </Card.text> 

           </Card.body>  */}

        </Card >
    )
}

export default OrganizationViewMembersScreen
