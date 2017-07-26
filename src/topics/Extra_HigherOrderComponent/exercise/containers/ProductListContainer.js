import {connect} from 'react-redux';
import ProductList from '../presentation/ProductList.jsx';
import {addProduct} from '../actions';
import {ProductData} from '../../../MockData';

const filterProducts = (category) => {
    const categoryLowered = category.toLowerCase();

    switch (categoryLowered){
        case 'desktop':
        case 'laptop':
            return ProductData.filter(product => product.category.toLowerCase() === categoryLowered);

        default:
            return ProductData;
    }
}

const mapStateToProps = (state) => {
    return {
        products: filterProducts(state.category)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddClick: (id) => {
            dispatch(addProduct(id));
        }
    }
}

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);

export default ProductListContainer;