import {usersAPI} from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT='SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWPR='TOGGLE_IS_FOLLOWPR';

let initialState = {
  users: [],
  totalUsers: 1,
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
  followingProgress: false
}


const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
            if (u.id === action.userId){
              return{ ...u, following: true }
            }
            return u;
        }),

      }
    
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(u => {
          if(u.id === action.userId){
            return {...u, following: false}
          }
          return u;
        })
      }
    
    case SET_USERS: 
      return {...state,
         users: action.users }

    case SET_CURRENT_PAGE: 
      return {...state, currentPage: action.currentPage}
      
    case SET_TOTAL_COUNT: 
      return {...state, totalUsers: action.total} 
    
    case TOGGLE_IS_FETCHING: 
      return {...state, isFetching: action.isFetching} 

    case TOGGLE_IS_FOLLOWPR: 
      return {...state, followingProgress: action.isFetching} 

    default: 
      return state;
  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsers = (total) => ({type: SET_TOTAL_COUNT, total})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching) => ({type: TOGGLE_IS_FOLLOWPR, isFetching})

export const getUsers = (page, count) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(page, count).then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsers(data.totalCount));
      dispatch(setIsFetching(false));
    })
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true));
    usersAPI.setFollow(id).then(data => {
        if(data.resultCode === 0){
          dispatch(followSuccess(id));
        }
        dispatch(toggleFollowingProgress(false, id));
      })
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true));
    usersAPI.setFollow(id).then(data => {
        if(data.resultCode === 0){
          dispatch(unfollowSuccess(id));
        }
        dispatch(toggleFollowingProgress(false, id));
      })
  }
}

export default usersReducer;