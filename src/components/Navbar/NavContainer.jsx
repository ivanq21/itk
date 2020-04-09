
import { connect } from 'react-redux';
import Nav from './Nav';



let mapStateToProps = (state) => {
    return{
        siteBar: state.siteBar,
    }
}


let NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;