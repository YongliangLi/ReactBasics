export const addProduct = (id) => {
    return {
        type: 'ADD_PRODUCT',
        id
    }
}

export const setProductFilter = (category) => {
    return {
        type: 'SET_PRODUCT_FILTER',
        category
    }
}