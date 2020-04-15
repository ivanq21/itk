import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUserAC, setCurrentAC, setTotalUsersAC, setIsFetchingAC } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';


import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component{
 
  getUsers = (page=this.props.currentPage) => {
    this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`)
        .then(response => {
          console.log(response.data)
          this.props.setUsers(response.data.items)
          this.props.setTotalUsers(response.data.totalCount)
          this.props.toggleIsFetching(false);
        })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.getUsers();
  }
  componentDidMount(){
    this.getUsers();
  }

  render(){ return <>
                    {this.props.isFetching ? <Preloader /> : null} 
                    <Users totalUsers={this.props.totalUsers}
                        pageSize = { this.props.pageSize }
                         currentPage = { this.props.currentPage }
                         onPageChanged = { this.onPageChanged }
                         users = {this.props.users}
                         unfollow = {this.props.unfollow}
                         follow = {this.props.follow}
                         isFetching = {this.props.isFetching}/> 
                    </>}
}


let mapStateToProp = (state) => {
  
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProp = (dispatch) => {
  return{
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUserAC(users))
    },
    setCurrentPage: (pageId) => {
      dispatch(setCurrentAC(pageId))
    },
    setTotalUsers: (total) => {
      dispatch(setTotalUsersAC(total))
    },
    toggleIsFetching: (isFetching) =>{
      dispatch(setIsFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(UsersContainer);