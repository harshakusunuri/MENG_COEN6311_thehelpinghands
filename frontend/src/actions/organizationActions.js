import axios from 'axios'
import {

    ORGANIZATION_REGISTER_REQUEST, ORGANIZATION_REGISTER_SUCCESS, ORGANIZATION_REGISTER_FAIL, ORGANIZATION_LOGOUT,
    ORGANIZATION_LOGIN_REQUEST, ORGANIZATION_LOGIN_SUCCESS, ORGANIZATION_LOGIN_FAIL,
    ORGANIZATION_DETAILS_REQUEST,
    ORGANIZATION_DETAILS_SUCCESS,
    ORGANIZATION_DETAILS_FAIL,
    ORGANIZATION_DETAILS_RESET,
    ORGANIZATION_UPDATE_PROFILE_REQUEST,
    ORGANIZATION_UPDATE_PROFILE_SUCCESS,
    ORGANIZATION_UPDATE_PROFILE_FAIL,
    ORGANIZATION_UPDATE_PROFILE_RESET,
    ORGANIZATION_POSTS_LIST_REQUEST,
    ORGANIZATION_POSTS_LIST_SUCCESS,
    ORGANIZATION_POSTS_LIST_FAIL,
    ORGANIZATION_POSTS_CREATE_POST_REQUEST,
    ORGANIZATION_POSTS_CREATE_POST_SUCCESS,
    ORGANIZATION_POSTS_CREATE_POST_FAIL,
    ORGANIZATION_UPDATE_POSTS_LIST_REQUEST,
    ORGANIZATION_UPDATE_POSTS_LIST_SUCCESS,
    ORGANIZATION_UPDATE_POSTS_LIST_FAIL,

} from '../constants/organizationConstants'



export const organizationsPostsUpdatePost = (_id, requirementInformation, addressLocation, MemberSelected) => async (dispatch) => {
    try {
        dispatch({
            type: ORGANIZATION_UPDATE_POSTS_LIST_REQUEST
        })
        // 
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/organization/updatePost/',
            { _id, requirementInformation, addressLocation, MemberSelected, "isOrganizationMember": true },
            config
        )
        //  
        dispatch({
            type: ORGANIZATION_UPDATE_POSTS_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ORGANIZATION_UPDATE_POSTS_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}




export const organizationPostslist = (postedByOrganization) => async (dispatch, getState) => {
    try {

        dispatch({ type: ORGANIZATION_POSTS_LIST_REQUEST })
        const {
            memberList: { members },
        } = getState()
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/organization/viewPosts/',
            { postedByOrganization, "isOrganizationMember": true },
            config)

        dispatch({
            type: ORGANIZATION_POSTS_LIST_SUCCESS,
            payload: data
        })


    }
    catch (error) {
        dispatch({
            type: ORGANIZATION_POSTS_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
            //error.response && error.response.data.message ?? error.response.data.message : error.message
        })

    }


}

export const organizationsPostsCreatePost = (postedByOrganization, requirementInformation, postedByOrganizationEmail, addressLocation) => async (dispatch) => {
    try {
        dispatch({
            type: ORGANIZATION_POSTS_CREATE_POST_REQUEST
        })
        // 
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/organization/createPost/',
            { postedByOrganization, postedByOrganizationEmail, requirementInformation, addressLocation, "isOrganizationMember": true },
            config
        )
        //  
        dispatch({
            type: ORGANIZATION_POSTS_CREATE_POST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ORGANIZATION_POSTS_CREATE_POST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


export const organizationsLogout = () => (dispatch) => {
    localStorage.removeItem('organizationInfo')
    dispatch({ type: ORGANIZATION_LOGOUT })
    dispatch({ type: ORGANIZATION_DETAILS_RESET })

    // dispatch({ type: ORDER_LIST_MY_RESET })
    // dispatch({ type: USER_LIST_RESET })
}


export const organizationsLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ORGANIZATION_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/organization/login/',
            { 'email': email, 'password': password, "isOrganizationMember": true },
            config
        )

        dispatch({
            type: ORGANIZATION_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('organizationInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ORGANIZATION_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}



export const organizationsRegister = (email, password, username, addressLocation) => async (dispatch) => {
    try {
        dispatch({
            type: ORGANIZATION_REGISTER_REQUEST
        })
        // 
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/organization/register/',
            { 'email': email, 'password': password, 'username': username, addressLocation, "isOrganizationMember": true },
            config
        )
        //  
        dispatch({
            type: ORGANIZATION_REGISTER_SUCCESS,
            payload: data
        })
        //For auto login of the profile
        dispatch({
            type: ORGANIZATION_LOGIN_SUCCESS,
            payload: data
        })///ends here
        localStorage.setItem('organizationInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ORGANIZATION_REGISTER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}



export const getOrganizationDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORGANIZATION_DETAILS_REQUEST
        })

        const {
            organizationLogin: { organizationInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json'
                // Authorization: `Bearer ${organizationInfo._id}`
            }
        }

        const { data } = await axios.post(
            "/api/organization/getProfile/",
            { "_id": id },
            config
        )

        dispatch({
            type: ORGANIZATION_DETAILS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ORGANIZATION_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


export const organizationsUpdateProfile = (id, username, email, password, addressLocation, chairman) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORGANIZATION_UPDATE_PROFILE_REQUEST
        })

        const {
            organizationLogin: { organizationInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json'
                // Authorization: `Bearer ${organizationInfo.token}`
            }
        }

        const { data } = await axios.put(
            '/api/organization/updateDetails/',
            { '_id': id, username, email, password, addressLocation, chairman },
            config
        )

        dispatch({
            type: ORGANIZATION_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: ORGANIZATION_UPDATE_PROFILE_RESET,
            payload: data
        })

        localStorage.setItem('organizationInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ORGANIZATION_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}
