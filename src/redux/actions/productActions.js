export function selectedProduct(products) {
    return {
            type: "SET_SELECTED_PRODUCT",
            payload: products
        }
}

export function setProducts(products) {
    return {
            type: "SET_PRODUCTS",
            payload: products
        }
}


