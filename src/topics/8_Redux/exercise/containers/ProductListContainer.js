import {connect} from 'react-redux';
import ProductList from '../presentation/ProductList.jsx';
import {addProduct} from '../actions';
import {ProductData} from '../../../MockData';

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);

export default ProductListContainer;