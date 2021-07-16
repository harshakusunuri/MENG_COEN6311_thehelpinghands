import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { memberListReducer, memberLoginReducer, memberRegisterReducer, memberDetailsReducer, memberUpdateProfileReducer, memberTasksListReducer } from './reducers/memberReducers'
import { organizationRegisterReducer, organizationLoginReducer, organizationDetailsReducer, organizationUpdateProfileReducer, organizationPostListReducer, organizationPostCreatePostReducer, organizationPostUpdatePostReducer } from './reducers/organizationReducers'


const reducer = combineReducers({
    memberList: memberListReducer,
    memberLogin: memberLoginReducer,
    memberRegister: memberRegisterReducer,
    organizationRegister: organizationRegisterReducer,
    organizationLogin: organizationLoginReducer,
    memberDetails: memberDetailsReducer,
    memberUpdateProfile: memberUpdateProfileReducer,
    organizationDetails: organizationDetailsReducer,
    organizationUpdateProfile: organizationUpdateProfileReducer,
    organizationPostList: organizationPostListReducer,
    organizationPostCreatePost: organizationPostCreatePostReducer,
    memberTasksList: memberTasksListReducer,
    organizationPostUpdateList: organizationPostUpdatePostReducer,

})

const memberInfoFromStorage = localStorage.getItem('memberInfo') ?
    JSON.parse(localStorage.getItem('memberInfo')) : null

const organizationInfoFromStorage = localStorage.getItem('organizationInfo') ?
    JSON.parse(localStorage.getItem('organizationInfo')) : null

const initialState = {
    memberLogin: { memberInfo: memberInfoFromStorage },
    organizationLogin: { organizationInfo: organizationInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store