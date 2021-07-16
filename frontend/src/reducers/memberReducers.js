import axios from 'axios'
import {
    MEMBER_LIST_REQUEST, MEMBER_LIST_SUCCESS, MEMBER_LIST_FAIL,
    MEMBER_LOGIN_REQUEST, MEMBER_LOGIN_SUCCESS, MEMBER_LOGIN_FAIL, MEMBER_LOGOUT,
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
    MEMBER_TASKS_LIST_FAIL,
} from '../constants/memberConstants'



export const memberTasksListReducer = (state = { memberTask: [] }, action) => {
    switch (action.type) {
        case MEMBER_TASKS_LIST_REQUEST:
            return { loading: true, state }

        case MEMBER_TASKS_LIST_SUCCESS:
            return { loading: false, memberTask: action.payload }

        case MEMBER_TASKS_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const memberListReducer = (state = { members: [] }, action) => {
    switch (action.type) {
        case MEMBER_LIST_REQUEST:
            return { loading: true, state }

        case MEMBER_LIST_SUCCESS:
            return { loading: false, members: action.payload }

        case MEMBER_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const memberLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case MEMBER_LOGIN_REQUEST:
            return { loading: true }

        case MEMBER_LOGIN_SUCCESS:
            return { loading: false, memberInfo: action.payload }

        case MEMBER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case MEMBER_LOGOUT:
            return {}
        default:
            return state
    }

}



export const memberRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case MEMBER_REGISTER_REQUEST:
            return { loading: true }

        case MEMBER_REGISTER_SUCCESS:
            return { loading: false, memberInfo: action.payload }

        case MEMBER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        case MEMBER_LOGOUT:
            return {}

        default:
            return state
    }

}




export const memberDetailsReducer = (state = { member: {} }, action) => {
    switch (action.type) {
        case MEMBER_DETAILS_REQUEST:
            return { ...state, loading: true }

        case MEMBER_DETAILS_SUCCESS:
            return { loading: false, member: action.payload }

        case MEMBER_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case MEMBER_DETAILS_RESET:
            return { member: {} }


        default:
            return state
    }
}


export const memberUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case MEMBER_UPDATE_PROFILE_REQUEST:
            return { loading: true }

        case MEMBER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, memberInfo: action.payload }

        case MEMBER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }

        case MEMBER_UPDATE_PROFILE_RESET:
            return {}

        default:
            return state
    }
}

