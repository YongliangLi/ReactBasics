import {connect} from 'react-redux';
import HeaderTitle from '../presentation/HeaderTitle.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        text: ownProps.text,
        totalCartItems: state.products.length
    }
}

const HeaderContainer = connect(
    mapStateToProps
)(HeaderTitle);

export default HeaderContainer;