import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
// import Moment from 'react-moment';
import moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'
import { Card, Container, Form, Button, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios'
import { membersTaskslist } from '../../actions/memberActions'

import { listMembers } from '../../actions/memberActions'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
function MemberViewTasksScreen({ memberTasks, history }) {


    const dispatch = useDispatch()
    const memberTasksList = useSelector(state => state.memberTasksList)
    const { error, loading, memberTask } = memberTasksList


    const memberLogin = useSelector(state => state.memberLogin)
    const { memberInfo } = memberLogin


    useEffect(() => {
        if (!memberLogin) {
            history.push('/MemberLoginScreen')
        } else {
            dispatch(membersTaskslist(memberInfo._id))


        }
    }, [dispatch, history])


    return (
        <div>
            <Card className='my-3 p-3 rounded'>
                {/* {member.name} */}
                {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        :
                        <div class='GetOrganizationPosts'> <h2 style={{ 'textAlign': 'center' }}>The Member's AssignedTask Details Screen </h2>
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th style={{ 'font-size': '13px' }}>Organization Post Id:</th>
                                        <th style={{ 'font-size': '13px' }}>Organization Requirement Information:</th>
                                        <th style={{ 'font-size': '13px' }}>Posted by Organization email:</th>
                                        <th style={{ 'font-size': '13px' }}>Requirement Location:</th>
                                        <th style={{ 'font-size': '13px' }} >Timeline:</th>

                                    </tr>
                                </thead>

                                {memberTask.map(memberTask => (

                                    <tbody>

                                        <tr>
                                            <td key={memberTask._id} >
                                                <p>  {memberTask._id} </p></td>
                                            <td key={memberTask._id} >
                                                <p>  {memberTask.requirementInformation} </p></td>
                                            <td key={memberTask._id} >
                                                <p>  {memberTask.postedByOrganizationEmail}  </p> </td>
                                            <td key={memberTask._id}  ><p>{memberTask.addressLocation}</p></td>
                                            <td key={memberTask._id}><p>
                                                {moment(memberTask.createdAt).format('DD-MMM-YYYY')}
                                            </p> </td>

                                        </tr>
                                        {/* < h1 hidden (organizationPost.MemberSelected ? i++ : 'NULL) /> */}
                                    </tbody>
                                    // getValueOfI(organizationPost)


                                ))}
                            </Table>
                            <h5 classNmae='my-2 p-2' style={{ margin: '0 auto', 'text-align': 'center' }}>
                                Number of Tasks Assigned: {Object.keys(memberTask).length}
                            </h5>
                            <h5 classNmae='my-2 p-2' style={{ margin: '0 auto', 'text-align': 'center' }}>
                                {/* Number of Members assigned: {i} */}
                            </h5>

                        </div >}





            </Card >

        </div>
    )
}

export default MemberViewTasksScreen
