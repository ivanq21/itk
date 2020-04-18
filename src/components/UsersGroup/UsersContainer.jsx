import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsers, setIsFetching } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';


import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component{
 
  getUsers = (page=this.props.currentPage) => {
    this.props.setIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`)
        .then(response => {
          console.log(response.data)
          this.props.setUsers(response.data.items)
          this.props.setTotalUsers(response.data.totalCount)
          this.props.setIsFetching(false);
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


export default connect(mapStateToProp, { follow, unfollow, setUsers, setCurrentPage, setTotalUsers, setIsFetching })(UsersContainer);