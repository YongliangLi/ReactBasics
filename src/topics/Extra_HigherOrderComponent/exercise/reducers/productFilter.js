const productFilter = (state = 'ALL', action) => {
    switch (action.type){
        case 'SET_PRODUCT_FILTER':
            return action.category;

        default:
            return state;
    }
}

export default productFilter;