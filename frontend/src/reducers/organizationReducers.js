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


export const organizationPostUpdatePostReducer = (state = {}, action) => {
    switch (action.type) {
        case ORGANIZATION_UPDATE_POSTS_LIST_REQUEST:
            return { loading: true }

        case ORGANIZATION_UPDATE_POSTS_LIST_SUCCESS:
            return { loading: false, organizationPostsUpdatePost: action.payload }

        case ORGANIZATION_UPDATE_POSTS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }

}


export const organizationPostListReducer = (state = { organizationPosts: [] }, action) => {
    switch (action.type) {
        case ORGANIZATION_POSTS_LIST_REQUEST:
            return { loading: true, state }

        case ORGANIZATION_POSTS_LIST_SUCCESS:
            return { loading: false, organizationPosts: action.payload }

        case ORGANIZATION_POSTS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const organizationPostCreatePostReducer = (state = {}, action) => {
    switch (action.type) {
        case ORGANIZATION_POSTS_CREATE_POST_REQUEST:
            return { loading: true }

        case ORGANIZATION_POSTS_CREATE_POST_SUCCESS:
            return { loading: false, organizationPostsCreatePost: action.payload }

        case ORGANIZATION_POSTS_CREATE_POST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }

}




export const organizationLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case ORGANIZATION_LOGIN_REQUEST:
            return { loading: true }

        case ORGANIZATION_LOGIN_SUCCESS:
            return { loading: false, organizationInfo: action.payload }

        case ORGANIZATION_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case ORGANIZATION_LOGOUT:
            return {}
        default:
            return state
    }

}

export const organizationRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case ORGANIZATION_REGISTER_REQUEST:
            return { loading: true }

        case ORGANIZATION_REGISTER_SUCCESS:
            return { loading: false, organizationInfo: action.payload }

        case ORGANIZATION_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        case ORGANIZATION_LOGOUT:
            return {}

        default:
            return state
    }

}




export const organizationDetailsReducer = (state = { organization: {} }, action) => {
    switch (action.type) {
        case ORGANIZATION_DETAILS_REQUEST:
            return { ...state, loading: true }

        case ORGANIZATION_DETAILS_SUCCESS:
            return { loading: false, organization: action.payload }

        case ORGANIZATION_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case ORGANIZATION_DETAILS_RESET:
            return { organization: {} }


        default:
            return state
    }
}


export const organizationUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case ORGANIZATION_UPDATE_PROFILE_REQUEST:
            return { loading: true }

        case ORGANIZATION_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, organizationInfo: action.payload }

        case ORGANIZATION_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }

        case ORGANIZATION_UPDATE_PROFILE_RESET:
            return {}

        default:
            return state
    }
}

