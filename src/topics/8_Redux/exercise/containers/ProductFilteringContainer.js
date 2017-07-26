import {connect} from 'react-redux';
import ProductFiltering from '../presentation/ProductFiltering.jsx';
import {setProductFilter} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {}
}

const ProductFilteringContainer = connect(
    null,
    mapDispatchToProps
)(ProductFiltering);

export default ProductFilteringContainer;