import React from 'react';
import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, setUsers, setCurrentPage, setTotalUsers, setIsFetching, toggleFollowingProgress, getUsers } from '../../redux/usersReducer';

import Users from './Users';

import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component{
  
  componentDidMount(){
    this.props.getUsers(this.props.page, this.props.count);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.count);
  }


  render(){ return <>
                    {this.props.isFetching ? <Preloader /> : null} 
                    <Users totalUsers={this.props.totalUsers}
                        pageSize = { this.props.pageSize }
                         currentPage = { this.props.currentPage }
                         onPageChanged = { this.onPageChanged }
                         users = {this.props.users}
                         unfollow = {this.props.unfollowSuccess}
                         follow = {this.props.followSuccess}
                         followingProgress = {this.props.followingProgress}
                         isFetching = {this.props.isFetching}/> 
                    </>}
}


let mapStateToProp = (state) => {
  
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsers: state.usersPage.totalUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}


export default connect(mapStateToProp, {
   followSuccess, unfollowSuccess,
   setUsers, setCurrentPage, 
   setTotalUsers, setIsFetching,
  toggleFollowingProgress, getUsers})(UsersContainer);