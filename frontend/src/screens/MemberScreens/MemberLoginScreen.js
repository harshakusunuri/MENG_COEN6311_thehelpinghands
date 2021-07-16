import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { memberLogin } from '../../actions/memberActions'
import { Card, Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { membersLogin } from '../../actions/memberActions'

function MemberLoginScreen({ location, history }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const memberLogin = useSelector(state => state.memberLogin)
    const { error, loading, memberInfo } = memberLogin

    useEffect(() => {
        if (memberInfo) {
            history.push(redirect)
        }
    }, [redirect, memberInfo, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(membersLogin(email, password))
    }




    return (
        <div className='my-3 p-2' style={{ 'text-align': 'center' }}>
            <h2> Login as a Member </h2>
            {error && <Message variant='danger'>{error}</Message>}
            {/* {loading && <Loader />} */}
            <Form onSubmit={submitHandler} className='my-3 p-2' style={{ 'max-width': '70%', margin: '0 auto' }}>

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

                {/* <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                {/* {['checkbox'].map((type) => (
                    <div key={type} className="mb-3">
                        <Form.Check type={type} id={`check-api-${type}`}>
                            <Form.Check.Input type={type} isValid />
                            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                             <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> 
                        </Form.Check>
                    </div>
                ))} */}

                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        Kindly note that details can be updated any time in the update details page. Have a good day!
                    </p>


                </Alert>
                <Button variant="primary" type="submit" style={{ 'background-color': '#4bbf73' }}>
                    Login as a Member
                </Button>


            </Form>
            <Link to='/MemberRegisterScreen' className='my-1 p-1' style={{}}> <i className="fas fa-user my-2 p-2"></i>Not regsitered yet? Click for Registration screen</Link>
        </div >
    )
}

export default MemberLoginScreen
