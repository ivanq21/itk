import Posts from './Posts';
import { addPostAction, updatePostTextareaAction } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => { 
            dispatch(addPostAction());
        },
        updatePostText: (text) => {
            dispatch(updatePostTextareaAction(text));
        }
    }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;