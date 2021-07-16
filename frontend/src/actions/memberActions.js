import axios from 'axios'
import {
    MEMBER_LIST_REQUEST, MEMBER_LIST_SUCCESS, MEMBER_LIST_FAIL, MEMBER_LOGIN_REQUEST, MEMBER_LOGIN_SUCCESS, MEMBER_LOGIN_FAIL, MEMBER_LOGOUT,
    MEMBER_REGISTER_SUCCESS, MEMBER_REGISTER_REQUEST, MEMBER_REGISTER_FAIL,

    MEMBER_DETAILS_REQUEST,
    MEMBER_DETAILS_SUCCESS,
    MEMBER_DETAILS_FAIL,
    MEMBER_DETAILS_RESET,
    MEMBER_UPDATE_PROFILE_REQUEST,
    MEMBER_UPDATE_PROFILE_SUCCESS,
    MEMBER_UPDATE_PROFILE_FAIL,
    MEMBER_UPDATE_PROFILE_RESET,
    MEMBER_TASKS_LIST_REQUEST,
    MEMBER_TASKS_LIST_SUCCESS,
    MEMBER_TASKS_LIST_FAIL

} from '../constants/memberConstants'

// organization/viewPosts/

export const membersTaskslist = (MemberSelected) => async (dispatch) => {
    try {

        dispatch({ type: MEMBER_TASKS_LIST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/member/viewTasks/',
            { MemberSelected, "isOrganizationMember": true },
            config)

        dispatch({
            type: MEMBER_TASKS_LIST_SUCCESS,
            payload: data
        })


    }
    catch (error) {
        dispatch({
            type: MEMBER_TASKS_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
            //error.response && error.response.data.message ?? error.response.data.message : error.message
        })

    }


}

export const listMembers = () => async (dispatch) => {
    try {

        dispatch({ type: MEMBER_LIST_REQUEST })

        const { data } = await axios.get('/api/organization/viewMembers/')

        dispatch({
            type: MEMBER_LIST_SUCCESS,
            payload: data
        })


    }
    catch (error) {
        dispatch({
            type: MEMBER_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
            //error.response && error.response.data.message ?? error.response.data.message : error.message
        })

    }


}


export const membersLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: MEMBER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/member/login/',
            { 'email': email, 'password': password, "isOrganizationMember": false },
            config
        )

        dispatch({
            type: MEMBER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('memberInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: MEMBER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


export const membersLogout = () => (dispatch) => {
    localStorage.removeItem('memberInfo')
    dispatch({ type: MEMBER_LOGOUT })
    dispatch({ type: MEMBER_DETAILS_RESET })
    // dispatch({ type: ORDER_LIST_MY_RESET })
    // dispatch({ type: USER_LIST_RESET })
}


export const membersRegister = (email, password, username, addressLocation) => async (dispatch) => {
    try {
        dispatch({
            type: MEMBER_REGISTER_REQUEST
        })
        // 
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/member/register/',
            { 'email': email, 'password': password, 'username': username, addressLocation, "isOrganizationMember": false },
            config
        )
        //  
        dispatch({
            type: MEMBER_REGISTER_SUCCESS,
            payload: data
        })
        //For auto login of the profile
        dispatch({
            type: MEMBER_LOGIN_SUCCESS,
            payload: data
        })///ends here
        localStorage.setItem('memberInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: MEMBER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}



export const getMemberDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MEMBER_DETAILS_REQUEST
        })

        const {
            memberLogin: { memberInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json'
                // Authorization: `Bearer ${memberInfo._id}`
            }
        }

        const { data } = await axios.post(
            "/api/member/getProfile/",
            { "_id": id },
            config
        )

        dispatch({
            type: MEMBER_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: MEMBER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


export const membersUpdateProfile = (id, username, email, password, addressLocation, bloodGroup) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MEMBER_UPDATE_PROFILE_REQUEST
        })

        const {
            memberLogin: { memberInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json'
                // Authorization: `Bearer ${memberInfo.token}`
            }
        }

        const { data } = await axios.put(
            '/api/member/updateDetails/',
            { '_id': id, username, email, password, addressLocation, bloodGroup },
            config
        )

        dispatch({
            type: MEMBER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: MEMBER_UPDATE_PROFILE_RESET,
            payload: data
        })

        localStorage.setItem('memberInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: MEMBER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}
