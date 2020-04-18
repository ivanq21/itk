import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
     
  getUsers = (userId) => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
          console.log(response.data)
          this.props.setUserProfile(response.data)
        })
  }
    componentDidMount(){
      let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
        this.getUsers(userId);
    }

    render() {
      console.log(this.props)
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataComponent);