import { updateFriendMsg, addFriendMsg } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addFriendMsg: () => {
            dispatch(addFriendMsg());
        },
        updateFriendMsg: (text) => {
            dispatch(updateFriendMsg(text))
        } 
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;