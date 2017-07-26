const products = (state = [], action) => {
    switch (action.type){
        case 'ADD_PRODUCT':
            return Array.of(...state, action.id);

        default:
            return state;
    }
}

export default products;