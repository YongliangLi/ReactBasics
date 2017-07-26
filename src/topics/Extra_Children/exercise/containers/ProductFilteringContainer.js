import {connect} from 'react-redux';
import ProductFiltering from '../presentation/ProductFiltering.jsx';
import {setProductFilter} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterClick: (categoryName) => {
            dispatch(setProductFilter(categoryName));
        }
    }
}

const ProductFilteringContainer = connect(
    null,
    mapDispatchToProps
)(ProductFiltering);

export default ProductFilteringContainer;