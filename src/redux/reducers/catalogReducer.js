
const initialState = {
    products: JSON.parse(localStorage.getItem("products")) || [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };

        default:
            return state;
    }
};

export default reducer;